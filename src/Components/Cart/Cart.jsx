import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
// import ItemCountComponent from "../ItemCount";

const CartComponent = ({header = false}) => {
  const { list, totalPrice, deleteProd } = useCartContext();
    return (
      <>
      <h1 className="py-4 text-center text-muted">
        Cart
      </h1>
      {list.length > 0 ? (<Table striped hover className="text-muted">
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              {!header && <th>&nbsp;</th>}
            </tr>
          </thead>
          <tbody>
            {list.map((varietal) => (
              <tr key={varietal.id}>
                <td>
                  <img
                    src={varietal.image}
                    alt='img'
                    style={{ width: "82px" }}
                  />
                </td>
                <td className="align-middle">{varietal.title}</td>
                {/* <td><ItemCountComponent /></td> */}
                <td className="align-middle">{varietal.count}</td>
                <td className="align-middle">${varietal.price}</td>
                {!header && <td className="align-middle"><button onClick={() => deleteProd(varietal)} className="badge badge-info">Remove</button></td>}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-weight-bold">
              <td colSpan={(!header) ? 4 : 3} className="text-right">Total</td>
              <td>${totalPrice()}</td>
            </tr>
          </tfoot>
        </Table>) : (<div className="py-5">
            <h3 className="d-flex justify-content-center pt-5 text-muted">The Cart is empty</h3>
            <p className="d-flex justify-content-center text-muted">
              Return to home to see our products
            </p>
            <Link to='/' className="d-flex justify-content-center text-decoration-none"><button className="btn btn-info"> Home </button></Link>
        </div>)}
        </>
    );
  };

export default CartComponent;