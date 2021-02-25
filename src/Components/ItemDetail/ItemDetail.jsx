import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
// import CartContext, { useCartContext } from "../../Context/CartContext";
import Item from "../Item/Item";
import ItemCountComponent from "../ItemCount";

const ItemDetail = ({ varietals }) => {
    const [checkout, setCheckout] = useState(false);
    const { list, addCart } = useCartContext();
    const onAdd = (count) => {
        console.log("Selected ", count);
        setCheckout(true);
        addCart({Item: varietals, Quantity: count});
      };
      console.log(list)

    return (    
        <>
          <br />
          <Container className="py-5 px-5 shadow">
                <Item varietals={varietals} />
                <div className="ml-4 mr-3">
                    <div className="font-italic mb-4 text-center text-muted">{varietals.description}</div>
                    {checkout ? <Link to='/Cart'><Button variant="info">Checkout</Button></Link> : <ItemCountComponent className="d-flex justify-content-center" onAdd={onAdd} stock={5} initial={1} />}                                 
                </div>
          </Container>
        </>
    )
};

export default ItemDetail;