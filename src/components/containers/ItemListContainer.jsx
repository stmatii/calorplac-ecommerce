import { useEffect, useState } from "react";
import { getFetch } from "../utils/Mock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'


// function ItemListContainer({greeting}) {
// //     const [items, setItems] = useState([])

// //     const { category } = useParams()

// //     useEffect(() => {
// //         if(category===undefined){
// //             tarea.then((resp)=> setItems(resp))
// //         }else{
// //             tarea
// //             .then((resp)=> setItems(resp.filter( r => category===r.categoria)) )
// //         }
// //     }, [category])
// // console.log(items)

// const [personas, setPersonas] = useState([])
// const [loading, setLoading] = useState(true)

// const { idCategory } = useParams ()

// useEffect(() => {

//     if (idCategory) {
//        getFetch
//         .then(respuesta =>{
//             setPersonas(respuesta)
//             // setPersonas(res.filter(pers => pers.categoria===idCategory))
//      })
//      .catch(error => console.log(error))
//      .finally(()=> setLoading(false))
        
//     } else {
//      getFetch
//             .then(respuesta =>{
//                 setPersonas(respuesta)
//          })   
//         .catch(error => console.log(error))
//         .finally(()=> setLoading(false))
//     }
// }, [idCategory])

// console.log(idCategory)

// return (
//     <div>
//         <h1> {greeting}</h1>
//      <h2>Soy componente Promesas</h2>
//     { loading ?
//         <h2>Cargando...</h2>
//         :
//     <ItemList personas={personas}/>
//     }
//     </div>
//  )
// }


// export default ItemListContainer 

function ItemListContainer({greeting}) { 

    const [personas, setPersonas] = useState([])//
    
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()


    useEffect(() => {

        if (idCategory) {
            getFetch
            .then(respuesta =>{
                setPersonas(respuesta.filter(pers => pers.categoria===idCategory))         
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
            
        } else {            
            getFetch
            .then(respuesta =>{
                setPersonas(respuesta)         
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }               
        
    }, [idCategory])

        

    return (
        <div>             
            <h1> {greeting}</h1> 
            {/* <Input />            */}

            { loading ? <h2>Cargando...</h2> :   <ItemList personas={personas} /> }              
          
        </div>
    )
}

export default ItemListContainer
