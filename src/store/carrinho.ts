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
  aberto: boolean;
  addItem: (item: Carrinho) => void;
  removeItem: (id: string) => void;
  abrirCarrinho: () => void;
  fecharCarrinho: () => void;
  totalItens: () => number; // total de unidades
  totalPreco: () => number; // total em valor
  aumentarQtde: (id: string) => void;
  diminuirQtde: (id: string) => void;
};

export const useCarrinho = create<ItensCarrinhoStates>((set, get) => ({
  itens: [],
  aberto: false,

  addItem: (novoItem) =>
    set((state) => {
      const existe = state.itens.find((i) => i.id === novoItem.id);

      if (existe) {
        return {
          itens: state.itens.map((i) =>
            i.id === novoItem.id ? { ...i, qtde: i.qtde + novoItem.qtde } : i
          ),
          aberto: true,
        };
      }

      return {
        itens: [...state.itens, novoItem],
        aberto: true,
      };
    }),

  removeItem: (id) =>
    set((state) => ({ itens: state.itens.filter((i) => i.id !== id) })),

  abrirCarrinho: () => set({ aberto: true }),
  fecharCarrinho: () => set({ aberto: false }),

  // total de unidades
  totalItens: () => get().itens.reduce((acc, item) => acc + item.qtde, 0),

  // total do valor
  totalPreco: () =>
    get().itens.reduce((acc, item) => acc + item.price * item.qtde, 0),

  // aumenta a quantidade de um item existente
  aumentarQtde: (id: string) =>
    set((state) => ({
      itens: state.itens.map((i) =>
        i.id === id ? { ...i, qtde: i.qtde + 1 } : i
      ),
    })),

  // diminui a quantidade de um item existente (mínimo 1)
  diminuirQtde: (id: string) =>
    set((state) => ({
      itens: state.itens.map((i) =>
        i.id === id ? { ...i, qtde: Math.max(i.qtde - 1, 1) } : i
      ),
    })),
}));
