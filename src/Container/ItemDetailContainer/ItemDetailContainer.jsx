import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import aimara from "../../aimara";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase";

// const showProduct = (varietalId) => {
//   return new Promise((result) =>
//     result(aimara.find((product) => product.title === varietalId))
//   );
// };

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
          // console.log("querydata", querySnapshot.data)
          // setVarietals({ id:querySnapshot.id, ...querySnapshot.data() });
        });
    }, [varietalId])
    //   showProduct(varietalId).then((product) => {
    //     setVarietals(product);
    //   });
    // }, [varietalId]);  
    return <ItemDetail key={varietals.id} varietals={varietals} />;           
};  

export default ItemDetailContainer;