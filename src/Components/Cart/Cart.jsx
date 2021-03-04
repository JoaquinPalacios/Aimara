import { Button, Col, Container, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const CartComponent = ({header = false}) => {
  const { list, totalPrice, deleteProd } = useCartContext();
    return (
      <>
      {!header && <h1 className="py-4 text-center text-muted">
        Cart
      </h1>}
      {list.length > 0 ? (<div><Container><Table striped hover className="text-muted">
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
                <td className="align-middle">{varietal.count}</td>
                <td className="align-middle">${varietal.price}</td>
                {!header && <td className="align-middle"><button onClick={() => deleteProd(varietal)} className="badge badge-info">Remove</button></td>}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-weight-bold h4 mr-5 pr-5">
              <td colSpan={(!header) ? 4 : 3} className="text-right">Total</td>
              <td className="mr-5 pr-5">${totalPrice()}</td>
            </tr>
          </tfoot>
        </Table>         
         {!header && <div className="mr-5 pr-5"><Form as={Col} className="mx-5 px-5 text-muted">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control className="font-italic font-weight-lighter" type="text" placeholder="Enter name.." />
          </Form.Group>
          {/* <br /> */}
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control className="font-italic font-weight-lighter" type="email" placeholder="Enter email.." />            
          </Form.Group>
          <Form.Group>
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control className="font-italic font-weight-lighter" type="tel" placeholder="Enter telephone number.." />
          </Form.Group>        
          <Form.Text className="font-italic text-muted">
              We'll never share your information with anyone else.
          </Form.Text>         
        </Form>
        <br />
        <Button variant="info" className="mx-auto d-block" size="lg">Place order</Button>
        <br />
        </div>}
        </Container>
        </div>
        ) : (<div>
            <h3 className="d-flex justify-content-center pt-5 text-muted">The Cart is empty</h3>
            {!header && <p className="d-flex justify-content-center text-muted">
              Return to home to see our products
            </p>}
            {!header && <Link to='/' className="d-flex justify-content-center text-decoration-none"><button className="btn btn-info"> Home </button></Link>}
        </div>)}
        </>
    );
  };

export default CartComponent;