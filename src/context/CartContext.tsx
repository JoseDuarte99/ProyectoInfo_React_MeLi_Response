import { createContext } from "react";
import type { ProductOnCartProps } from "../types/Typing";

interface CartContextProps {
  contextState: ProductOnCartProps[];
  addProductCart: (payload: ProductOnCartProps[]) => void;
  removeProductCart: (payload: ProductOnCartProps[]) => void;
  removeAllProductByTypeCart: (payload: ProductOnCartProps[]) => void;
  resetCart: () => void;
}

const CartContext = createContext<CartContextProps | null>(null);

export default CartContext;
