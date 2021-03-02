import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import aimara from "../../aimara";
import ItemList from "../../Components/ItemList/ItemList";
import { getFirestore } from "../../firebase";

const ItemListContainer = () => {
  
  const [varietals, setVarietals] = useState([])
  const { categoryId } = useParams();
  
  useEffect(() => {
    
    const db = getFirestore();
    let docRef;
    if(categoryId){
        docRef = db.collection('Items').where('categoryId', '===', categoryId);
    }else{
        docRef = db.collection('Items');
    }
    console.log("docRef", docRef)
    docRef.get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
            console.log('No existen resultados');
        }
        setVarietals(querySnapshot.docs.map(element => ({...element.data(), id: element.id})));
    });
    }, [categoryId])
    console.log("categoryId", categoryId);
    console.log("varietals", varietals)

    // // Guardamos la referencia de la coleccion que queremos tomar
    // const itemCollection = baseDeDatos.collection('Items');
    
    // // Tomando los datos
    // itemCollection.get().then((value) => {
    //   let aux = value.docs.map(element => {
    //     return {...element.data(), id:element.id}})
    //     setVarietals(aux);
    //   });
    //   console.log(setVarietals);

  //   const myPromise = new Promise((resolve, reject) => {
  //     if (categoryId) {
  //       const products = aimara.filter((producto) => {
  //       return producto.category.toString() === categoryId;
  //       });
  //       resolve(products);
  //     } else resolve(aimara);
  //       });
  //   myPromise.then((result) => setVarietals(result));
  // }, [categoryId]);
// }, []);
return <ItemList varietals={varietals} />
}

export default ItemListContainer;