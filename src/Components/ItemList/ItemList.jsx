// import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Aimara from "../../Aimara";
import Item from "../Item/Item";

// const showCategory = (categoryId) => {
//   return new Promise((result) => 
//   result(Aimara.map((elements) => elements.category === categoryId))
//   );
// };

const ItemList = ({ varietals }) => {
  // const [categories, setCategories] = useState([]);
  // const { categoryId } = useParams([]);
  // useEffect(() => {
  //   console.log(categoryId);
  //   const showCategory = Aimara.filter((products) => {
  //     return products.category === categoryId
  //   });
  //   setCategories(showCategory);
  // }, [categoryId]);

  return (
      <div className="clem">    
        {varietals.map((varietals) => {
        return (
        <>
        <Container>
            <Link to={`/item/${varietals.title}`}>
              <Item style={{ width: '18rem' }} key={varietals.id} varietals={varietals} />
            </Link>
            {/* <Link to={`/item/${categories.category}`}>
              <Card.Footer>{varietals.category}</Card.Footer>
              </Link> */}
        </Container>
        </>
        )})};  
      </div>
  );
};


  export default ItemList;