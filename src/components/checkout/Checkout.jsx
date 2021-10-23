import React from "react"
import { useState} from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useCartContext } from "../Context/cartContext"
import { getFirestore } from "../../services/getFirebase";
import 'firebase/firestore' 


import Alert from "react-bootstrap/Alert"
import { Link } from "react-router-dom"


const Checkout = () => {

    const { panelList, precioTotal} = useCartContext()
    const [userData, setUserData] = useState({ })
    const [isLoading, setIsLoading] = useState(false)
    const [confirmationId, setConfirtmationId] = useState()


    const selectFewerProps = (show) => {
        const { id, title, price } = show.item;
        const { quantity } = show;
        return { id, title, price, quantity };
    }

    const sendForm = (e) => {
        e.preventDefault()

        setIsLoading(true)
        const date = new Date()

        const orden = {
            buyer: userData,
            items: panelList.map(selectFewerProps),
            date: date,
            total: precioTotal(),
        }

        const db = getFirestore()
        db.collection('ordenes').add(orden)
            .then(setIsLoading(false))
            .then((docRef) => {
                setConfirtmationId(docRef.id)
            })
    }


    return (
        <Container className="checkoutContainer pb-4">
            {confirmationId ? <>
                <Alert variant="success">
                    <Alert.Heading>Muchas gracias por tu compra !</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Tu código de confirmación es: {confirmationId}
                    </p>
                </Alert>
                <Link to="/"><button className="checkoutItem__empty ms-auto btn btn-warning">Seguir comprando</button></Link> </> : <></>
            }

            {isLoading ?
                <Alert variant="warning">
                    <Alert.Heading>Procesando pedido...</Alert.Heading>
                </Alert> : <></>
            }

            {panelList.length > 0 ?
                <Row>
                    <Col xs={7} className="checkoutForm">
                        <Form >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control name="name" type="fname" placeholder="Ingrese su nombre"  onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        userName: e.target.value
                                    })
                                }
                                } required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control name="telefono" type="phone" placeholder="011 9 1111 - 1111" onChange={(e) => {
                                    setUserData({ ...userData, userPhone: e.target.value })
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control name="email" type="email" placeholder="nombre@ejemplo.com" onChange={(e) => {
                                    setUserData({ ...userData, userEmail: e.target.value })
                                }} required />
                            </Form.Group>
                            <button className="checkoutForm__confirm btn btn-success" type="submit" onClick={sendForm}>Confirmar</button>
                        </Form>
                    </Col>
                    <Col xs={5} className="checkoutList">
                        {panelList.map((p) =>
                            <Row key={p.item.id} className="mb-3">
                                <Col xs={2} className="checkoutItem__quantity"><span>{p.quantity}</span></Col>
                                <Col className="checkoutItem__title"><p>{p.item.title}</p></Col>
                                <Col xs={3} className="checkoutItem__price"><span>$ {p.item.price}</span></Col>
                            </Row>
                        )}
                        <h2 className="checkoutItem__total">$ {precioTotal()}</h2>
                    </Col>
                </Row> : <></>
            }
        </Container>
    )
}



export default Checkout