import Item from "../Item/Item";


const ItemList = ({ varietals }) => {
  return (
      <div className="clem">    
        {varietals.map((varietals) => {
        return <Item key={varietals.id} varietals={varietals} />;
        })};  
      </div>
  );
};


  export default ItemList;