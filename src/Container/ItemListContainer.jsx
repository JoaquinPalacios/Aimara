import ItemCountComponent from "../Components/ItemCount"

const ItemListContainer = () => {
    return (
        <>
          <ItemCountComponent stock={5} initial={1}/>
        </>
    )
};

export default ItemListContainer;