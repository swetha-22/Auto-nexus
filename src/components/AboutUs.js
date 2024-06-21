import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AboutImg from './dashboardGifs/car-service.jpg';

const AboutUs = () => {
    let mainStyle = {
        width: '84%',
        margin: '15px',
        position: 'fixed',
        left: '235px',
        height: '90%',
        backgroundColor:'#ccc'
    };
    let aboutStyle = {
        width: "100%",
        height: "103%",
        marginTop: "-15px",
    }
    let textStyle =
    {
        color: "white",
        position: "absolute",
        width: "900px",
        left: "280px",
        top: "105px",
        fontSize: "23px",
    }

    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <div style={mainStyle}>
                    <img src={AboutImg} alt="" style={aboutStyle} />
                </div>
                <div style={textStyle}>
                    <h1 style={{color:"rgb(211, 248, 244)"}}>About Us</h1>
                    Auto Nexus is the Vehicle Care Management System, a comprehensive platform that provides vehicle owners with a one-stop solution for managing their vehicles. The system includes a range of features, including service ,insurance and pollution check notifications, predictive maintenance alerts for each part of the vehicle, information on handling vehicles in different weather conditions, and a database of information on the regular parts of a vehicle. 
                </div>
            </div>
        </div>
    );
};

export default AboutUs;