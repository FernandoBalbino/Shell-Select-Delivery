import ListProducts from "@/components/functions/listproducts";
import Search from "./search";
export default async function Buscar() {
  const produtos = await ListProducts();

  return (
    <>
      <section>
        <Search produtos={produtos} />
      </section>
    </>
  );
}
