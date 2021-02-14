import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import aimara from "../../aimara";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

const showProduct = (varietalId) => {
  return new Promise((result) =>
    result(aimara.find((product) => product.title === varietalId))
  );
};

const ItemDetailContainer = () => {      
    const [varietals, setVarietals] = useState([]);
    const { varietalId } = useParams([]);
    console.log(varietalId);

    useEffect(() => {
      showProduct(varietalId).then((product) => {
        setVarietals(product);
      });
    }, [varietalId]);  
    return <ItemDetail key={varietals.id} varietals={varietals} />;           
};  

export default ItemDetailContainer;