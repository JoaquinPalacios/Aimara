import ItemCountComponent from "../Components/ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <>
          <span className="badge badge-info">{greeting}</span>
          <ItemCountComponent />
        </>
    )
};

export default ItemListContainer;