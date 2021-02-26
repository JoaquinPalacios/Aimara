import { useState } from "react";
import { CartContext } from "./CartContext";
// import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
    const [list, setList] = useState([]);
    // const [totalQuantity, setTotalQuantity] = useState(0);

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
      const totalPrice = () => {
        return list.reduce((prev, next) => (prev + (next.count * next.price)), 0)
      };
      // function totalPrice() {
      //   return list.reduce((prev, next) => (prev + (next.quantity * next.price)),0)
      //   }
      
    // const addCart = (varietals) => {
    //     const isInCart = list.find((x) => x.id === varietals.id);
    //     if (isInCart) {
    //         setList(
    //             list.map((x) =>
    //             x.id === varietals.id ? { ...isInCart, qty: isInCart.qty + 1 } : x
    //           )
    //         );
    //     }else{           
    //         setList([...list, { ...varietals, qty: 1 }]);
    //     }
    // };

    // const isInCart = (id) => {
    //     return list.findIndex(product => product.id === id)
    // };

    // function addProducto(newProduct, quantity) {
    //     const compareIds = (varietals) => varietals.id === newProduct.id;
    //     const prodIndex = list.findIndex(compareIds)
    //     if (prodIndex === -1 ) {
    //         const prodAdded = [...list, newProduct]
    //         setList(prodAdded)
    //         addProductoQuantity(newProduct, quantity)
    //         addTotalQuantity(quantity)
    //     } else {
    //         list[prodIndex].quantity += quantity
    //         addTotalQuantity(quantity)
    //     }
    // };
    // function addProductoQuantity(newProduct, quantity) {
    //     newProduct.quantity = quantity
    // };
    // function addTotalQuantity(quantity) {
    //     const number = totalQuantityCart + quantity
    //     setTotalQuantityCart(number)
    // };
    return(
    <>
      <CartContext.Provider value={{ list, addCart, totalPrice }}>
          {children}
      </CartContext.Provider>
    </>);
};
