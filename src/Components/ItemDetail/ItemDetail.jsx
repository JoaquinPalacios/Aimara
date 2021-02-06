import { Container } from "react-bootstrap";
import Item from "../Item/Item";
import ItemCountComponent from "../ItemCount";

const ItemDetail = ({ varietals }) => {
    return (
    
        <div>
            <br />
            <Container>
                <Item varietals={varietals} />
                <ItemCountComponent stock={5} initial={1} />                                 
            </Container>
        </div>
    )
};


export default ItemDetail;