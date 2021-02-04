import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Aimara from "../../Aimara";
// import ItemCountComponent from "../../Components/ItemCount";
import ItemList from "../../Components/ItemList/ItemList";

const ItemListContainer = () => {
  
  const [varietals, setVarietals] = useState([])

  useEffect(() => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Aimara), 2000);
  });

  myPromise.then((result) => setVarietals(result));
  }, []);
    return (
        <>
          {varietals.length === 0 ? (<Spinner animation='border' />) : (
          <ItemList varietals={varietals} />
          // <ItemCountComponent stock={5} initial={1}/>
          )}
        </>
    )
};

export default ItemListContainer;