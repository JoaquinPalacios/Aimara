import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Aimara from "../../Aimara";
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
          {varietals.length === 0 ? (<Spinner animation="grow" variant="info" />) : (
          <ItemList varietals={varietals} />
          )}
        </>
    )
};

export default ItemListContainer;