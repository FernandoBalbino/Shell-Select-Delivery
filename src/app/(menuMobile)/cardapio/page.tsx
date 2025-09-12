import CategoriasComidas from "./categorias";
import SecoesCardapio from "./secoes";
import ListProducts from "@/components/functions/listproducts";

export default async function Cardapio() {
  const produtos = await ListProducts();

  return (
    <>
      <CategoriasComidas />
      <SecoesCardapio produtos={produtos} />
    </>
  );
}
