import Image from "next/image";
import { IoRestaurant } from "react-icons/io5";

import Link from "next/link";
export default function MenuMobile() {
  return (
    <>
      <div className="fixed flex z-50  bg-amber-300 bottom-0 rounded-t-xl border-t-2 border-[#e5e7eb] items-center   p-4  w-full">
        <div>
          <Image src="/logo.svg" alt="Menu" width={50} height={50} />
        </div>
        <div className=" flex justify-around w-full p-4">
          <Link href="/cardapio">
            <IoRestaurant size={30} />
          </Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
      </div>
    </>
  );
}
