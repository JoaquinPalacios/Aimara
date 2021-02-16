import { Card, Container } from "react-bootstrap";
import "./Style.scss";

const Item = ({ varietals }) => {
    return (
    <>
        <Container className="px-1">
            <Card className="clemmy">
                <Card.Img variant="top" src={varietals.pictureUrl} className="shadow"/>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center text-muted">
                        {varietals.title}
                        </Card.Title>
                    <Card.Subtitle className="d-flex justify-content-center text-muted">
                      ${varietals.price}
                    </Card.Subtitle>
                </Card.Body>
                </Card>        
        </Container>
    </>
    )
};


export default Item;