import Image from "next/image";
import { IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function MenuMobile() {
  return (
    <>
      <div className="fixed flex z-50 bg-white bottom-0 rounded-t-xl items-center ring-4 ring-yellow-300 p-4 w-full">
        {/* botão central (Início) */}
        <Link
          href="/"
          className="absolute flex flex-col items-center justify-center -top-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="shadow-lg border-2 border-amber-300 w-17 h-17 bg-white rounded-full flex items-center justify-center">
              <Image src="/logo.svg" alt="Logo" width={70} height={70} />
            </div>
            <div className="uppercase font-bold  text-[3vw]">
              Página principal
            </div>
          </div>
        </Link>

        <div className="flex justify-around w-full relative">
          {/* Cardápio */}
          <Link
            className="text-[3vw] justify-center items-center flex flex-col-reverse"
            href="/cardapio"
          >
            <div className="font-bold">Cardápio</div>
            <IoRestaurantOutline size={26} />
          </Link>

          {/* Carrinho */}
          <Link
            className="text-[3vw] justify-center items-center flex flex-col-reverse"
            href="/carrinho"
          >
            <div className="font-bold">Carrinho</div>
            <div className="relative flex">
              <AiOutlineShoppingCart size={26} />
              <span className="absolute top-0 -right-2 inline-flex size-2 rounded-full bg-red-500"></span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
