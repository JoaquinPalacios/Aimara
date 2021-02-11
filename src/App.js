// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
        <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path = "/">
                <ItemListContainer />
              </Route>
              <Route exact path = "/Item/:varietalId">
                <ItemDetailContainer />
              </Route>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
