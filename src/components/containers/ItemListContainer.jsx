import { useEffect, useState } from "react";
// import { getFetch } from "../utils/Mock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { getFirestore } from "../../services/getFirebase";
import { Carousel } from "react-bootstrap";



function ItemListContainer({greeting}) { 

    const [personas, setPersonas] = useState([])//
    
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()


    useEffect(() => {
        const dbQuery = getFirestore()

        dbQuery.collection('items').get()
        .then(resp => {
            setPersonas( resp.docs.map(item => ({id: item.id, ...item.data()})) )
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))            
        
    }, [idCategory])


    return (
        <div>             
            <h1> {greeting}</h1> 
            {/* <Input />            */}
            <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar/img/slider/banner.jpg?w=&h="
                        alt="varios paneles"
                        />
                        <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar/img/slider/banner%20cov19.jpg?w=&h="
                        alt="mensaje salud"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://akrybsgmno.cloudimg.io/v7/calorplac.com.ar/img/slider/3.jpg?w=&h="
                        alt="niveles de consumo"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    <div><h2 className="text-center">Paneles Calefactores</h2></div>
            { loading ? <h2>Cargando...</h2> : <ItemList personas={personas} /> }              
        </div>
    )
}

export default ItemListContainer
