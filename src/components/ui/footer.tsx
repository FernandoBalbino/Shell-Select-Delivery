import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full h-[200px] bg-[#f7f7f7] text-center p-4 text-[#3e3e3e] text-sm">
      &copy; {new Date().getFullYear()} Conveniência Shell. Todos os direitos
      reservados.
      <Image
        src="/logo.svg"
        alt="Logo"
        width={60}
        height={60}
        className="mx-auto mt-4"
      />
    </footer>
  );
}
