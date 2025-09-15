import { Button } from "./button";
import { IoAddSharp } from "react-icons/io5";

interface AdicionarButtonProps {
  productId: string;
}

export default function AdicionarButton({ productId }: AdicionarButtonProps) {
  const handleAddToCart = () => {
    // Aqui você pode implementar a lógica para adicionar ao carrinho
    console.log(`Adicionando produto ${productId} ao carrinho`);
  };

  return (
    <>
      <Button
        className="bg-[#F38808] rounded-[15px]"
        variant={"default"}
        onClick={handleAddToCart}
      >
        <IoAddSharp size={28} />
      </Button>
    </>
  );
}
