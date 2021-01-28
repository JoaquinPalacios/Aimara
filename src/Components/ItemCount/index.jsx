import { useState } from "react";
import { Button, ButtonGroup } from 'react-bootstrap';



const ItemCountComponent = () => {
    const [count, setCount] = useState([0]);
    console.log(count);

    const increment = () => {
        if (count === 5) {
          console.log(count);
          return;
        }
        setCount(count + 1);
      };
      
      const decrement = () => {
        if (count === 0) {
          console.log(count);
          return;
        }
        setCount(count - 1);
      };
      return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={decrement} variant="outline-info" className="font-weight-bold">-</Button>
                <p className="bg-light px-4 mt-2 text-secondary">  {count}  </p>
                <Button onClick={increment} variant="outline-info" className="font-weight-bold">+</Button>
            </ButtonGroup>
            <br />
            <Button variant="info" className="mt-2 mx-2">Add to Cart</Button>
            
        </div>
      );
}

export default ItemCountComponent;