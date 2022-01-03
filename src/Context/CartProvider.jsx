import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {
    const [list, setList] = useState([]);
    const [orderId, setOrderId] = useState();
    const [date, setDate] = useState();

    const addCart = (varietalCount) => {
      console.log("varietal para el carrito", varietalCount);
        if (list.find((item) => item.id === varietalCount.id)) {
          const newVarietal = list.map((varietal) => {
            if (varietal.id === varietalCount.id) {
              return { ...varietal, count: varietalCount.count + varietal.count };
            }
            return varietal;
          });
          setList(newVarietal);
        } else {
          setList((state) => {
            return [...state, varietalCount];
          });
        }
      };
      console.log("list CartProvider", list);

      const deleteProd = (varietalCount) => {
        const newItems = list.filter((item) => item.id !== varietalCount.id)
        setList(newItems);
      };  
      
      const totalPrice = () => {
        return list.reduce((prev, next) => (prev + (next.count * next.price)), 0)
      };  
      const totalQuantity = () => {
        return list.reduce((prev, next) => (prev + (next.count)), 0)
      };
      const resetCartList = () => {
        setList([])
      };

    return(
    <>
      <CartContext.Provider value={{ list, addCart, totalPrice, totalQuantity, deleteProd, orderId, setOrderId, date, setDate, resetCartList }}>
          {children}
      </CartContext.Provider>
    </>);
};
