import { Card, Button, Container } from "react-bootstrap";
import "./Style.scss";

const Item = ({ varietals }) => {
    return (
    <>
        <Container>
            <Card style={{ width: '18rem' }} className="clem">
                <Card.Img variant="top" src={varietals.pictureUrl} />
                <Card.Body>
                    <Card.Title>{varietals.title}</Card.Title>
                    <Card.Text>
                      ${varietals.price}
                    </Card.Text>
                    <Button variant="info">Details</Button>
                </Card.Body>
                </Card>        
        </Container>
    </>
    )
};


export default Item;