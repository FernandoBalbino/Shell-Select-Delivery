"use client";
import { useCarrinho } from "@/store/carrinho";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoSearch } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { RiRestaurant2Fill } from "react-icons/ri";
import { PiShoppingCartFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  };

  // 👇 só roda no cliente
  useEffect(() => {
    if (carrinho) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // melhor que "scroll"
    }

    // reset ao desmontar
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [carrinho]);

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

            {/* Carrinho */}
            <li className="relative">
              <button
                onClick={handleCarrinhoClick}
                className="flex flex-col items-center transition-colors text-[#3e3e3e] hover:text-yellow-500"
              >
                <PiShoppingCartFill size={25} />
                <span className="text-sm">Carrinho</span>
                <span className="absolute rounded-full flex justify-center items-center text-[13px] -right-1 bg-gradient-to-bl text-white from-yellow-400 w-[18px] to-orange-500  -top-1">
                  {itens.length}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {carrinho && (
        <div className="fixed inset-0 z-50 bg-[#F3F3F3] flex flex-col justify-between overflow-auto">
          {/* Cabeçalho */}
          <div className="p-4 flex justify-center relative">
            <h2 className="text-[28px] font-semibold">Carrinho</h2>
            <div
              onClick={handleCarrinhoClick}
              className="absolute right-5 top-4 bg-white rounded-full p-2 border cursor-pointer"
            >
              <IoCloseOutline size={28} />
            </div>
          </div>

          {/* Lista de itens */}
          <div className="flex-1 px-5 py-2 space-y-4 overflow-auto">
            {itens.length === 0 ? (
              <p className="text-center text-gray-400 mt-10">Carrinho vazio</p>
            ) : (
              itens.map((item, i) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl flex items-center p-4 shadow-md"
                >
                  <Image
                    src={item.image}
                    width={70}
                    height={70}
                    priority
                    alt={item.name}
                    className="w-16 h-16 object-contain "
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-gray-400 text-sm">${item.price}/item</p>
                    <p className="font-semibold text-base">
                      ${item.price * item.qtde}
                    </p>
                  </div>

                  {/* Botões de quantidade */}
                  <div className="flex items-center border rounded-lg p-1">
                    <button className="px-3 text-lg">-</button>
                    <span className="px-3">{item.qtde}</span>
                    <button className="px-3 text-lg">+</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer do carrinho */}
          <div className="p-5 bg-white rounded-t-4xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Total a pagar (4) :</span>
              <span className="font-bold text-lg">$46.00</span>
            </div>
            <button className="w-full shadow-md bg-gradient-to-bl from-yellow-400 to-orange-500 text-white p-4 rounded-lg font-semibold">
              Pagar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
