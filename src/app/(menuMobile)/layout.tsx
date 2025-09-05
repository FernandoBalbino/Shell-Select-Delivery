import MenuMobile from "@/components/ui/menuMobile";

export default function MenuMobileFixed({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <header>
        <MenuMobile />
      </header>
    </div>
  );
}
