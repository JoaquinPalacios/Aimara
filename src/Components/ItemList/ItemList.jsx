import { Link } from "react-router-dom";
import Item from "../Item/Item";


const ItemList = ({ varietals }) => {
  return (
      <div className="clem">    
        {varietals.map((varietals) => {
        return (
        <>
            <Link to={`/item/${varietals.title}`}>
              <Item style={{ width: '18rem' }} key={varietals.id} varietals={varietals} />
            </Link>            
        </>
        )})};  
      </div>
  );
};


  export default ItemList;