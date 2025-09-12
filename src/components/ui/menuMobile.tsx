"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoSearch } from "react-icons/go";
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
  {
    href: "/carrinho",
    label: "Carrinho",
    icon: <PiShoppingCartFill size={25} />,
  },
];

export default function MenuMobileFixed() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState<string | null>(null);

  return (
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
        </ul>
      </nav>
    </div>
  );
}
