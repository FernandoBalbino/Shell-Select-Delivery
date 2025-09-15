import { Button } from "./button";
import { IoAddSharp } from "react-icons/io5";
import { useCarrinho } from "@/store/carrinho";
interface Carrinho {
  id: string;
  name: string;
  price: number;
  image: string;
  qtde: number;
}
import { toast } from "sonner";

interface AdicionarButtonProps {
  produto: Carrinho;
}
export default function AdicionarButton({ produto }: AdicionarButtonProps) {
  const { addItem } = useCarrinho();
  return (
    <>
      <Button
        className="bg-[#F38808] flex justify-center items-center  rounded-[15px]"
        variant={"default"}
        onClick={() => {
          addItem(produto);
          toast("Produto adicionado com sucesso!", {
            position: "top-right",
          });
        }}
      >
        <IoAddSharp size={28} />
        <span>Adicionar</span>
      </Button>
    </>
  );
}
