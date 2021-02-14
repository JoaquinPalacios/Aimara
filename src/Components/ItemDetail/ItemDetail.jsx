import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import ItemCountComponent from "../ItemCount";

const ItemDetail = ({ varietals }) => {
    const [checkout, setCheckout] = useState(false);
    const onAdd = (count) => {
        console.log("Selected ", count);
        setCheckout(true);
      };
    return (    
        <>
          <br />
          <Container className="py-5 px-5">
                <Item varietals={varietals} />
                <div className="ml-4 mr-3">
                    <div className="font-italic text-center">{varietals.description}</div>
                    {checkout ? <Link to='/Cart'><Button variant="info">Checkout</Button></Link> : <ItemCountComponent className="d-flex justify-content-center" onAdd={onAdd} stock={5} initial={1} />}                                 
                </div>
          </Container>
        </>
    )
};

export default ItemDetail;