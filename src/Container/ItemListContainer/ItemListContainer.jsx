import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aimara from "../../Aimara";
import ItemList from "../../Components/ItemList/ItemList";

const ItemListContainer = () => {
  
  const [varietals, setVarietals] = useState([])
  const { categoryId } = useParams();
  
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      const products = Aimara.filter((producto) => {
       return producto.category.toString() === categoryId;
      });
      resolve(products);
    });
    myPromise.then((result) => setVarietals(result));
  }, [categoryId]);
    return <ItemList varietals={varietals} />
};

export default ItemListContainer;