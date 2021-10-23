import React from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/cartContext"
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button"





export const Cart = ( {condition = true })=> {


const {panelList , precioTotal, borrarFromCart} = useCartContext()

    return(
        <div>
            {panelList.length === 0 ? 
            <div>
                <h3>Ups, parece que no hay productos en el carrito</h3>
             <Link to= '/'> <button>Ir a productos</button></Link>
            </div>
            :
            <div>
            <Table striped bordered hover>
            
                  <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio AR$</th>
                    <th>X</th>
                  </tr>
                </thead>
             
                <tbody>
                    <tr>
                      <td>
                      {panelList.map(resp => <div key={resp.item.id}>
                      <p>{resp.item.title} </p>  </div>)}
                    </td>
                      <td>
                      {panelList.map(resp => <div key={resp.item.id}>
                      <p>{resp.quantity} </p></div>)} 
                    </td>
                      <td>
                      {panelList.map(resp => <div key={resp.item.id}>
                      <p>AR$ {resp.item.price}</p>  </div>)}
                      </td>
                      <td>
                      {panelList.map(resp => <div key={resp.item.id}>
                      <Button variant="danger" size="sm" onClick={()=> borrarFromCart(resp)}>X</Button> </div>)}
                      </td>
                  </tr>     
                  <tr>
                    <td colSpan="2">Total Compra</td>
                    <td>AR$ {precioTotal()}</td>
                  </tr>       
                </tbody>
              
                 </Table>      
            </div> 
            }
          <div>
            <Link to='/Checkout'> <Button variant="success">Terminar Orden</Button> </Link>
          </div>
    </div>
    
)}

export default Cart 