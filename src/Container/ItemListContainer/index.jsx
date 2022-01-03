import { useEffect, useState } from "react";

import ItemList from "../../Components/ItemList";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {  
  const [varietals, setVarietals] = useState([])
  const { categoryId } = useParams();
  
  useEffect(() => {
    
    const db = getFirestore();
    let docRef;
    if(categoryId){
        docRef = db.collection('Items').where('category', '==', categoryId);
    }else{
        docRef = db.collection('Items');
    }
    console.log("docRef useeffect ItemListContiner", docRef)
    docRef.get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
            console.log('No existen resultados');
        }
        setVarietals(querySnapshot.docs.map(element => ({...element.data(), id: element.id})));
    });
    }, [categoryId])
    console.log("categoryId useParams itemListcontainer", categoryId);
    console.log("varietals itemListcontainer", varietals)

return <ItemList varietals={varietals} />
}

export default ItemListContainer;