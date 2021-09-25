import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({paneles}) => {
    return (
        <>
            <div><h3>Panel {paneles.categoria} {paneles.kw}</h3></div>
            <img src={paneles.foto} alt="panel" />    
                  
            <Link to = '/'>
                <button className="btn btn-outline-primary btn-block">
                     Volver
                </button>
            </Link>
        </>
    )
}

export default ItemDetail
