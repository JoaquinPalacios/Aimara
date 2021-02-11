import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aimara from "../../Aimara";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {      
    const [varietals, setVarietals] = useState([]);
    const { varietalId } = useParams([]);
    console.log(varietalId);
    useEffect(() => {
      let showProduct = Aimara.filter((element) => {
        return element.title === varietalId
      });
      setVarietals(showProduct[0].title);
     
          }, [varietalId]);
  
    return <ItemDetail key={varietals.id} varietals={varietals} />;           
};  

export default ItemDetailContainer;