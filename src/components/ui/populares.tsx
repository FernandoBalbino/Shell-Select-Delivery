import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./badge";
import { Button } from "./button";
import ListProducts from "../functions/listproducts";
export default async function LanchesPopulares() {
  const lanches = await ListProducts();

  return (
    <>
      <article>
        <div className="px-4 py-6">
          <h2 className="text-xl font-bold mb-4">Lanches Populares</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative "
          >
            <CarouselContent>
              {lanches.map((lanche, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[60%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="rounded-lg relative border bg-white shadow-sm p-4 flex flex-col items-center ">
                    <Badge className=" bg-green-400   " variant={"default"}>
                      Estoque disponível
                    </Badge>
                    <div className="w-[220px] h-[220px] mb-2 overflow-hidden">
                      <Image
                        src={lanche.image}
                        alt={lanche.name}
                        width={220}
                        height={220}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-base flex items-start font-semibold">
                      {lanche.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {lanche.description}
                    </p>
                    <p className="text-sm font-bold mt-1 justify-between items-center w-full flex">
                      <Button className="bg-yellow-400" variant={"default"}>
                        Adicionar
                      </Button>
                    </p>
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
