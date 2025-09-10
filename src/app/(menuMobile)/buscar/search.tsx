"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { GoSearch } from "react-icons/go";
import { Product } from "@/components/functions/listproducts";
interface propsProdutos {
  produtos: Product[];
}
export default function Search({ produtos }: propsProdutos) {
  return (
    <>
      {produtos.length > 0 ? <div>tem itens</div> : <div>nao tem</div>}
      <div className=" px-2 bg-gradient-to-bl from-yellow-400 to-orange-500 py-4 relative">
        <Input
          onKeyDown={(event) =>
            event.key === "Enter" ? alert("Acionou") : null
          }
          type="text"
          className="bg-[#f7f7f7] rounded-2xl h-[50px]  w-full"
          placeholder="Busque por lanches, bebidas, cafés..."
        ></Input>
        <GoSearch
          className="absolute text-amber-400 top-1/2 right-5 -translate-y-1/2"
          size={25}
        />
      </div>
      <div className=" flex-col justify-center items-center">
        <h1 className="text-[40px] barlow w-[90%] mx-auto text-center italic tracking-tight text-[#0E1014] uppercase font-bold my-5">
          O que você está com vontade hoje?
        </h1>
        <p className="text-gray-600 w-[75%] mx-auto text-center mb-7 ">
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
