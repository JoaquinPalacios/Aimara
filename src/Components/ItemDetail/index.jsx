import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Item from "../Item";
import ItemCountComponent from "../ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";

const ItemDetail = ({ varietals }) => {
    const [count, setCount] = useState(1);
    const [checkout, setCheckout] = useState(false);
    const { addCart } = useCartContext();
    const onAdd = (count) => {
        console.log("Selected ItemDetail", count);
        setCheckout(true);
        addCart({
          id: varietals.id,
          image: varietals.image,
          price: varietals.price,
          title: varietals.title,
          count
        });
      };

    return (    
        <>
          <br />
          <Container className="py-5 px-5 shadow">
                <Item varietals={varietals} />
                <div className="ml-4 mr-3 mb-1">
                    <div className="font-italic mb-4 text-center text-muted">{varietals.description}</div>
                    {checkout ? <Link to='/Cart'><Button variant="info">Checkout</Button></Link> : <ItemCountComponent className="d-flex justify-content-center" onAdd={onAdd} stock={5} initial={1} count={count} setCount={setCount} />}                                 
                </div>
          </Container>
        </>
    )
};

export default ItemDetail;