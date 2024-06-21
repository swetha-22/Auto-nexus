import React, { useState } from "react";
import {Link}  from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import './Signup.css';
import './p2.jpg';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Signup = () => {
    let navigate=useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [VIN, setVIN] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");

    const [alertVisible, setAlertVisible] = useState(false);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            "http://localhost:5000/api/auth/createowner",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, email: email, password: password,VIN:VIN,city:city,pincode:pincode}),
            }
        );
        
        const json = await response.json();
        console.log(json);
        if (json.success) {
            setAlertVisible(true);
            localStorage.setItem("emp_id", json.emp_id);
            navigate("/");
        } else {
            alert("Invalid Credentials");
            console.log("ERROR")
        }

    }
    let myStyle1 = {
        position: "relative",
        left:"50px",
        top:"-401px",
        width: "600px",
        height: "500px"
    }
    return (
        <div style={{ backgroundColor: "#f3e4f1" }}>
            {alertVisible && (
                <Alert severity="success" onClose={() => setAlertVisible(false)}>
                <AlertTitle>Success</AlertTitle>
                    This is a success alert — check it out!
                </Alert>
            )}
            <div className="header1"></div>
            <div className="container1">

                <div className="row d-flex justify-content-center align-items-center" style={myStyle1}>
                    <div className="card" style={{
                        borderRadius: '25px', borderWidth: '0px', backgroundColor: '#2d2c3e',
                        color: 'white',
                    }}>
                        <div className="card-body" style={{ height: '550px' }}>
                            <h2 style={{ textAlign: 'center' }}>Signup</h2>
                            <form onSubmit={handleOnSubmit}>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="Your Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa-solid fa-id-card fa-lg me-3 fa-fw" />
                                    {/* <i className="bi bi-file-earmark-image"></i> */}
                                    <div className="form-outline flex-fill mb-0">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                id="VIN"
                                                className="form-control"
                                                value={VIN}
                                                onChange={(e) => setVIN(e.target.value)}
                                                placeholder="Your VIN Number"
                                            />
                                        </div>
                                        
                                        {/* <input type="password" id="form3Example4cd" className="form-control" placeholder="Your Image"/> */}
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa-solid fa-regular fa-city fa-lg me-3 fa-fw" />
                                    {/* <i className="bi bi-file-earmark-image"></i> */}
                                    <div className="form-outline flex-fill mb-0">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                id="city"
                                                className="form-control"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                placeholder="Your City Name"
                                            />
                                        </div>
                                        
                                        {/* <input type="password" id="form3Example4cd" className="form-control" placeholder="Your Image"/> */}
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fa-solid fa-regular fa-location-dot fa-lg me-3 fa-fw" />
                                    {/* <i className="bi bi-file-earmark-image"></i> */}
                                    <div className="form-outline flex-fill mb-0">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                id="pin"
                                                className="form-control"
                                                value={pincode}
                                                onChange={(e) => setPincode(e.target.value)}
                                                placeholder="Pincode of your city"
                                            />
                                        </div>
                                        {/* <input type="password" id="form3Example4cd" className="form-control" placeholder="Your Image"/> */}
                                    </div>
                                </div>
                                <Link style={{textDecoration:'none',color:'whitesmoke',position:"relative" , left:"175px"}} to="/">Already have an account?</Link><br />
                                <button type="submit" className="btn btn-primary" style={{width:'200px',backgroundColor:'#b387f9',color:'black',fontWeight:'bolder',marginTop:'15px' , position:"relative" , left:"165px"}}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;