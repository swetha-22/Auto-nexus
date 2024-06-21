import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './VehicleUi.css';
import KIASoul from './ImagesCar/KIASoul.jpg';
import Audi from './ImagesCar/Audi.png';
import BMW from './ImagesCar/BMW.jpg';
import Porsche from './ImagesCar/porshe.jpg';
import Honda from './ImagesCar/Honda.jpg';
import Benz from './ImagesCar/Benz.jpg';
// import Hyundai from './ImagesCar/Benz.jpg';
// import Jagaur from './ImagesCar/Benz.jpg';
// import MaruthiSuzuki from './ImagesCar/Benz.jpg';
// import Renault from './ImagesCar/Benz.jpg';
// import Skoda from './ImagesCar/Benz.jpg';
// import Tata from './ImagesCar/Benz.jpg';
// import Toyota from './ImagesCar/Benz.jpg';
// import Volkswagen from './ImagesCar/Benz.jpg';
// const fs = require('fs');
let img
let myImg=Porsche;
const VehicleUi = () => {
    let mainStyle={
        border: "2px solid grey",
        width: "100%",
        margin: "30px 50px 0px 40px",
        position: "fixed",
        left: "235px",
        height:"100%",
        overflow:"scroll",
        border: "1px solid #ccc",
        padding: "10px",
    }
    const [carDetails, setCarDetails] = useState(null);
    const host = "http://localhost:5000";
    // let brand=carDetails.make
    // let model=carDetails.model
    // const [carImage, setCarImage] = useState("./KIASoul.jpg");
    async function fetchCarDetails() {
        try {
          let collName=localStorage.getItem("emp_id");
        const response = await fetch(`${host}/api/vehicle/vehicle_details/${collName}`);
        const data = await response.json();
        console.log(data)
        setCarDetails(data);
        // const imageResponse = await axios.get(`${host}/api/vehicle/carimage/${carDetails.make}/${carDetails.model}`);
        // img=data.make+data.model;
        img=data.results.vehicle_information.make;
        if(img==='Porsche')
        {
            myImg=Porsche
        }
        else if(img==='Benz')
        {
            myImg=Benz
        }
        else if(img==='BMW')
        {
            myImg=BMW
        }
        else if(img==='Honda')
        {
            myImg=Honda
        }
        else if(img==='Audi')
        {
            myImg=Audi
        }
        else if(img==='Kia')
        {
            myImg=KIASoul
        }
        } catch (error) {
              console.log(error);
      }
      }
    useEffect(() => {
      fetchCarDetails();
    },  []);
  
  return (
    <div>
        <Navbar/>
        <div className="d-flex">
            <Sidebar/>
                {/* code */}
                <div style={mainStyle}>
                <img style={{"width": "50%","marginLeft": "250px",}}src={myImg} alt="image" />

      {true && (
        <table  className="table table-striped">
        <thead>
          <tr>
            <th colSpan="2"><h3>Car Details:</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Model Year:</td>
            {/* <td>{carDetails.results.vehicle_information.model_year}</td> */}
            <td>2016</td>
          </tr>
          <tr>
            <td>Make:</td>
            {/* <td>{carDetails.results.vehicle_information.make}</td> */}
            <td>Porsche</td>
          </tr>
          <tr>
            <td>Model:</td>
            {/* <td>{carDetails.results.vehicle_information.model}</td> */}
            <td>Cayenne</td>
          </tr>
          <tr>
            <td>Trim:</td>
            {/* <td>{carDetails.results.vehicle_information.trim}</td> */}
            <td>Turbo</td>
          </tr>
          <tr>
            <td>Style:</td>
            {/* <td>{carDetails.results.vehicle_information.style}</td> */}
            <td>AWD Turbo 4dr SUV</td>
          </tr>
          <tr>
            <td>Vehicle Type :</td>
            {/* <td>{carDetails.results.vehicle_information.vehicle_type}</td> */}
            <td>SUV</td>
          </tr>
          <tr>
            <td>Body Type:</td>
            {/* <td>{carDetails.results.vehicle_information.body_type}</td> */}
            <td>SUV</td>
          </tr>
          <tr>
            <td>Doors:</td>
            {/* <td>{carDetails.results.vehicle_information.doors}</td> */}
            <td>4</td>
          </tr>
          <tr>
            <td>Drive Type:</td>
            {/* <td>{carDetails.results.vehicle_information.drive_type}</td> */}
            <td>AWD</td>
          </tr>
          <tr>
            <td>Engine Size:</td>
            {/* <td>{carDetails.results.vehicle_information.engine_size}</td> */}
            <td>4.8</td>
          </tr>
          <tr>
            <td>Engine Cylinders:</td>
            {/* <td>{carDetails.results.vehicle_information.engine_cylinders}</td> */}
            <td>8</td>
          </tr>
          <tr>
            <td>Engine Aspiration:</td>
            {/* <td>{carDetails.results.vehicle_information.engine_aspiration}</td> */}
            <td>TT</td>
          </tr>
          <tr>
            <td>Engine Horsepower:</td>
            {/* <td>{carDetails.results.vehicle_information.engine_horsepower}</td> */}
            <td>S20</td>
          </tr>
          <tr>
            <td>Fuel Type :</td>
            {/* <td>{carDetails.results.vehicle_information.fuel_type}</td> */}
            <td>Gasoline</td>
          </tr>
          <tr>
            <td>Transmission Speeds:</td>
            {/* <td>{carDetails.results.vehicle_information.transmission_speeds}</td> */}
            <td>8</td>
          </tr>
          <tr>
            <td>Weight:</td>
            {/* <td>{carDetails.results.vehicle_information.gross_vehicle_weight}</td> */}
            <td>Class 2E:6.001 - 7.000 ~ 3.175kg</td>
          </tr>
          <tr>
            <td>Manufacturer :</td>
            {/* <td>{carDetails.results.manufacturer_information.manufacturer}</td> */}
            <td>DR ING H.C.F. PORSCHE AG</td>
          </tr>
          <tr>
            <td>Plant Country:</td>
            {/* <td>{carDetails.results.manufacturer_information.country_of_manufacture}</td> */}
            <td>Germany</td>
          </tr>
          <tr>
            <td>Plant City:</td>
            {/* <td>{carDetails.results.manufacturer_information.plant_city}</td> */}
            <td>Stuttgart</td>
          </tr>
          {/* <tr>
            <td>Body Class:</td>
            <td>{carDetails.specs.body_class}</td>
          </tr>
          <tr>
            <td>Gross Vehicle Weight Rating from:</td>
            <td>{carDetails.specs.gross_vehicle_weight_rating_from}</td>
          </tr>
          <tr>
            <td>Number of Seats:</td>
            <td>{carDetails.specs.number_of_seats}</td>
          </tr>
          <tr>
            <td>Number of Seat Rows:</td>
            <td>{carDetails.specs.number_of_seat_rows}</td>
          </tr>
          <tr>
            <td>Drive Type:</td>
            <td>{carDetails.specs.drive_type}</td>
          </tr>
          <tr>
            <td>Engine Number of Cylinders:</td>
            <td>{carDetails.specs.engine_number_of_cylinders}</td>
          </tr>
          <tr>
            <td>Engine Model:</td>
            <td>{carDetails.specs.engine_model}</td>
          </tr>
          <tr>
            <td>Engine Power:</td>
            <td>{carDetails.specs.engine_power_kw}</td>
          </tr>
          <tr>
            <td>Fuel Type:</td>
            <td>{carDetails.specs.fuel_type_primary}</td>
          </tr>
          <tr>
            <td>Fuel Delivery Fuel Injection Type:</td>
            <td>{carDetails.specs.fuel_type_primary}</td>
          </tr>
          <tr>
            <td>Engine Manufacturer:</td>
            <td>{carDetails.specs.engine_manufacturer}</td>
          </tr>
          <tr>
            <td>Seat Belt Type:</td>
            <td>{carDetails.specs.seat_belt_type}</td>
          </tr>
          <tr>
            <td>Curtain Air Bag Locations:</td>
            <td>{carDetails.specs.curtain_air_bag_locations}</td>
          </tr>
          <tr>
            <td>Front Air Bag Locations:</td>
            <td>{carDetails.specs.front_air_bag_locations}</td>
          </tr> */}
        </tbody>
      </table>
      
      )}
    </div>
    </div>
   
    </div>
  
  )
}

export default VehicleUi