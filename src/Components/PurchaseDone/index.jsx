import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Jumbotron";
import Jumbotron from "react-bootstrap/Container";
import { useCartContext } from "../../Context/CartContext";

const PurchaseDone = () => {
  const { orderId, date } = useCartContext();
    return(
        <>
        <Container className="my-5 py-4 text-center text-white">
          <Jumbotron className="jumbotronBg">
            <h1 className="font-weight-light py-2">Thanks for buying with us!</h1>
            <h3 className="font-weight-light py-2">Below is the ID of your purchase</h3> 
            <h3 className="font-weight-light py-3">On the {date}</h3>    
            <h2><Badge variant="secondary">{orderId}</Badge></h2> 
          </Jumbotron>
        </Container>
        </>
    );
};

export default PurchaseDone;