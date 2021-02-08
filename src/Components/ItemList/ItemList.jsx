import { Button } from "react-bootstrap";
import Item from "../Item/Item";


const ItemList = ({ varietals }) => {
  return (
      <div className="clem">    
        {varietals.map((varietals) => {
        return (
        <>
            <Item style={{ width: '18rem' }} key={varietals.id} varietals={varietals} />
            <Button className="my-3 mr-5" variant="info">Details</Button>
        </>
        )})};  
      </div>
  );
};


  export default ItemList;