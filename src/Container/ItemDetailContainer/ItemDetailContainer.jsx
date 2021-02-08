import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Aimara from "../../Aimara";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {      
    const [varietals, setVarietals] = useState([]);
    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(Aimara[0]), 3500);
          });
        
          myPromise.then((result) => setVarietals(result));
          }, []);
  
    return (
              <>
           {varietals.length === 0 ? (<Spinner animation="grow" variant="info" />) : (
             <ItemDetail varietals={varietals}  />
           )}
        </>
    );           
};  

export default ItemDetailContainer;