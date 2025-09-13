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

// Cache da função para produto único
const getCachedProduct = unstable_cache(
  async (id: string) => {
    const produto = await prisma.product.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
        description: true,
        category: true,
      },
    });

    return produto;
  },
  [], // cache dinâmico por ID
  {
    revalidate: 300, // 5 minutos
    tags: [], // tag dinâmica por ID
  }
);

export default async function getProduct(id: string): Promise<Product | null> {
  if (!id) return null;

  return await getCachedProduct(id);
}
