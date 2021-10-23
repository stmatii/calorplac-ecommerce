import {useState} from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    

    function sumar(){
        if(count < stock){
            setCount(count + 1)        

        }
    }

    function restar(){
        if (count>1) {
            setCount(count - 1)            
        }
    }

    const agregarCarrito=()=>{
        onAdd(count)
        setCambiarBoton(false)
    }

    return (
        <div>
            <h3>Agregar Producto</h3>
            <button onClick={sumar} className="btn btn-secondary btn-sm">+</button>
            <label>{count}</label>
            <button onClick={restar} className="btn btn-secondary btn-sm">-</button>
            <br/>
           {cambiarBoton ?
                <button onClick={agregarCarrito} className="btn btn-secondary btn-sm" >Agregar Al carrito</button>                
            : 
            <div>
                <div>
                <Link to="/cart" >
                    <button className="btn btn-success btn-sm">Terminar Compra</button>            
                </Link>
                <Link to="/" >
                    <button className="btn btn-secondary btn-sm">Seguir Comprando</button>      
                </Link>
                </div>
            </div>
            
            }
            
            
        </div>
    )
}

export default ItemCount
