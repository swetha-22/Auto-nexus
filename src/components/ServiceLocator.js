import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Locate from './dashboardGifs/maps2.gif'
import LocateJump from './dashboardGifs/ezgif.com-crop.gif'
import Gmap from './Gmap'

// let links = [];

const ServiceLocator = () => {

    const [links, setLinks] = useState([]);
    const [overFlow, setOverFlow] = useState('hidden');

    let mainStyle = {
        width: "82%",
        margin: "30px",
        position: "fixed",
        left: "235px",
        height: "85%",
        overflowY:`${overFlow}`,
        overflowX:"hidden"
    }

    let imgStyle = {
        width: "925px",
        height: "590px",
        border: "1px solid black",
        borderRadius: "0px 20px 20px 0px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0.2, 0.7)"

    }

    let locationStyle = {
        width: "327px",
        height: "555px",
        backgroundColor: "white",
        left: "20px",
        position: "relative"
    }

    let btnLocationStyle = {
        width: "310px",
        height: "555px",
        marginLeft: "15px",
        border: "none",
        backgroundColor: "white"
    }

    let imgLocationStyle = {
        position: "relative",
        left: "-36px",
        width: "340px",
        top: "-70px",
    }

    let [displayOne, setDisplayOne] = useState('d-flex')
    let [displayTwo, setDisplayTwo] = useState('d-none')
    let [displaySpin, setDisplaySpin] = useState('none')

    let toggleDisplay = () => {
        setDisplayOne("d-none");
        setDisplaySpin("block");
        setTimeout(() => {
            setDisplayTwo('d-flex');
            setDisplaySpin('none');
            setOverFlow('scroll');
        }, 3000);
    }

    let spinnerStyle = {
        display: `${displaySpin}`,
        position: "absolute",
        top: "250px",
        left: "590px",
        width: "50px",
        height: "50px"
    }

    
    const getLocationLinks = async () => {
        try {
            let collName=localStorage.getItem("emp_id");
            const response = await fetch("http://localhost:5000/api/gMap/map-link", {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address1: "Vijayapuricolony , hyderabad , 500070",
                    collName:collName
                })
            });
            const json = await response.json();
            setLinks(json);
            console.log(links);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getLocationLinks();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <div style={mainStyle}>

                    <div className={`${displayOne}`} >
                        <img src={Locate} alt="" style={imgStyle} />
                        <div style={locationStyle}>
                            <button style={btnLocationStyle} onClick={toggleDisplay}>
                                <img src={LocateJump} alt="" style={imgLocationStyle} />
                                <h3 style={{ position: "absolute", top: "350px", width: '250px', left: "50px" }}>Get near-by Service-Centers </h3>
                            </button>
                        </div>
                    </div>

                    <div className="spinner-border" role="status" style={spinnerStyle}>
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    <div className={`row ${displayTwo}`}>
                        {/* links.length > 0 &&  */}
                        {links.map((data, index) => {
                            return <div className="col-md-11" key={index} style={{margin:"20px" , marginLeft:"50px"}}>
                                <Gmap source={data.source} dest={data.dest} distance={100} link={data.gMapLink} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceLocator
