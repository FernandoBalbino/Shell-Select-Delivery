import getProduct from "@/components/functions/listproductsById";
import ProdutoIsolado from "@/components/ui/produtoIsolado";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const produto = await getProduct(slug);

  if (!produto) {
    notFound();
  }

  return (
    <>
      <ProdutoIsolado produto={produto} />
    </>
  );
}
