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

// Configuração das seções do cardápio
const SECOES_CARDAPIO = [
  { id: "energeticos", titulo: "Energéticos", categoria: "energetico" },
  { id: "lanches", titulo: "Lanches", categoria: "lanche" },
  { id: "cervejas", titulo: "Cervejas", categoria: "cerveja" },
  { id: "chocolates", titulo: "Chocolates", categoria: "chocolate" },
  { id: "bebidas", titulo: "Bebidas", categoria: "bebida" },
  { id: "expressos", titulo: "Expressos", categoria: "expresso" },
];

// Componente para renderizar um item do produto
interface ProductItemProps {
  produto: Product;
}

function ProductItem({ produto }: ProductItemProps) {
  return (
    <CarouselItem className="basis-[60%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="rounded-lg bg-white h-60 relative border shadow-sm p-4 flex flex-col items-center">
        <div className="w-[150px] h-[150px] mb-2 overflow-hidden">
          <Image
            src={produto.image}
            alt={produto.name}
            width={180}
            height={180}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-base content-start w-full font-semibold">
          {produto.name}
        </h3>
        <div className="text-sm font-bold mt-1 justify-between items-center w-full flex">
          <p className="text-[20px] text-black">
            {produto.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <Button className="bg-[#F38808] rounded-[15px]" variant={"default"}>
            <IoAddSharp size={50} />
          </Button>
        </div>
      </div>
    </CarouselItem>
  );
}

// Componente para renderizar uma seção do cardápio
interface CardapioSectionProps {
  id: string;
  titulo: string;
  produtos: Product[];
  visibleCount: number;
  onVerMais: () => void;
}

function CardapioSection({
  id,
  titulo,
  produtos,
  visibleCount,
  onVerMais,
}: CardapioSectionProps) {
  return (
    <article id={id}>
      <div className="px-4 py-6">
        <h2 className="text-xl flex items-center justify-between font-bold mb-4">
          {titulo}
          {visibleCount <= produtos.length && (
            <button
              className="text-[#F38808] cursor-pointer"
              onClick={onVerMais}
            >
              Ver mais
            </button>
          )}
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {produtos.map((produto, index) => (
              <ProductItem key={index} produto={produto} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </article>
  );
}

export default function SecoesCardapio({ produtos }: SecoesCardapioProps) {
  const [visibleCount, setVisibleCount] = useState(5);

  if (!produtos || produtos.length === 0) {
    return <div>Carregando lanches populares...</div>;
  }

  // Função para filtrar produtos por categoria e limitar a quantidade visível
  const getProdutosPorCategoria = (categoria: string) => {
    return produtos
      .filter((produto) => produto.category === categoria)
      .slice(0, visibleCount);
  };

  const handleVerMais = () => {
    setVisibleCount(visibleCount + 5);
  };

  return (
    <>
      {SECOES_CARDAPIO.map((secao) => {
        const produtosFiltrados = getProdutosPorCategoria(secao.categoria);

        // Só renderiza a seção se houver produtos
        if (produtosFiltrados.length === 0) return null;

        return (
          <CardapioSection
            key={secao.id}
            id={secao.id}
            titulo={secao.titulo}
            produtos={produtosFiltrados}
            visibleCount={visibleCount}
            onVerMais={handleVerMais}
          />
        );
      })}
    </>
  );
}
