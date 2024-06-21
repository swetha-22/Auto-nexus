import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import WeatherVehiclePart from './WeatherVehiclePart'
const Summer = () => {
    let mainStyle={
      backgroundColor:"rgb(235, 237, 237)",
        border: "2px solid grey",
        width: "100%",
        margin: "30px 50px 0px 40px",
        position: "fixed",
        left: "210px",
        height:"100%",
        overflow:"scroll",
        border: "1px solid #ccc",
    }

    let myStyle = {
        width:"87%",
        margin: "20px",
        paddingRight:"10px"
    }
    let myStyle1 = {
        // width:"95%",
        marginLeft:"-20px"
    }
    const [carDetails, setCarDetails] = useState(null);
    const host = "http://localhost:5000";
    
    async function fetchCarDetails() {
        try {
        const response = await fetch(`${host}/api/weather/summer`);
        const data = await response.json();
        // console.log(data)
        setCarDetails(data);
         } catch (error) {
              console.log(error);
      }
      }
    useEffect(() => {
      fetchCarDetails();
    },  []);
   console.log(carDetails)
  return (
    <div>
        <Navbar/>
        <div className="d-flex">
            <Sidebar/>
                {/* code */}
                <div style={mainStyle}>
                {carDetails === null ? (
            <p>Loading...</p>
          ) : (
            <div className="row" style={myStyle}>
              {carDetails.map((data, index) => {
                return (
                  <div className="col-md-4" key={index} style={myStyle1}>
                    <WeatherVehiclePart
                      Season={data.Season}
                      VehicleComponent={data.VehicleComponent}
                      Effect={data.Effect}
                      Maintenance={data.Maintenance}
                      Cure={data.Cure}
                      color={"danger"}
                      index={data.VehicleComponent}
            
                    />
                  </div>
                );
              })}
            </div>
        
          )}
    </div>
    </div>
   
    </div>
  
  )
}

export default Summer