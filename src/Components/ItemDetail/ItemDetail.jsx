import { Button } from "react-bootstrap";
import Item from "../Item/Item";
import ItemCountComponent from "../ItemCount";

const ItemDetail = ({ varietals }) => {
    return (
    
        <div>
            <Item varietals={varietals} />
                {/* <div> */}
                    <ItemCountComponent stock={5} initial={1} />
                    <Button>Buy</Button>
                             
                {/* </div>                   */}
        </div>
    )
};


export default ItemDetail;