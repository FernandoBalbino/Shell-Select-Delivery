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
import { useEffect } from "react";

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
  const {
    itens,
    aberto,
    abrirCarrinho,
    fecharCarrinho,
    totalPreco,
    totalItens,
    aumentarQtde,
    diminuirQtde,
    removeItem,
  } = useCarrinho();
  const isCarrinhoOpen = aberto;

  // Bloquear scroll quando o carrinho abrir
  useEffect(() => {
    document.body.style.overflow = isCarrinhoOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCarrinhoOpen]);

  return (
    <>
      <div className="fixed bottom-0 z-50 w-full bg-white ring-4 ring-yellow-300 px-6 py-2 text-[#3e3e3e]">
        <nav className="w-full">
          <ul className="flex justify-between w-full">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch
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
                onClick={isCarrinhoOpen ? fecharCarrinho : abrirCarrinho}
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

      {isCarrinhoOpen && (
        <div className="fixed inset-0 z-50 bg-[#F3F3F3] flex flex-col justify-between overflow-auto">
          {/* Cabeçalho */}
          <div className="p-4 flex justify-center relative">
            <h2 className="text-[28px] font-semibold">Carrinho</h2>
            <div
              onClick={fecharCarrinho}
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
              itens.map((item) => (
                <div
                  key={item.id}
                  className="bg-white relative repeat-0 rounded-xl flex items-center p-4 shadow-md"
                >
                  <div
                    onClick={() => removeItem(item.id)}
                    className="absolute  top-2 right-2"
                  >
                    <IoCloseOutline size={22} />
                  </div>
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
                    <p className="text-gray-400 text-sm">R${item.price}/item</p>
                    <p className="font-semibold text-base">
                      R${item.price * item.qtde}
                    </p>
                  </div>

                  {/* Botões de quantidade */}
                  <div className="flex items-center bg-gradient-to-bl from-yellow-400 to-orange-500 rounded-full">
                    <button
                      onClick={() => diminuirQtde(item.id)}
                      className="text-white p-2 rounded-full transition-colors"
                    >
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
                    <span className="text-white px-3 font-semibold">
                      {item.qtde}
                    </span>
                    <button
                      onClick={() => aumentarQtde(item.id)}
                      className="text-white p-2  rounded-full transition-colors"
                    >
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
              ))
            )}
          </div>

          {/* Footer do carrinho */}
          <div className="p-5 bg-white rounded-t-4xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">
                Total a pagar ({totalItens()}) :
              </span>
              <span className="font-bold text-lg">
                R${totalPreco().toFixed(2)}
              </span>
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
