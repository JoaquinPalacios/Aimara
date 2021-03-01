import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
// import ItemCountComponent from "../ItemCount";

const CartComponent = () => {
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
                <td>${varietal.price}</td>
                <td className="badge badge-info"><button onClick={() => deleteProd(varietal)} />Remove</td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr className="font-weight-bold">
              <td colSpan="3">Total</td>
              <td>${totalPrice()}</td>
            </tr>
          </thead>
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