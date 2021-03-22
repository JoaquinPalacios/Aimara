import { Button, ButtonGroup } from 'react-bootstrap';

const ItemCountComponent = ({stock, initial, onAdd, count, setCount}) => {
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
    const handlerOnAdd = () => {
      onAdd(count);
    };
    return (
      <div className="d-flex justify-content-center">
          <ButtonGroup>
              <Button onClick={decrement} variant="info" className="font-weight-bold">-</Button>
              <p className="clemmy px-4 mt-3 text-secondary outline-info">  {count}  </p>
              <Button onClick={increment} variant="info" className="font-weight-bold">+</Button>
          </ButtonGroup>
          <br />
          <Button onClick={handlerOnAdd} variant="info" className="mt-2 mx-5">Add to Cart</Button>            
      </div>
    );
}

export default ItemCountComponent;