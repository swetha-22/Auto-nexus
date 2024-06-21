import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import summer from './season/summer.jpg'
import winter from './season/winter.jpg'
import spring from './season/spring.jpg'
import rainy from './season/rainy.jpg'

function WeatherDetails(props) {
    let mainStyle = {
        // backgroundColor:"rgb(235, 237, 237)",
        width: "100%",
        margin: "20px 50px 0px 43px",
        position: "fixed",
        left: "235px",
        height: "100%",
        // border: "1px solid #ccc",
    }
    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                {/* code */}
                <div style={mainStyle}>
                    <div className="d-flex flex-row" style={{"height":"100%"}}>
                        <div className="" style={{"width":"20%","height":"600px","borderRadius":"20px"}}>
                            <Link to="/summer">
                            <button style={{padding:"0px",width: "100%",borderRadius:"22px 0px 0px 22px", border:"1px solid grey" ,backgroundColor: "#f3e4f1"}}>
                                <img style={{margin:"0px","width": "100%","height":"570px","borderRadius":"20px 0px 0px 20px"}} src={summer} alt="Your GIF" />
                                <h4 style={{"marginTop":"10px"}}>SUMMER</h4>
                            </button>
                            </Link>
                        </div>
                        <div className="" style={{"width":"20%","height":"600px","borderRadius":"20px"}}>
                        <Link to="/winter">
                            <button style={{padding:"0px",width: "100%", border:"1px solid grey" ,backgroundColor: "#f3e4f1"}}>
                                <img style={{ "width": "100%","height":"570px"}} src={winter} alt="Your GIF" />
                                <h4 style={{"marginTop":"10px"}}>WINTER</h4>
                            </button>
                        </Link>
                        </div>
                        <div className="" style={{"width":"20%","height":"600px","borderRadius":"20px"}}>
                        <Link to="/spring">
                            <button style={{padding:"0px",width: "100%", border:"1px solid grey" ,backgroundColor: "#f3e4f1"}}>
                                <img style={{ "width": "100%","height":"570px"}} src={spring} alt="Your GIF" />
                                <h4 style={{"marginTop":"10px"}}>SPRING</h4>
                            </button>
                        </Link>
                        </div>
                        <div className="" style={{"width":"20%","height":"600px","borderRadius":"20px"}}>
                        <Link to="/rainy">
                            <button style={{padding:"0px",width: "100%",borderRadius:"0px 22px 22px 0px", border:"1px solid grey" ,backgroundColor: "#f3e4f1"}}>
                                <img style={{ "width": "100%","height":"570px","borderRadius":"0px 20px 20px 0px"}} src={rainy} alt="Your GIF" />
                                <h4 style={{"marginTop":"10px"}}>RAINY</h4>
                            </button>
                        </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default WeatherDetails;