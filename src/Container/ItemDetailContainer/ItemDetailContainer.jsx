import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Aimara from "../../Aimara";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {      
    // const [loading, setLoading] = useState(true);
    const [varietals, setVarietals] = useState([]);
    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(Aimara), 2000);
          });
        
          myPromise.then((result) => setVarietals(result));
          }, []);
        //   setLoading(false);
  
    return (
              <>
           {varietals.length === 0 ? (<Spinner animation="grow" variant="info" />) : (
             <ItemDetail varietals={varietals}  />
           )}
        </>
    );           
};  

export default ItemDetailContainer;