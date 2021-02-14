import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import aimara from "../../aimara";
import ItemList from "../../Components/ItemList/ItemList";

const ItemListContainer = () => {
  
  const [varietals, setVarietals] = useState([])
  const { categoryId } = useParams();
  
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      if (categoryId) {
        const products = aimara.filter((producto) => {
        return producto.category.toString() === categoryId;
        });
        resolve(products);
      } else resolve(aimara);
        });
    myPromise.then((result) => setVarietals(result));
  }, [categoryId]);
    return <ItemList varietals={varietals} />
};

export default ItemListContainer;