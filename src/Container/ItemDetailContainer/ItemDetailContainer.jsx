import { useEffect, useState } from "react";
import Aimara from "../../Aimara";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {      
    const [loading, setLoading] = useState(true);
    const [varietals, setVarietals] = useState(null);
    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(Aimara), 2000);
          });
        
          myPromise.then((result) => setVarietals(result));
          }, []);
          setLoading(false);
  
    return (
              <>
           {loading ? <div>loading...</div>
            : <ItemDetail varietals={varietals}  />
            }
        </>
    );           
};  

export default ItemDetailContainer;