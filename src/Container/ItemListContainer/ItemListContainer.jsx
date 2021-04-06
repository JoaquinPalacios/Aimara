import { useEffect, useState } from "react";
import ItemCountComponent from "../../Components/ItemCount";
import ItemList from "../../Components/ItemList/ItemList";
import Aimara from "../Components/Products/Aimara";


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
          <ItemList varietals={varietals} />
          <ItemCountComponent stock={5} initial={1}/>
        </>
    )
};

export default ItemListContainer;