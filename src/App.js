import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/containers/ItemListContainer';


function App() {
  return(
    <>
<ItemListContainer greeting={"Hola soy item list container"}/>
  </>
  )
}

export default App;
