import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import "./Dashboard.css"
import VehDet from './dashboardGifs/vehicle-details.gif';
import Locator from './dashboardGifs/service-locator.gif';
import Notifier from './dashboardGifs/notify.gif';
import Health from './dashboardGifs/health.gif';
import Weather from './dashboardGifs/weather.gif';

let img=Weather;

const Dashboard = () => 
{
    let mainStyle={
        border: "1px solid purple",
        boxShadow: "10px 10px 10px 4px rgba(197, 69, 247, 0.5)",
        width: "80%",
        margin: "37px 45px",
        position: "fixed",
        left: "235px",
        height:"82%",
        borderRadius:'20px',
    }

    let components={
        // border:"2px solid grey",
        width:"1000px",
        height:"500px",
        position:"relative",
        top:"50px",
        left:"100px",
        display:"flex",
        flexDirection:"row"
    }

    let detailsButton={
        width:"300px",
        height:"200px",
        color:"a46dff",
        backgroundColor:"#f8f8f8",
        margin: "20px",
        borderRadius: "26px",
    }

    let detailButtonImage = {
        width: "295px",
        height: "152px",
        marginLeft: "-5px",
        marginTop: "-9px",
        borderRadius: "25px 25px 0px 0px",
    }

    let locatorButtonImage = {
        width: "330px",
        marginLeft: "-286px",
        height: "197px",
        borderRadius: "23px 0px 0px 23px"
    }

    let locatorButton={
        color:"a46dff",
        backgroundColor:"#f8f8f8",
        margin: "20px 20px 20px 33px",
        borderRadius: "26px",
        width:"620px",
        height:"200px",
        marginLeft:"35px",
    }
    
    let notifierButton={
        width:"300px",
        height:"200px",
        color:"a46dff",
        backgroundColor:"#f8f8f8",
        borderRadius: "26px",
        marginLeft:"15px"
    }

    let notifierButtonImage = {
        width: "295px",
        height: "152px",
        marginLeft: "-5px",
        marginTop: "-9px",
        borderRadius: "25px 25px 0px 0px",
    }
    
    let healthButton={
        width:"280px",
        height:"260px",
        margin:"20px",
        marginTop:"-13px",
        color:"a46dff",
        backgroundColor:"#f8f8f8",
        borderRadius: "26px",
    }
    
    let healthButtonImage = {
        width: "275px",
        marginLeft: "-5px",
        marginTop: "-9px",
        height: "213px",
        borderRadius: "25px 25px 0px 0px",
    }
    
    let weatherButton={
        width:"275px",
        height:"215px",
        margin:"5px 24px 0px",
        color:"a46dff",
        backgroundColor:"#f8f8f8",
        borderRadius: "26px",
    }

    let weatherButtonImage = {
        width:"271px",
        height:"158px",
        marginLeft:"-5px",
        marginTop:"-21px",
        borderRadius: "25px 25px 0px 0px",
    }

  return (
    <div>
        <Navbar/>
        <div className="d-flex">
            <Sidebar/>
            <div className='myComponent' style={mainStyle}>
                <div style={components} >
                    <div className='div1 col-md-8'>
                        <div>
                            <Link to="/vehicleDetails">
                                <button style={detailsButton} className='myDetailsButton'>
                                    <img src={VehDet} alt="" style={detailButtonImage} />
                                    <h5 style={{position:'relative',top:"8px"}}>Vehicle details</h5>
                                </button>
                            </Link>
                            <Link to="/notification">
                                <button style={notifierButton} className='myNotifyButton'>
                                    <img src={Notifier} alt="" style={notifierButtonImage} />
                                    <h5 style={{position:'relative',top:"8px"}}>Notification Manager</h5>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/serviceLocator">
                                <button style={locatorButton} className='myLocatorButton'>
                                    <img src={Locator} alt="" style={locatorButtonImage} />
                                    <h4 style={{position:'relative',position:"relative",top:"-122px",left:"393px", width:"156px"}}>Service-center</h4>
                                    <h4 style={{position:'relative',position:"relative",top:"-133px",left:"413px", width:"110px"}}>Locator</h4>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div  className='div2 col-md-4'>
                        <Link to="/vehicleCondition">
                            <button style={healthButton} className='myHealthButton'>
                                <img src={Health} alt="" style={healthButtonImage} />
                                <h5 style={{position:'relative',top:"8px"}}>Vehicle Condition</h5>
                            </button>
                        </Link>
                        <Link to="/weatherDetails">
                            <button style={weatherButton} className='myWeatherButton'>
                                <img src={img} alt="" style={weatherButtonImage} />
                                <h5 style={{position:'relative',top:"8px"}}>Weather Maintainance</h5>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
