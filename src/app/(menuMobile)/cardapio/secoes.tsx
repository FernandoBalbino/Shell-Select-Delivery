"use client";

import { Product } from "@/components/functions/listproducts";
import Link from "next/link";
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
    <CarouselItem className="basis-[65%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="rounded-lg h-66 relative border shadow-sm p-4 flex flex-col hover:shadow-md transition">
        {/* Link cobre apenas imagem e nome */}
        <Link
          href={`/produtos/${produto.id}`}
          className="block flex-1"
          prefetch={true}
        >
          <div className="w-[180px] h-[160px] mb-2 overflow-hidden mx-auto">
            <Image
              src={produto.image}
              alt={produto.name}
              width={170}
              height={170}
              priority={true}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-base font-semibold truncate">{produto.name}</h3>
        </Link>

        {/* Linha com preço e botão sempre no mesmo nível */}
        <div className="mt-auto flex justify-between items-center w-full">
          <p className="text-[20px] text-black font-bold">
            {produto.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <Button className="bg-[#F38808] rounded-[15px]" variant={"default"}>
            <IoAddSharp size={28} />
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
