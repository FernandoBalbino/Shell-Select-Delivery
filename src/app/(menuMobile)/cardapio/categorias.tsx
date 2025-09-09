import { Product } from "@/components/functions/listproducts";

interface CategoriasComidasProps {
  produtos: Product[];
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
export default function CategoriasComidas() {
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
      <div className="px-4 py-1">
        <h2 className="text-[24px] text-[#3e3e3e] font-bold mb-3">
          Categorias
        </h2>
        <p className="text-gray-600 mb-4">
          Tudo o que você gosta, direto da conveniência
        </p>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full   py-2     "
        >
          <CarouselContent className="relative px-7 gap-x-3  w-full">
            <CarouselItem className="basis-1/3 w-full mx-2 mr-2 px-2">
              <a
                href="#energeticos"
                className="flex flex-col items-center group"
              >
                <div className="w-30 h-30 bg-amber-200 flex items-center justify-center rounded-3xl shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/redbull250ml.png"
                    alt="Energético"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-center group-hover:text-amber-700">
                  Energéticos
                </span>
              </a>
            </CarouselItem>
            <CarouselItem className="basis-1/3 mr-2 px-2">
              <a href="#cervejas" className="flex flex-col items-center group">
                <div className="w-30 h-30 bg-amber-200 flex items-center justify-center rounded-3xl shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/itaipava.png"
                    alt="Cervejas"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-center group-hover:text-amber-700">
                  Cervejas
                </span>
              </a>
            </CarouselItem>
            <CarouselItem className="basis-1/3 mr-2 px-2">
              <a href="#bebidas" className="flex flex-col items-center group">
                <div className="w-30 h-30 flex items-center justify-center bg-amber-200 rounded-3xl shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/cocacolalata.png"
                    alt="Expressos"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-center group-hover:text-amber-700">
                  Bebidas
                </span>
              </a>
            </CarouselItem>
            <CarouselItem className="basis-1/3 mr-2 px-2">
              <a href="#expressos" className="flex flex-col items-center group">
                <div className="w-30 h-30 flex items-center justify-center bg-amber-200 rounded-3xl shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/expressos.png"
                    alt="Expressos"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-center group-hover:text-amber-700">
                  Expressos
                </span>
              </a>
            </CarouselItem>
            <CarouselItem className="basis-1/3 px-2">
              <a href="#lanches" className="flex flex-col items-center group">
                <div className="w-30 h-30 flex items-center justify-center bg-amber-200 rounded-3xl shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/calabresa.png"
                    alt="Lanches"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-center group-hover:text-amber-700">
                  Lanches
                </span>
              </a>
            </CarouselItem>
            <CarouselItem className="basis-1/3 ">
              <a
                href="#chocolates"
                className="flex flex-col items-center group"
              >
                <div className="w-30 h-30 flex items-center justify-center bg-amber-200 rounded-3xl shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/chocolates.png"
                    alt="Chocolates"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-center group-hover:text-amber-700">
                  Chocolates
                </span>
              </a>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 absolute top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="right-2 absolute top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </>
  );
}
