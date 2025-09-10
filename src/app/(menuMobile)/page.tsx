"use cache";
import Image from "next/image";
import BebidasPopulares from "@/components/ui/bebidas";
import LanchesPopulares from "@/components/ui/populares";
import Lanches from "@/components/ui/lanches";
import ListProducts from "@/components/functions/listproducts";

export default async function Home() {
  // ✅ Chama diretamente a função otimizada (muito mais rápido!)
  const produtos = await ListProducts();

  // Filtra os produtos por categoria
  const bebidas = produtos.filter((p) => p.category === "bebida");
  const lanches = produtos.filter((p) => p.category === "lanche");

  return (
    <>
      <div className="border-b-1 justify-between px-3 bg-white items-center flex border-[#f7f7f7]">
        <div>
          <Image src="/logo.svg" alt="Logo" width={60} height={60} />
        </div>
        <div>
          <address className="flex-col">
            <span className="text-[#303030ff]">
              R. Barão de Anadia, 31 - Centro
            </span>
            <div className="text-[12px] text-right text-[#3e3e3e]">
              CEP 57020-630
            </div>
          </address>
        </div>
      </div>

      <section>
        <article>
          <Image
            src="/shell-select.webp"
            alt="Banner"
            priority={true}
            width={200}
            height={200}
            className="w-full mb-7 h-auto"
          />
        </article>
      </section>

      <section>
        <article>
          <div className="flex-col items-center bg-white rounded-lg m-3 p-3">
            <h1 className="text-[30px] barlow relative   tracking-tight text-[#0E1014] uppercase font-bold my-5">
              Evite filas: monte seu pedido aqui e retire na Conveniência
              <span className="absolute h-[5px] w-full bg-gradient-to-bl from-yellow-400 to-orange-500 bottom-0 left-0 bg-[length:200%_200%] animate-gradient-move"></span>
            </h1>
            <p className="text-[#575757ff] ">
              Faça seu pedido aqui no site e pague no caixa da conveniência.
            </p>
          </div>
        </article>
      </section>

      <section>
        <LanchesPopulares produtos={produtos} />
      </section>

      <section>
        <BebidasPopulares produtos={bebidas} />
      </section>

      <section>
        <Lanches produtos={lanches} />
      </section>
    </>
  );
}
