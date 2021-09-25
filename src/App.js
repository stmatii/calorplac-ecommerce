import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return(
    <Router>
    <NavBar/>
      <Switch>
          <Route path='/' exact component={ItemListContainer}/>

          <Route path='/category/:idCategory' exact component={ItemListContainer}/>

          <Route path='/detalle/:idProducto' exact component={ItemDetailContainer} />

        <Route exact path='/Cart'>
          <Cart/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
