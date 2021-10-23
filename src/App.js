import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {createContext } from 'react'
import { CartContext } from './components/Context/cartContext';
import Checkout from './components/checkout/Checkout';




export const appContext = createContext('Mati')

function App() {


  return(
     <CartContext> 
       <div className='container'>
              <Router>
              <NavBar/>
                <Switch>
                    <Route path='/' exact component={ItemListContainer}/>

                    <Route path='/category/:CategoryID' exact component={ItemListContainer}/>

                    <Route path='/detalle/:idProducto' exact component={ItemDetailContainer} />

                    <Route path='/Checkout' exact component={Checkout} />

                  <Route exact path='/Cart'>
                    <Cart/>
                  </Route>
                </Switch>
            </Router>
            </div>
  </CartContext>
  );
}

export default App;
