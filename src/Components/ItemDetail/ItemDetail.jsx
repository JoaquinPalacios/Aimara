import { Container } from "react-bootstrap";
import Item from "../Item/Item";
import ItemCountComponent from "../ItemCount";

const ItemDetail = ({ varietals }) => {
    return (    
        <>
            <br />
            <Container className="py-5 px-5">
                    <Item varietals={varietals} />
                    <div className="ml-4 mr-3">
                        <div className="font-italic text-center">{varietals.description}</div>
                        <ItemCountComponent className="d-flex justify-content-center" stock={5} initial={1} />                                 
                    </div>
            </Container>
        </>
    )
};


export default ItemDetail;