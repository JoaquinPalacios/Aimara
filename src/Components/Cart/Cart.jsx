// import { useContext } from "react"
// import { Spinner } from "react-bootstrap";
// import CartContext, { useCartContext } from "../../Context/CartContext"

import { Table } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext";
// import ItemCountComponent from "../ItemCount";

const CartComponent = () => {
    const { list, totalPrice } = useCartContext();
    return (
        <Table striped hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Quantity</th>
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
                {/* <td><ItemCountComponent /></td> */}
                <td>{varietal.count}</td>
                <td>{varietal.price}</td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <td colSpan="3">Total</td>
              <td>${totalPrice()}</td>
            </tr>
          </thead>
        </Table>
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