import { useState } from "react";
import CartContext from "./CartContext";



export const CartProvider = ({ children }) => {
    const [list, setList] = useState([]);

    const addCart = (varietals) => {
        const isInCart = list.find((x) => x.id === varietals.id);
        if (isInCart) {
            setList(
                list.map((x) =>
                x.id === varietals.id ? { ...isInCart, qty: isInCart.qty + 1 } : x
              )
            );
        }else{           
            setList([...list, { ...varietals, qty: 1 }]);
        }
    };
       
    // const isInCart = (id) => {
    //     return list.findIndex(product => product.id === id)
    // };


    // const [totalQuantityCart, setTotalQuantityCart] = useState(0);

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
      <CartContext.Provider value={{list, addCart}}>
          {children}
      </CartContext.Provider>
    </>);
};