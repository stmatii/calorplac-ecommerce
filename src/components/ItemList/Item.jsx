import React from "react";

const Item = ({persona}) => {
    return (

        <div key={persona.id} className="card w-50 mt-5">
        <div className="card-header">
            {persona.name}
        </div>
        <div className="card-footer">
            <button className="btn btn-outline-primary btn-block">
                detalle de persona
            </button>
        </div> 
    </div>
    )
}

export default Item