import { NextResponse } from "next/server";
import ListProducts from "@/components/functions/listproducts";

export async function GET(request: Request) {
  const produtos = await ListProducts();
  return NextResponse.json(produtos);
}
