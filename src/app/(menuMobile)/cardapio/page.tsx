"use cache";
import CategoriasComidas from "./categorias";
import SecoesCardapio from "./secoes";
import ListProducts from "@/components/functions/listproducts";

export default async function Cardapio() {
  // ✅ Chama diretamente a função otimizada
  const produtos = await ListProducts();

  return (
    <>
      <CategoriasComidas />
      <SecoesCardapio produtos={produtos} />
    </>
  );
}
