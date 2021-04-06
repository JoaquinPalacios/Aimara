<<<<<<< HEAD
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

=======
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = () => {      
    const [varietals, setVarietals] = useState([]);
    const { varietalId } = useParams();
    console.log(varietalId);    

    useEffect(() => {
      const db = getFirestore();
        const docRef = db.collection('Items').where("title", "==", varietalId);
        docRef.get().then((querySnapshot) => {
          if(querySnapshot.docs.length > 0) {
            const queryResult = querySnapshot.docs.map( doc => ({id: doc.id, ...doc.data()}));
            console.log(queryResult);
            setVarietals(queryResult[0]);
          }
        });
    }, [varietalId])

    return <ItemDetail key={varietals.id} varietals={varietals} />;           
};  

export default ItemDetailContainer;
>>>>>>> dev
