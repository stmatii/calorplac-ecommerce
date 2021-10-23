import {useState, createContext, useContext } from "react";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase"
import 'firebase/firestore' 


const cartContext = createContext([])

export const useCartContext = () => {
    return useContext(cartContext)
}


export const CartContext = ({children}) => {
    const [panelList, setPanelList] = useState([])
    
    function agregarItem(panelNew) {
        setPanelList([...panelList,panelNew]) 
    }

    const crearOrden = (e) =>{
    e.preventDefault();

    let orden = {}

    orden.buyer = {}

    orden.date = firebase.firestore.Timestamp.fromDate(new Date() );

    const db = getFirestore()
    db.collection('ordenes').add(orden)
    .then(resp => console.log(resp))
}

    const borrarFromCart = (item) =>{
        const borrarProducto = panelList.filter((prod) => prod.item.id !== item.item.id);

        setPanelList([...borrarProducto]);
    };

    const vaciarCarrito=()=>
    setPanelList([])


    const precioTotal = ()=>{
        // return panelList.reduce((cant, valor)=> (cant + (valor.quantity * valor.item.price)),0)
        let total = 0;
        if (panelList.length > 0) {
            panelList.forEach((p) => {
                total = total + p.item.price * p.quantity;
            })
        }
        return total;
    }

    
    const iconCart = () => {
        return panelList.reduce ((cant , valor)=> cant + valor.quantity,0)
    }
     

    return (
        <cartContext.Provider value={{panelList, 
        agregarItem, 
        vaciarCarrito,
        iconCart,
        borrarFromCart,
        crearOrden,
        precioTotal}}>
            {children}
        </cartContext.Provider>
    )
} 