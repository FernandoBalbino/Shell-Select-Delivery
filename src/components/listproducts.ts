import prisma from "@/lib/prisma";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string | null;
}

export default async function ListProducts() {
  const produtos: Product[] = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
      description: true,
    },
  });
  return produtos;
}
