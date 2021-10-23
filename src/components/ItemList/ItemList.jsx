import React from "react";
import Item from "./Item";
import { Col, Row} from "react-bootstrap";

const ItemList = ({personas}) => {
    return (
    <>
    <Row>
    { personas.map(persona=> <Col> <Item persona={persona}/> </Col>)}
    </Row>
    </>
)
}

export default ItemList