import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import User from './user2-removebg-preview.png';
import LogoutImg from './logout.png';

const Navbar = () => {
    let myStyle={
        backgroundColor: "#a46dff", 
        color: "black",
        position:"relative"
    }
    
    let userName=localStorage.getItem("emp_id").split('-')[0];

    let navigate=useNavigate()
    let handleLogout=()=>{
        localStorage.removeItem("emp_id");
        navigate("/");
    }

    let logoutStyle={
        position: "relative",
        left: "-15px",
        height: "20px",
        paddingBottom: "31px",
        paddingTop: "0px",
        background: "#545252",
        border: "none",
        width: "80px",
        fontSize: "18px",
        color: "orange",
        fontWeight: "bold",
    }

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark" style={myStyle}>
                <div className="container-fluid navber" style={{width:"1475px" , height:"40px"}}>
                    <img src={User} style={{width:"35px",height:"35px",marginRight:"10px"}} alt="user image"/>
                    <Link className="navbar-brand" to="/" style={{ color: "rgb(211, 248, 244)" , fontSize:"20px" }}><i>Hello {userName}</i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{fontSize:"19px" , position:"relative" , left:"25px"}}>
                                <Link className="nav-link" aria-current="page" to="/about" style={{ color: "black" }}> <b>About Us</b> </Link>
                            </li>
                            <li className="nav-item" style={{fontSize:"19px" , position:"relative" , left:"50px"}}>
                                <Link className="nav-link" aria-current="page" to="/dashboard" style={{ color: "black" }}> <b>Contact Us</b> </Link>
                            </li>
                        </ul>
                        <img src={LogoutImg} alt="" style={{width:"240px" , height:"70px" , position:"relative" , left:"100px"}} />
                        <button className="btn " type="submit" onClick={handleLogout} style={logoutStyle}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar