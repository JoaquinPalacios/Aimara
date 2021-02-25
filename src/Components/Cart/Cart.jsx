// import { useContext } from "react"
// import { Spinner } from "react-bootstrap";
// import CartContext, { useCartContext } from "../../Context/CartContext"

import { useCartContext } from "../../Context/CartContext";


const CartComponent = (varietals) => {
    // const CartContextUse = useContext(CartContext);
    const { list, addCart } = useCartContext;
    // console.log(CartContextUse);
    console.log(addCart);

    
    return(
        <>
        {list.map((varietals, key) => (
        <div key={key}>
          <ul>
              <li>
              <h3>
              Product: {varietals.title}
              </h3>
              <h3>
              Quantiy:
              </h3>
              </li>
          </ul>
        </div>
        ))}
        </>
    ) 
};

export default CartComponent;