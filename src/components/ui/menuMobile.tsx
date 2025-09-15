"use client";
import { useCarrinho } from "@/store/carrinho";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoSearch } from "react-icons/go";
import CarrinhoUI from "./carrinhoUI";
import { IoCloseOutline } from "react-icons/io5";

import { RiRestaurant2Fill } from "react-icons/ri";
import { PiShoppingCartFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import clsx from "clsx";
import { useState } from "react";

const menuItems = [
  { href: "/", label: "Início", icon: <TiHome size={25} /> },
  {
    href: "/cardapio",
    label: "Cardápio",
    icon: <RiRestaurant2Fill size={25} />,
  },
  { href: "/buscar", label: "Buscar", icon: <GoSearch size={25} /> },
];

export default function MenuMobileFixed() {
  const pathname = usePathname();
  const { itens } = useCarrinho();
  const [clicked, setClicked] = useState<string | null>(null);
  const [carrinho, setCarrinho] = useState<boolean>(false);
  const handleCarrinhoClick = () => {
    setCarrinho(!carrinho);
    console.log("Carrinho clicado - expandir menu");
  };
  if (carrinho) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
  return (
    <>
      <div className="fixed bottom-0 z-50 w-full bg-white ring-4 ring-yellow-300 px-6 py-2 text-[#3e3e3e]">
        <nav className="w-full">
          <ul className="flex justify-between w-full">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || clicked === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch
                    onClick={() => setClicked(item.href)}
                    className={clsx(
                      "flex flex-col items-center transition-colors",
                      isActive
                        ? "text-yellow-500 font-semibold"
                        : "text-[#3e3e3e]"
                    )}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Carrinho como botão separado */}
            <li>
              <button
                onClick={handleCarrinhoClick}
                className="flex flex-col items-center transition-colors text-[#3e3e3e] hover:text-yellow-500"
              >
                <PiShoppingCartFill size={25} />
                <span className="text-sm">Carrinho {itens.length}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {carrinho && (
        <div className="bg-[#F3F3F3] flex justify-between flex-col h-[80vh] absolute z-50 w-full bottom-0">
          <div>itens</div>
          <div className="p-5 bg-white rounded-t-4xl">pagar</div>
          <div
            onClick={handleCarrinhoClick}
            className="absolute right-0 bg-white rounded-full m-4 border-2 p-3 top-0 cursor-pointer"
          >
            <IoCloseOutline size={40} />
          </div>
        </div>
      )}
    </>
  );
}
