import { useState } from "react";
import CartComponent from "../Cart/Cart";

const CartHover = () => {
    const [show, setShow] = useState(false);
    const showCart = (e)=>{
        setShow(!show);
    };
    const hideCart = e => {
        setShow(false);
    };
    return (
        <>
        <div>
            <CartComponent
            show={show}
            onMouseEnter={showCart} 
            onMouseLeave={hideCart}/>
        </div>
        </>
    )
};
export default CartHover;