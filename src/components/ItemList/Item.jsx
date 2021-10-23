import React from "react";
import { Row , Col} from "react-bootstrap";

import { Link } from "react-router-dom";

const Item = ({persona}) => {


    return (   
            <div key={persona.categoria} >              
                <Row>
                   <Col>
                    <div className="card text-center">
                       <p> Tipo de panel: {persona.categoryID} </p>
                      
                    </div>
                    <div className="card-body">
                        <img src={persona.imagenID} width="400" height="400" alt="foto panel" /> <br/>
                        {persona.title} 
                    </div>
                    <div className="card-footer text-muted">
                        <Link to = {`/detalle/${persona.id}`}>
                            <button className="btn btn-outline-primary btn-block">
                                Detalle
                            </button>
                        </Link>
                    </div>
                    </Col>
                    </Row>
                </div>
        
    )
}

export default Item
