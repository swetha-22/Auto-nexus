import React from 'react'

import Engine from './vehicleParts/engine.jpg';
import Battery from './vehicleParts/battery.jpeg';
import Tires from './vehicleParts/tires.jpg';
import Transmission from './vehicleParts/transmission_casing.jpg';
import Brakes from './vehicleParts/car-brake-system.jpg';
import Suspension from './vehicleParts/car-suspension-system.jpg';

import Progress from './Progress';

let vehiclePart;

const VehiclePart = (props) => {

    let { part, percent, condition } = props;

    if(part==="engine")
    {
        vehiclePart=Engine;
    }
    else if(part==="battery")
    {
        vehiclePart=Battery;
    }
    else if(part==="tires")
    {
        vehiclePart=Tires;
    }
    else if(part==="transmission")
    {
        vehiclePart=Transmission;
    }
    else if(part==="brakes")
    {
        vehiclePart=Brakes;
    }
    else if(part==="suspension")
    {
        vehiclePart=Suspension;
    }

    let styles = {
        width: "70rem",
        height: "13rem",
        border: `1px solid grey`,
        boxShadow: "0px 0px 8px grey",
        borderRadius: "10px",
        backgroundColor:"rgb(235, 237, 237)",
    }

    return (
        <>
            <div className='mx-4 mb-5 ' style={{ width: "100px" }}>
                <div className="card flex-row d-flex" style={styles}>
                    <img src={vehiclePart} className="card-img-top" alt="..." style={{ width: "280px", borderRadius: "10px", margin: "16px" , height:"170px" }} />
                    <div className="card-body" style={{ margin: "22px 13px 13px -5px"}}>
                        <h2 className="card-title ">{part[0].toUpperCase() + part.substring(1)}</h2>
                        <p className="card-text" style={{ fontSize: "21px", marginTop: "20px" }}>Working Status : {Math.floor(percent)}%</p>
                        <p className="card-text" style={{ fontSize: "21px", marginTop: "-13px" }}>Condition : {condition}</p>
                    </div>
                    <Progress percent={Math.floor(percent)} />
                </div>

            </div>
        </>
    )
}

export default VehiclePart