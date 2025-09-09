"use client";

import { Product } from "@/components/functions/listproducts";
interface SecoesCardapioProps {
  produtos: Product[];
}
import { Button } from "@/components/ui/button";
import { IoAddSharp } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import Image from "next/image";
export default function SecoesCardapio({ produtos }: SecoesCardapioProps) {
  const [visibleCount, setVisibleCount] = useState(5);
  if (!produtos || produtos.length === 0) {
    return <div>Carregando lanches populares...</div>;
  }
  const itensLanches = produtos
    .filter((p: any) => p.category === "lanche")
    .slice(0, visibleCount);
  const itensBebidas = produtos
    .filter((p: any) => p.category === "bebida")
    .slice(0, visibleCount);
  const itensExpressos = produtos
    .filter((p: any) => p.category === "expresso")
    .slice(0, visibleCount);
  const itensCervejas = produtos
    .filter((p: any) => p.category === "cerveja")
    .slice(0, visibleCount);
  const itensChocolates = produtos
    .filter((p: any) => p.category === "chocolate")
    .slice(0, visibleCount);
  const itensEnergeticos = produtos
    .filter((p: any) => p.category === "energetico")
    .slice(0, visibleCount);

  return (
    <>
      <article className="">
        <div className="px-4   py-6">
          <h2 className="text-xl flex items-center justify-between font-bold mb-4">
            Energéticos
            {visibleCount <= itensEnergeticos.length && (
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
              {itensEnergeticos.map((lanche, index) => (
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
        </div>
      </article>
      <article className="">
        <div className="px-4   py-6">
          <h2 className="text-xl flex items-center justify-between font-bold mb-4">
            Lanches
            {visibleCount <= itensLanches.length && (
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
              {itensLanches.map((lanche, index) => (
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
        </div>
      </article>
      <article className="">
        <div className="px-4   py-6">
          <h2 className="text-xl flex items-center justify-between font-bold mb-4">
            Cervejas
            {visibleCount <= itensCervejas.length && (
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
              {itensCervejas.map((lanche, index) => (
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
        </div>
      </article>
      <article className="">
        <div className="px-4   py-6">
          <h2 className="text-xl flex items-center justify-between font-bold mb-4">
            Chocolates
            {visibleCount <= itensChocolates.length && (
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
              {itensChocolates.map((lanche, index) => (
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
        </div>
      </article>
      <article className="">
        <div className="px-4   py-6">
          <h2 className="text-xl flex items-center justify-between font-bold mb-4">
            Bebidas
            {visibleCount <= itensBebidas.length && (
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
              {itensBebidas.map((lanche, index) => (
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
        </div>
      </article>
      <article className="">
        <div className="px-4   py-6">
          <h2 className="text-xl flex items-center justify-between font-bold mb-4">
            Expressos
            {visibleCount <= itensExpressos.length && (
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
              {itensExpressos.map((lanche, index) => (
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
        </div>
      </article>
    </>
  );
}
