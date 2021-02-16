import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";



const ItemList = ({ varietals }) => {
  return (
      <div className="clem">    
        {varietals.map((varietals) => {
        return (
        <>
        <Container>
            <Link to={`/item/${varietals.title}`} className="text-decoration-none text-muted">
              <Item style={{ width: '18rem' }} key={varietals.id} varietals={varietals} />
            </Link>            
        </Container>
        </>
        )})}
      </div>
  );
};

export default ItemList;