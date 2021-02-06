// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
