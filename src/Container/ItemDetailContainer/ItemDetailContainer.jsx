import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Aimara from "../../Aimara";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {      
    const [varietals, setVarietals] = useState([]);
    const [varietalId] = useParams();
    useEffect(() => {
      console.log(varietalId);
      let showProduct = Aimara.filter((element) => {
        return element.id === varietalId
      });
      setVarietals(showProduct[0].id);
     
          }, [varietalId]);
  
    return (
              <>
           {varietals.length === 0 ? (<Spinner animation="grow" variant="info" />) : (
             <ItemDetail varietalId={varietalId} key={varietals.id} varietals={varietals} />
           )}
        </>
    );           
};  

export default ItemDetailContainer;