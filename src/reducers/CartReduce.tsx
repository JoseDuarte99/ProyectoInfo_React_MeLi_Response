import type { ProductOnCartProps } from "../types/OthersTypes";

type CartActionsProps =
| { type: "ADD"; payload: ProductOnCartProps[] }
| { type: "REMOVE"; payload: ProductOnCartProps[] }
| { type: "REMOVEALLBYTYPE"; payload: ProductOnCartProps[]}
| { type: "RESET" };

export type CartStateProps = {
    productsInCart: ProductOnCartProps[];
};

function CartReducer(state: CartStateProps, action: CartActionsProps): CartStateProps {
    switch (action.type) {
        case "ADD": {
            const productToAdd = action.payload[0];

        return {
            ...state,
            productsInCart: [...state.productsInCart, productToAdd],
        };
        }

        case "REMOVE": {
            const keyToRemove = action.payload[0]?.idProduct;
            
            if (keyToRemove === undefined) return state;
            const updatedCart = [...state.productsInCart];
            
            const index = updatedCart.findIndex(item => item.idProduct === keyToRemove);
            
            if (index !== -1) {
                updatedCart.splice(index, 1);
            }

            return {
                ...state,
                productsInCart: updatedCart,
            }
        }

        case "REMOVEALLBYTYPE": {
            const keyToRemove = action.payload[0]?.idProduct;
            
            if (keyToRemove === undefined) return state;

            const updatedCart = [...state.productsInCart];

            const updateCartEnd = updatedCart.filter(p => p.idProduct !== keyToRemove);

            
            return {
                ...state,
                productsInCart: updateCartEnd,
            }
        }
        
        case "RESET":
            return {
                productsInCart: [],
            };
        
        default:
            return state;
    }
}

export default CartReducer;
