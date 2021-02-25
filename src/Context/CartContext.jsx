import { createContext, useContext } from "react";

export const CartContext = createContext();

// export default CartContext;

export const useCartContext = () => useContext(CartContext);
