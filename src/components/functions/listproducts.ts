import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string | null;
  category: string | null;
}

// Cache da função para evitar consultas repetidas
const getCachedProducts = unstable_cache(
  async (category?: string) => {
    const produtos: Product[] = await prisma.product.findMany({
      where: category
        ? {
            category: {
              equals: category,
              mode: "insensitive", // Case insensitive
            },
          }
        : undefined,
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
        description: true,
        category: true,
      },
      orderBy: { name: "asc" }, // Ordenação consistente
    });
    return produtos;
  },
  ["products"], // Cache key
  {
    revalidate: 120, // 5 minutos
    tags: ["products"], // Para invalidação manual
  }
);

export default async function ListProducts(category?: string) {
  return await getCachedProducts(category);
}
