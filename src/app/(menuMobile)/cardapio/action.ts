"use server";

import ListProducts, { Product } from "@/components/functions/listproducts";

export async function getProducts(category?: string): Promise<Product[]> {
  return await ListProducts(category);
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return await ListProducts(category);
}
