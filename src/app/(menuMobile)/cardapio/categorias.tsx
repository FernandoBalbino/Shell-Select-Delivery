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
export default function CategoriasComidas({
  produtos,
}: CategoriasComidasProps) {
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
      <div className="px-4 py-6">
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
          className="w-full  bg-amber-500 "
        >
          <CarouselContent className="relative w-full">
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
              <div className="w-full">teste</div>
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
              <div className="w-full">teste2</div>
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
              <div className="w-full">teste3</div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 absolute top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="right-2 absolute top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </>
  );
}
