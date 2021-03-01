import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [list, setList] = useState([]);

    const addCart = (varietalCount) => {
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
      console.log("list", list);

      const deleteProd = (varietalCount) => {
        const newItems = list.filter((item) => item.id !== varietalCount.id)
        setList(newItems);
      };
   
     
      // const clearCart = () => {
      //   setList([]);
      // };

      // const deleteProd = (varietalCount) => {
      //   if (list.find((item) => item.id === varietalCount.id)) {
      //     const deleteVarietal = list.map((varietal) => {
      //       if (varietal.id === varietalCount.id) {
      //         return { ...varietal, count: null };
      //       }
      //       return varietal;
      //     });
      //     setList(deleteVarietal);
      //   } else {
      //     setList((state) => {
      //       return [...state, varietalCount];
      //     });
      //   }
      // };
      
      const totalPrice = () => {
        return list.reduce((prev, next) => (prev + (next.count * next.price)), 0)
      };  
      const totalQuantity = () => {
        return list.reduce((prev, next) => (prev + (next.count)), 0)
      };

    return(
    <>
      <CartContext.Provider value={{ list, addCart, totalPrice, totalQuantity, deleteProd }}>
          {children}
      </CartContext.Provider>
    </>);
};
