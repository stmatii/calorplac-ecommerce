import { useEffect, useState } from "react";
import { getFetch } from "../utils/Mock";
import ItemList from "../ItemList/ItemList";


function ItemListContainer({greeting, onAddS}) {
//     const [items, setItems] = useState([])

//     const { category } = useParams()

//     useEffect(() => {
//         if(category===undefined){
//             tarea.then((resp)=> setItems(resp))
//         }else{
//             tarea
//             .then((resp)=> setItems(resp.filter( r => category===r.categoria)) )
//         }
//     }, [category])
// console.log(items)

const [personas, setPersonas] = useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
    getFetch
    .then(res =>{
        setPersonas(res)
        setLoading(false)
    })
}, [])

console.log(personas)

return (
    <div>
        <h1> {greeting}</h1>
     <h2>Soy componentePromesas</h2>
    { loading ?
        <h2>Cargando...</h2>
        :
        <ItemList personas={personas}/>
    }
    </div>
 )
}


export default ItemListContainer 