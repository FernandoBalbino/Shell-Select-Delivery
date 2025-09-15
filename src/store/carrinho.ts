import { create } from "zustand";

type Carrinho = {
  id: string;
  name: string;
  price: number;
  image: string;
  qtde: number;
};

type ItensCarrinhoStates = {
  itens: Carrinho[];
  addItem: (item: Carrinho) => void;
};

export const useCarrinho = create<ItensCarrinhoStates>((set) => ({
  itens: [],
  addItem: (item) => set((state) => ({ itens: [...state.itens, item] })),
}));
