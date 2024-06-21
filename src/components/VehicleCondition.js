import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import VehiclePart from './VehiclePart'
import vehicleRepair from './vehicleParts/vehicle-repair.gif'

let vehicle = [];

const VehicleCondition = () => {

    let [displayOne, setDisplayOne] = useState('d-block')
    let [displayTwo, setDisplayTwo] = useState('none')
    let [displaySpin, setDisplaySpin] = useState('none')


    let mainStyle = {
        border: "1px solid rgb(56, 3, 180)",
        boxShadow: "10px 10px 20px rgba(135, 86, 249, 0.5)",
        width: "80%",
        margin: "25px 30px 30px 45px",
        position: "fixed",
        left: "235px",
        height: "85%",
        overflowY: "scroll",
        borderRadius: "20px"
    }

    let myStyle = {
        margin: "20px",
        display: `${displayTwo}`
    }

    let btnStyle = {
        position: "absolute",
        top: "35px",
        left: "450px",
        width: "400px",
        height: "40px",
        fontSize: "20px",
        borderRadius: "10px",
        backgroundColor: "rgb(146, 240, 228)",
    }

    let spinnerStyle={
        display: `${displaySpin}`,
        position:"absolute",
        top:"250px",
        left:"590px",
        width:"50px",
        height:"50px"
    }

    let toggleDisplay = () => {
        setDisplayOne("d-none");
        setDisplaySpin("block");
        setTimeout(() => {
            setDisplayTwo('block');
            setDisplaySpin('none');
        }, 2000);
    }

    const getVehiclePartCondition = async () => {
        try {
            let collName=localStorage.getItem("emp_id");
            const response = await fetch("http://localhost:5000/api/vehicle-health/vehicle-health", {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    engine: "120000",
                    transmission: "80000",
                    brakes: "45000",
                    battery: "70000",
                    radiator: "90000",
                    suspension: "95000",
                    tires: "55000",
                    collName:collName
                })
            });
            const json = await response.json();
            console.log(json);
            vehicle = json;
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getVehiclePartCondition();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <div style={mainStyle}>
                    <div className={`${displayOne}`}>
                        <button style={btnStyle} onClick={toggleDisplay}>Know your vehicle condition...</button>
                        <img src={vehicleRepair} alt="" style={{ width: "100%", height: "604px" }} />
                    </div>
                    <div className="spinner-border" role="status" style={spinnerStyle}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className='col py-2 ' style={myStyle}>
                        {vehicle.map((data, index) => {
                            return <div className="col-md-4" key={index}>
                                <VehiclePart part={data.part} percent={data.percent} condition={data.condition} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleCondition
