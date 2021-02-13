import { useEffect, useState } from "react";
// import { Spinner } from "react-bootstrap";
import Aimara from "../../Aimara";
import ItemList from "../../Components/ItemList/ItemList";

const ItemListContainer = () => {
  
  const [varietals, setVarietals] = useState([])

  useEffect(() => {
  const myPromise = new Promise((resolve, reject) => {
    resolve(Aimara);
  });

  myPromise.then((result) => setVarietals(result));
  }, []);
    return (
        <>
          
          <ItemList varietals={varietals} />
          
        </>
    )
};

export default ItemListContainer;