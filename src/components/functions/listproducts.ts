import prisma from "@/lib/prisma";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string | null;
  category: string | null;
}

export default async function ListProducts(category?: string) {
  const produtos: Product[] = await prisma.product.findMany({
    where: category ? { category } : undefined,
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
      description: true,
      category: true,
    },
  });
  return produtos;
}
