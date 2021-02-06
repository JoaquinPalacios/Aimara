import { useEffect, useState } from "react";
import Aimara from "../../Aimara";
import { useParams  } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";


const datos = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Aimara.find((product) => product.id===parseInt(id)));
        },2000);
    });
};

const ItemDetailContainer = () => {      
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [varietal, setVarietal] = useState(null);
    useEffect(() => {
        datos(id).then((product) => {
        setVarietal(product);
        setLoading(false);
      });
    }, [id]);   
    
    return (
        <>
           {loading ? <div>loading...</div>
            : <ItemDetail varietal={varietal}  />
            }
        </>
    );           
};  

export default ItemDetailContainer;