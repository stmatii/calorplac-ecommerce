import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import ItemCount from '../ItemCount/itemCount'


const ItemDetail = ({panel}) => {

    const {agregarItem} = useCartContext()
    const onAdd=(cant)=>{
        agregarItem( {item: panel, quantity: cant} )     
    }  

    return (
        <>
          <div><h3>Panel {panel.categoryID}</h3></div>
          <img src={panel.imagenID} alt="foto panel" />   
          <p>{panel.description}</p> <br/>
            <ItemCount initial={0} stock={10} onAdd={onAdd} /> 
            <Link to = '/'>
                <button className="btn btn-outline-secondary">
                     Volver
                </button>
            </Link>
        </>
    )
}

export default ItemDetail
