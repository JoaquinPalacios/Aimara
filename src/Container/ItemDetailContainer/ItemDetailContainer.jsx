import React, { useEffect, useState } from "react";
import Aimara from "../../Aimara";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams  } from "react-router-dom";

const datos = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Aimara.find((product) => product.id===parseInt(id)));
        },3000);
    });
};
const ItemDetailContainer = () => {      
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [varietals, setVarietals] = useState(null);
    useEffect(() => {
        datos(id).then((product) => {
            setVarietals(product);
        setLoading(false);
      });
    }, []);   
    
    return (
        <>
           {loading ? <div>loading...</div>
            : <ItemDetail varietals={varietals}  />
            }
        </>
    );           
};  

export default ItemDetailContainer;

