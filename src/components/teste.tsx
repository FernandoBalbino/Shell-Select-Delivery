import ListProducts from "./listproducts";
export default async function Teste() {
  const produtos = await ListProducts();
  console.log(produtos);
  return (
    <>
      <h1 className="bg-red-700">teste</h1>
      <div>
        {produtos.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.name}</h2>
            image: <img src={produto.image} alt={produto.name} width={100} />
          </div>
        ))}
      </div>
    </>
  );
}
