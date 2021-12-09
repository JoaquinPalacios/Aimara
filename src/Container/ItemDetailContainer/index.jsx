import { useEffect, useState } from "react";

import ItemDetail from "../../Components/ItemDetail";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router-dom";

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
