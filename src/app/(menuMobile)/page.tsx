import Image from "next/image";
import BebidasPopulares from "@/components/ui/bebidas";
import LanchesPopulares from "@/components/ui/populares";
import Lanches from "@/components/ui/lanches";
import { Suspense } from "react";
export default function Home() {
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
            <h1 className="text-[#303030ff] text-2xl font-semibold px-3 py-2">
              Evite filas: monte seu pedido aqui e retire na Conveniência
            </h1>
            <p className="text-[#575757ff] px-3">
              Faça seu pedido aqui no site e pague no caixa da conveniência.
            </p>
          </div>
        </article>
      </section>

      <section>
        <LanchesPopulares />
      </section>
      <section>
        <BebidasPopulares />
      </section>
      <section>
        <Lanches />
      </section>
    </>
  );
}
