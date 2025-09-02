import Image from "next/image";

import { GoSearch } from "react-icons/go";
import { RiRestaurant2Fill } from "react-icons/ri";
import { PiShoppingCartFill } from "react-icons/pi";

import { TiHome } from "react-icons/ti";

import Link from "next/link";

export default function MenuMobile() {
  return (
    <>
      <div className="fixed text-[#3e3e3e] flex z-50 bg-white bottom-0  items-center ring-4 ring-yellow-300 p-4 w-full">
        <div className="w-full">
          <nav className="w-full">
            <ul className="flex justify-between w-full  ">
              <li>
                <Link href="/" className="flex flex-col items-center">
                  <TiHome size={30} />
                  <span className="text-sm">Inicio</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex  flex-col items-center">
                  <RiRestaurant2Fill size={30} />
                  <span className="text-sm">Cardápio</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex flex-col items-center">
                  <GoSearch size={30} />
                  <span className="text-sm">Buscar</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex flex-col items-center">
                  <PiShoppingCartFill size={30} />
                  <span className="text-sm">Carrinho</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
