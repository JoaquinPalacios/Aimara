import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const CartComponent = () => {
    const CartContextUse = useContext(CartContext);
    console.log(CartContextUse);
    return <h1>Cart</h1>
};

export default CartComponent;