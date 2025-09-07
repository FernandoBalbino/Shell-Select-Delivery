"use client";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/components/functions/listproducts";
interface BebidasPopularesProps {
  produtos: Product[];
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "./button";
import { IoAddSharp } from "react-icons/io5";
export default function BebidasPopulares({ produtos }: BebidasPopularesProps) {
  const [visibleCount, setVisibleCount] = useState(5);
  if (!produtos || produtos.length === 0) {
    return <div>Carregando bebidas...</div>;
  }
  const produtosVisiveis = produtos.slice(0, visibleCount);

  return (
    <>
      <article className="">
        <div className="px-4   py-6">
          <h2 className="text-xl font-bold mb-4">Bebidas Populares</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative "
          >
            <CarouselContent>
              {produtosVisiveis.map((lanche, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[60%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="rounded-lg bg-white h-60 relative border shadow-sm p-4 flex flex-col items-center ">
                    <div className="w-[150px] h-[150px] mb-2 overflow-hidden">
                      <Image
                        src={lanche.image}
                        alt={lanche.name}
                        width={180}
                        height={180}
                        className="w-full h-full object-contain "
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-base content-start w-full font-semibold">
                      {lanche.name}
                    </h3>

                    <div className="text-sm font-bold mt-1 justify-between items-center w-full flex">
                      <p className="text-[20px] text-black">
                        {lanche.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <Button
                        className="bg-[#F38808] rounded-[15px]"
                        variant={"default"}
                      >
                        <IoAddSharp size={50} />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
          {visibleCount < produtos.length && (
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-[#F38808] text-white rounded-lg"
                onClick={() => setVisibleCount(visibleCount + 5)}
              >
                Ver mais
              </button>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
