import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import './Login.css';
import  './p2.jpg';
import autoNexus from './auto-nexus-removebg-preview.png';
import autoLogo from './auto-logo-removebg-preview.png';

const Login = (props) => {
    let navigate=useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Uname: name,
                email: email,
                password: password,
            }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
              localStorage.setItem("emp_id", json.emp_id);
              navigate("/dashboard");
        } else {
            alert("Invalid Credentials");
            console.log("ERROR")
        }
    };
    let myStyle = {
        left: "-85px",
        position: "relative",
        width: "600px",
        height: "500px",
        top:"-160px",
    }
    return (
        <div style={{ backgroundColor: "#f3e4f1"}}>
            <div className="header"></div>

            <img src={autoLogo} alt=""  style={{position: "absolute",top: "34px",left: "677px",width: "150px",height: "150px",}}/>
            <img src={autoNexus} alt="" style={{top:"-635px" , left:"40px" , position:"relative"}} />

            <div className="container">
                <div className="row d-flex justify-content-center align-items-center" style={myStyle}>
                    <div className="card" style={{
                        borderRadius: '25px', borderWidth: '0px', backgroundColor: '#2d2c3e',
                        color: 'white',
                    }}>
                        <div className="card-body" style={{ height: '340px'}}>
                            <h2 style={{textAlign:'center'}}>Login</h2>
                            <form onSubmit={handleSubmit}>
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
                                <Link style={{textDecoration:'none',color:'whitesmoke',position:"relative" , left:"175px"}} to={"/signup"}>Create a new account</Link><br/>
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

export default Login;