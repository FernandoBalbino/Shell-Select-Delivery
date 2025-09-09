"use cache";
import CategoriasComidas from "./categorias";
import SecoesCardapio from "./secoes";
export default async function Cardapio() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api`, {
    cache: "force-cache",
    next: { revalidate: 120 },
  });
  const produtos = await res.json();

  return (
    <>
      <CategoriasComidas />
      <SecoesCardapio produtos={produtos} />
    </>
  );
}
