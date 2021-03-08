import { Container, Jumbotron } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext";

const PurchaseDone = () => {
  const { orderId } = useCartContext();
    return(
        <>
        <Container className="py-4 text-center text-muted">
          <Jumbotron>
            <h1 className="py-2">Thanks for buying with us</h1>
            <h2 className="py-3">This is the ID of your purchase: {orderId}</h2>      
          </Jumbotron>
        </Container>
        </>
    );
};

export default PurchaseDone;