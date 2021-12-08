import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import  {BrowserRouter, Route, Switch} from 'react-router-dom';

import CartComponent from './Components/Cart';
import { CartProvider } from './Context/CartProvider';
import FooterComponent from './Components/Footer';
import ItemDetailContainer from './Container/ItemDetailContainer';
import ItemListContainer from './Container/ItemListContainer';
import NavBar from './Components/Navbar';
import PurchaseDone from './Components/PurchaseDone';

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
