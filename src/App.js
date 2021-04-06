import './App.css';
import NavBar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartComponent from './Components/Cart/Cart';
import { CartProvider } from './Context/CartProvider';
import PurchaseDone from './Components/PurchaseDone';
import FooterComponent from './Components/Footer';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path to="/">
                <ItemListContainer />
              </Route>
            </Switch>
            <Switch>
              <Route exact path = "/category/:categoryId">
                <ItemListContainer />
              </Route>
              <Route exact path = "/Item/:varietalId">
                <ItemDetailContainer />
              </Route>
              <Route exact path = "/Cart">
                <CartComponent />
              </Route>
              <Route exact path = "/PurchaseDone">
                <PurchaseDone />
              </Route>
            </Switch>
            <FooterComponent />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
