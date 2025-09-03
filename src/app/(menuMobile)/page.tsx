import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Home() {
  const lanches = [
    {
      nome: "X-Burguer",
      imagem: "/logo.svg",
      descricao: "Hambúrguer simples com queijo.",
      valor: 12.9,
      disponibilidade: true,
    },
    {
      nome: "X-Salada",
      imagem: "/logo.svg",
      descricao: "Hambúrguer com queijo, alface e tomate.",
      valor: 14.5,
      disponibilidade: true,
    },
    {
      nome: "X-Bacon",
      imagem: "/logo.svg",
      descricao: "Hambúrguer com queijo e bacon crocante.",
      valor: 16.0,
      disponibilidade: true,
    },
    {
      nome: "X-Egg",
      imagem: "/logo.svg",
      descricao: "Hambúrguer com queijo e ovo.",
      valor: 15.0,
      disponibilidade: false,
    },
    {
      nome: "X-Tudo",
      imagem: "/logo.svg",
      descricao: "Completo com tudo que tem direito.",
      valor: 19.9,
      disponibilidade: true,
    },
    {
      nome: "Misto Quente",
      imagem: "/logo.svg",
      descricao: "Pão com queijo e presunto na chapa.",
      valor: 8.0,
      disponibilidade: true,
    },
    {
      nome: "Cachorro-Quente",
      imagem: "/logo.svg",
      descricao: "Salsicha, molho e batata palha.",
      valor: 10.0,
      disponibilidade: false,
    },
    {
      nome: "Hambúrguer Duplo",
      imagem: "/logo.svg",
      descricao: "Dois hambúrgueres e queijo em dobro.",
      valor: 18.5,
      disponibilidade: true,
    },
    {
      nome: "X-Frango",
      imagem: "/logo.svg",
      descricao: "Peito de frango grelhado com queijo.",
      valor: 14.0,
      disponibilidade: true,
    },
    {
      nome: "X-Calabresa",
      imagem: "/logo.svg",
      descricao: "Calabresa acebolada com queijo.",
      valor: 15.5,
      disponibilidade: true,
    },
  ];

  return (
    <>
      <div className="border-b-1 justify-between px-3 items-center flex border-[#f7f7f7]">
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

      <section>
        <article>
          <div className="flex-col items-center bg-[#f2f2f2ff] rounded-lg m-3 p-3">
            <h1 className="text-[#303030ff] text-2xl font-semibold px-3 py-2">
              Evite filas: monte seu pedido aqui e retire na Conveniência
            </h1>
            <p className="text-[#575757ff] px-3">
              Faça seu pedido aqui no site e pague no caixa da conveniência.
            </p>
          </div>
        </article>
        <section>
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
                      <div className="p-2">
                        <div className="rounded-lg border bg-white shadow-sm p-4 flex flex-col items-center text-center">
                          <img
                            src={lanche.imagem}
                            alt={lanche.nome}
                            className="w-20 h-20 object-contain mb-2"
                          />
                          <h3 className="text-base font-semibold">
                            {lanche.nome}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {lanche.descricao}
                          </p>
                          <p className="text-sm font-bold mt-1">
                            R$ {lanche.valor.toFixed(2)}
                          </p>
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
        </section>
      </section>
    </>
  );
}
