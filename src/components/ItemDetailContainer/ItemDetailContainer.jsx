import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetchNuevo } from '../utils/Mock2'




const ItemDetailContainer = () => {
    const [paneles, setPanel] = useState({})
    const { idProducto } = useParams()

    useEffect(() => {
        getFetchNuevo
    .then(resp =>  setPanel(resp))
    .catch(err => console.log(err)) 
    }, [])

console.log(idProducto)


    
    return (
        <>
           <ItemDetail paneles={paneles} />
        </>
    )
}

export default ItemDetailContainer
