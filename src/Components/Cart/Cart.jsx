// import { useContext } from "react"
// import { Spinner } from "react-bootstrap";
// import CartContext, { useCartContext } from "../../Context/CartContext"

import { useCartContext } from "../../Context/CartContext";

const CartComponent = () => {
    const { list } = useCartContext();
    return (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Count</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {list.map((varietal) => (
              <tr key={varietal.id}>
                <td>
                  <img
                    src={varietal.pictureUrl}
                    alt='img'
                    style={{ width: "82px" }}
                  />
                </td>
                <td>{varietal.title}</td>
                <td>{varietal.count}</td>
                <td>{varietal.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
  };
// const CartComponent = (varietals) => {
//     // const CartContextUse = useContext(CartContext);
//     const { list, addCart } = useCartContext;
//     // console.log(CartContextUse);
//     console.log(addCart);

    
//     return(
//         <>
//         {list.map((varietals, key) => (
//         <div key={key}>
//           <ul>
//               <li>
//               <h3>
//               Product: {varietals.title}
//               </h3>
//               <h3>
//               Quantiy:
//               </h3>
//               </li>
//           </ul>
//         </div>
//         ))}
//         </>
//     ) 
// };

export default CartComponent;