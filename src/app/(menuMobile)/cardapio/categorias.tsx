import { Product } from "@/components/functions/listproducts";
interface CategoriasComidasProps {
  produtos: Product[];
}
import Image from "next/image";
export default function CategoriasComidas({
  produtos,
}: CategoriasComidasProps) {
  return (
    <>
      {produtos.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={200}
            className="w-full h-full object-contain "
            loading="lazy"
          />
        </div>
      ))}
    </>
  );
}
