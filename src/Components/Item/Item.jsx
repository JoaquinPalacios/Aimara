import { Card, Button } from "react-bootstrap";

const Item = ({ varietals }) => {
    return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={varietals.pictureUrl} />
            <Card.Body>
                <Card.Title>{varietals.title}</Card.Title>
                <Card.Text>
                  {varietals.description}
                </Card.Text>
                <Button variant="info">Details</Button>
            </Card.Body>
        </Card>
    </>
    )
};


export default Item;