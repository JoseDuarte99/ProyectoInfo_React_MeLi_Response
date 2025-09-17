import { useReducer, type ReactNode } from "react";
import CartContext from "./CartContext";
import CartReducer from "../reducers/CartReduce";
import type { CartStateProps } from "../reducers/CartReduce";
import type { ProductOnCartProps } from "../types/TypingAUXILIAR";

interface CartProviderProps {
  children: ReactNode;
}

const INITIAL_STATE: CartStateProps = {
  productsInCart: [],
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  const addProductCart = (products: ProductOnCartProps[]) =>
    dispatch({ type: "ADD", payload: products });

  const removeProductCart = (products: ProductOnCartProps[]) =>
    dispatch({ type: "REMOVE", payload: products });

  const removeAllProductByTypeCart = (products: ProductOnCartProps[]) => 
    dispatch({ type: "REMOVEALLBYTYPE", payload: products });

  const resetCart = () => dispatch({ type: "RESET" });

  return (
    <CartContext.Provider
      value={{
        contextState: state.productsInCart,
        addProductCart,
        removeProductCart,
        removeAllProductByTypeCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;