"use client";

import { Product } from "@/components/functions/listproducts";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface LanchesProps {
  produtos: Product[];
}
import AdicionarButton from "./adicionarButton";
export const revalidate = 120;

export default function Lanches({ produtos }: LanchesProps) {
  const [visibleCount, setVisibleCount] = useState(5);
  if (!produtos || produtos.length === 0) {
    return <div>Carregando lanches...</div>;
  }
  const produtosVisiveis = produtos.slice(0, visibleCount);

  return (
    <>
      <article className="">
        <div className=" pl-4 relative py-6">
          <h2 className="text-xl pr-4 flex items-center justify-between font-bold mb-4">
            Lanches Populares
            {visibleCount < produtos.length && (
              <button
                className=" text-[#F38808] cursor-pointer "
                onClick={() => setVisibleCount(visibleCount + 5)}
              >
                Ver mais
              </button>
            )}
          </h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full relative "
          >
            <CarouselContent>
              {produtosVisiveis.map((lanche, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[65%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="rounded-lg h-66 relative border shadow-sm p-4 flex flex-col hover:shadow-md transition">
                    {/* Link cobre apenas imagem e nome */}
                    <Link
                      href={`/produtos/${lanche.id}`}
                      className="block flex-1"
                      prefetch={true}
                    >
                      <div className="w-[180px] h-[160px] mb-2 overflow-hidden mx-auto">
                        <Image
                          src={lanche.image}
                          alt={lanche.name}
                          width={170}
                          height={170}
                          className="w-full h-full object-contain"
                          priority={true}
                        />
                      </div>
                      <h3 className="text-base font-semibold truncate">
                        {lanche.name}
                      </h3>
                    </Link>

                    {/* Linha com preço e botão sempre no mesmo nível */}
                    <div className="mt-auto flex justify-between items-center w-full">
                      <p className="text-[20px] text-black font-bold">
                        {lanche.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <AdicionarButton
                        produto={{
                          id: lanche.id,
                          name: lanche.name,
                          price: lanche.price,
                          image: lanche.image,
                          qtde: 1,
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </article>
    </>
  );
}
