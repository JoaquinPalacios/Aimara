import './style.modules.scss';

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Item = ({ varietals }) => {
    return (
    <>
        <Container className="px-1">
            <Card className="clemmy">
                <Card.Img variant="top" src={varietals.image} className="shadow imageSize"/>
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
