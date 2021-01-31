import { useState } from "react";
import { Button, ButtonGroup } from 'react-bootstrap';


const ItemCountComponent = ({stock, initial}) => {
    const [count, setCount] = useState(0);
    console.log(count);

    const increment = () => {
        if (count < stock) {
          console.log(count);
          return setCount(count + 1);
        }
      };
      
      const decrement = () => {
        if (count > initial) {
          console.log(count);
          return setCount(count - 1);
        }
      };
      return (
        <div>
            <ButtonGroup>
                <Button onClick={decrement} variant="outline-info" className="font-weight-bold">-</Button>
                <p className="bg-light px-4 mt-2 text-secondary outline-info">  {count}  </p>
                <Button onClick={increment} variant="outline-info" className="font-weight-bold">+</Button>
            </ButtonGroup>
            <br />
            <Button variant="info" className="mt-2 mx-2 ">Add to Cart</Button>
            
        </div>
      );
}

export default ItemCountComponent;