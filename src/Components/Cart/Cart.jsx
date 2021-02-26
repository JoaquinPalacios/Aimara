import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
// import ItemCountComponent from "../ItemCount";

const emptyCart = () => {
  return(
  <>
    <div>
      <h3>The Cart is empty</h3>
      <p>
        Return to home to see our products
      </p>
      <Link to='/' ><button className="btn btn-info"> Home </button></Link>
    </div>
  </>
  );
};

const CartFunction = () => {
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
                <td>${varietal.price}</td>
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

const CartComponent = () => {
    const { list } = useCartContext();
    
    return (
      <>
      {list.length !== 0 ? <CartFunction /> : <emptyCart />}
      </>
    );
  };

export default CartComponent;