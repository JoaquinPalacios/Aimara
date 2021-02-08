import { Card, Container } from "react-bootstrap";
import "./Style.scss";

const Item = ({ varietals }) => {
    return (
    <>
        <Container>
            <Card>
                <Card.Img variant="top" src={varietals.pictureUrl} />
                <Card.Body>
                    <Card.Title>{varietals.title}</Card.Title>
                    <Card.Text>
                      ${varietals.price}
                    </Card.Text>
                </Card.Body>
                </Card>        
        </Container>
    </>
    )
};


export default Item;