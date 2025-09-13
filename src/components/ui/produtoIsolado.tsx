// produtoIsolado.tsx
import { Product } from "../functions/listproducts";
import Image from "next/image";
import { Suspense } from "react";
interface ProdutoIsoladoProps {
  produto: Product;
}

export default function ProdutoIsolado({ produto }: ProdutoIsoladoProps) {
  return (
    <div className="h-screen">
      {/* Container Principal com Card Style */}
      <div className="bg-white   ">
        {/* Área da Imagem com Gradiente */}
        <div className="bg-gradient-to-bl from-yellow-400 to-orange-500 h-80 flex justify-center items-center relative rounded-b-4xl">
          <Suspense fallback={<div>carregando...</div>}>
            <Image
              className="w-full object-contain h-[70%] drop-shadow-lg"
              src={produto.image}
              width={250}
              height={250}
              alt={produto.name}
              priority={true}
            />
          </Suspense>
        </div>

        {/* Conteúdo do Card */}
        <div className="p-6">
          {/* Título e Categoria */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {produto.name}
            </h2>
            <p className="text-sm text-gray-500 capitalize">
              {produto.category}
            </p>
          </div>

          {/* Preço e Botão */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline">
              <span className="text-sm font-semibold text-gray-600">R$</span>
              <span className="text-2xl font-bold text-gray-800 ml-1">
                {produto.price}
              </span>
            </div>

            {/* Contador de Quantidade */}
            <div className="flex items-center bg-gradient-to-bl from-yellow-400 to-orange-500 rounded-full">
              <button className="text-white p-2 hover:bg-pink-500 rounded-full transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <span className="text-white px-3 font-semibold">1</span>
              <button className="text-white p-2 hover:bg-pink-500 rounded-full transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Sobre o Produto */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              Sobre o Produto
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {produto.description ||
                "Produto de alta qualidade com sabor único e ingredientes selecionados."}
            </p>
          </div>

          {/* Botão Adicionar ao Carrinho */}
          <button className="w-full bg-gradient-to-bl from-yellow-400 to-orange-500 text-white font-semibold py-4 rounded-2xl transition-colors shadow-md">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* Barra de Navegação Inferior (Opcional) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="flex justify-around items-center py-3">
          <div className="flex flex-col items-center text-pink-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs mt-1">Início</span>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs mt-1">Favoritos</span>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-xs mt-1">Buscar</span>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 105 16h1m4 0a2 2 0 104 0m-4 0a2 2 0 104 0"
              />
            </svg>
            <span className="text-xs mt-1">Carrinho</span>
          </div>
        </div>
      </div>
    </div>
  );
}
