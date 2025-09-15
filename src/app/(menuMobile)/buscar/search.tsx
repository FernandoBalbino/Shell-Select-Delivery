"use client";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Product } from "@/components/functions/listproducts";
import AdicionarButton from "@/components/ui/adicionarButton";
import { useRef } from "react";
interface propsProdutos {
  produtos: Product[];
}

export default function Search({ produtos }: propsProdutos) {
  const [result, setResult] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function buscarItem(value: string) {
    const valorDigitado = value
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const produto = produtos.filter((p: Product) => {
      return p.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(valorDigitado);
    });
    if (!valorDigitado) {
      setResult([]);
      return;
    }
    setResult(produto);
  }

  return (
    <>
      <div className="px-2 bg-gradient-to-bl from-yellow-400 to-orange-500 py-4 relative">
        <Input
          ref={inputRef}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              buscarItem(event.currentTarget.value);
              event.currentTarget.blur();
              event.currentTarget.value = "";
            }
          }}
          type="text"
          className="bg-[#f7f7f7] rounded-2xl h-[50px] w-full"
          placeholder="Busque por lanches, bebidas, cafés..."
        />
        <GoSearch
          onClick={() => {
            buscarItem(inputRef.current?.value || "");
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }}
          className="absolute text-amber-400 top-1/2 right-5 -translate-y-1/2"
          size={25}
        />
      </div>

      {result.length > 0 ? (
        <div className="px-4 py-6">
          <h2 className="text-xl font-bold mb-4">Resultados da busca</h2>
          <div className="flex flex-col gap-4">
            {result.map((lanche, index) => (
              <div
                key={index}
                className="rounded-lg bg-white border shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition"
              >
                {/* Link cobre apenas imagem e nome */}
                <Link
                  href={`/produtos/${lanche.id}`}
                  className="flex items-center gap-4 flex-1"
                  prefetch={true}
                >
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                    <Image
                      src={lanche.image}
                      alt={lanche.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      priority={true}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-1">
                      {lanche.name}
                    </h3>
                    <p className="text-lg font-bold text-black">
                      {lanche.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </Link>

                {/* Botão fora do link */}
                <AdicionarButton productId={lanche.id} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">Nenhum produto encontrado</p>
        </div>
      )}

      <div className="flex-col justify-center items-center">
        <h1 className="text-[40px] barlow w-[90%] mx-auto text-center italic tracking-tight text-[#0E1014] uppercase font-bold my-5">
          O que você está com vontade hoje?
        </h1>
        <p className="text-gray-600 w-[75%] mx-auto text-center mb-7">
          Descubra deliciosos lanches, bebidas geladas e cafés fresquinhos na
          Shell mais próxima de você!
        </p>
        <Image
          alt="Search"
          className="mx-auto mb-8"
          width={200}
          height={200}
          src={"/search.svg"}
        />
      </div>
    </>
  );
}
