import React from "react";
import { Link } from "react-router-dom"

const Item = ({persona}) => {


    return (       
            <div key={persona.id} className="card w-50 mt-5" >
                    <div className="card-header">
                        {persona.categoria}
                    </div>
                    <div className="card-body">
                        <img src={persona.foto} alt="foto panel" />
                        {persona.kw}
                       
                    </div>
                    <div className="card-footer">
                        <Link to = '/detalle/producto'>
                            <button className="btn btn-outline-primary btn-block">
                                Detalle
                            </button>
                        </Link>
                    </div>
                    
                </div>
        
    )
}

export default Item
