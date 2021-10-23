import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../services/getFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {

    const [panel, setPanel] = useState ({})
    
    const { idProducto } = useParams()

    useEffect(() => {
        const dbQuery = getFirestore()
        const filterProducto = () =>{
            if(idProducto){
                dbQuery.collection('items').doc(idProducto).get()
                .then(res => {
                    setPanel({id: res.id, ...res.data()})
                })
                .catch(err => console.log(err))
            }
        }
        filterProducto()       
    }, [idProducto])

    return (
        <>
           <ItemDetail panel={panel} />
        </>
    )
}

export default ItemDetailContainer
