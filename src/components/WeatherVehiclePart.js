import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import AirConditioningSystem from './PARTS_IMG/AirConditioning system.jfif'
import Alternator from './PARTS_IMG/Alternator.jfif'
import axles from './PARTS_IMG/axles.jfif'
import BallJoints from './PARTS_IMG/BallJoints.jfif'
import Battery from './PARTS_IMG/Battery.jfif'
import BodyPanels from './PARTS_IMG/Body Panels.jfif'
import BreakSystem from './PARTS_IMG/Break System.jfif'
import BreakPads from './PARTS_IMG/Breakpads.jfif'
import Calipers from './PARTS_IMG/Calipers.jfif'
import Camshaft from './PARTS_IMG/camshaft.jfif'
import CatalyticCoverter from './PARTS_IMG/Catalytic Converter.jfif'
import Clutch from './PARTS_IMG/clutch.jfif'
import ControlModules from './PARTS_IMG/Control Modules.jfif'
import Crankshaft from './PARTS_IMG/crankshaft.jfif'
import Cylinderblock from './PARTS_IMG/cylinderblock.jfif'
import Dashboard from './PARTS_IMG/Dashboard.jfif'
import Differential from './PARTS_IMG/differential.jfif'
import Doors from './PARTS_IMG/Doors.jfif'
import DriveShaft from './PARTS_IMG/driveshaft.jfif'
import Drums from './PARTS_IMG/Drums.jfif'
import EntertainmentSystem from './PARTS_IMG/Entertainment System.jfif'
import ExhaustManifold from './PARTS_IMG/Exhaust Manifold.jfif'
import ExhaustSystem from './PARTS_IMG/Exhaust system.jfif'
import IgnitionSystem from './PARTS_IMG/Ignition System.jfif'
import Muffler from './PARTS_IMG/Muffler.jfif'
import OxygenSensors from './PARTS_IMG/Oxygen Sensors.jfif'
import Piston from './PARTS_IMG/piston.jfif'
import Rotors from './PARTS_IMG/Rotors.jfif'
import Seats from './PARTS_IMG/Seats.jfif'
import Sensors from './PARTS_IMG/Sensors.jfif'
import ShocksAndSturts from './PARTS_IMG/ShocksAndSturts.jfif'
import Shoes from './PARTS_IMG/Shoes.jfif'
import Springs from './PARTS_IMG/Springs.jfif'
import StarterMotor from './PARTS_IMG/Starter Motor.jfif'
import SteeringRack from './PARTS_IMG/SteeringRack.jfif'
import Suspension from './PARTS_IMG/suspension.jfif'
import SwayBars from './PARTS_IMG/SwayBars.jfif'
import TieRods from './PARTS_IMG/TieRods.jfif'
import Tires from './PARTS_IMG/Tires.jfif'
import Transmission from './PARTS_IMG/transmission.jfif'
import TimingBelt from './PARTS_IMG/timingBelt.jfif'
import Valves from './PARTS_IMG/valves.jfif'
import WheelBearing from './PARTS_IMG/WheelBearing.jfif'
import Windows from './PARTS_IMG/Windows.jfif'

let img
const WeatherVehiclePart = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    let { Season, VehicleComponent, Effect, Maintenance, Cure, color, index } = props;

    if (VehicleComponent === 'AirConditioning system') {
        img = AirConditioningSystem
    }
    else if (VehicleComponent === 'Alternator') {
        img = Alternator
    }
    else if (VehicleComponent === 'Axles') {
        img = axles
    }
    else if (VehicleComponent === 'Ball Joints') {
        img = BallJoints
    }
    else if (VehicleComponent === 'Battery') {
        img = Battery
    }
    else if (VehicleComponent === 'Body Panels') {
        img = BodyPanels
    }
    else if (VehicleComponent === 'Break System') {
        img = BreakSystem
    }
    else if (VehicleComponent === 'Brake Pads') {
        img = BreakPads
    }
    else if (VehicleComponent === 'Calipers') {
        img = Calipers
    }
    else if (VehicleComponent === 'Camshaft') {
        img = Camshaft
    }
    else if (VehicleComponent === 'Catalytic Converter') {
        img = CatalyticCoverter
    }
    else if (VehicleComponent === 'Clutch') {
        img = Clutch
    }
    else if (VehicleComponent === 'Control Modules') {
        img = ControlModules
    }
    else if (VehicleComponent === 'Crankshaft') {
        img = Crankshaft
    }
    else if (VehicleComponent === 'Cylinder block') {
        img = Cylinderblock
    }
    else if (VehicleComponent === 'Dashboard') {
        img = Dashboard
    }
    else if (VehicleComponent === 'Differential') {
        img = Differential
    }
    else if (VehicleComponent === 'Doors') {
        img = Doors
    }
    else if (VehicleComponent === 'Driveshaft') {
        img = DriveShaft
    }
    else if (VehicleComponent === 'Drums') {
        img = Drums
    }
    else if (VehicleComponent === 'Entertainment System') {
        img = EntertainmentSystem
    }
    else if (VehicleComponent === 'Exhaust Manifold') {
        img = ExhaustManifold
    }
    else if (VehicleComponent === 'Exhaust System') {
        img = ExhaustSystem
    }
    else if (VehicleComponent === 'Ignition System') {
        img = IgnitionSystem
    }
    else if (VehicleComponent === 'Oxygen Sensors') {
        img = OxygenSensors
    }
    else if (VehicleComponent === 'Muffler') {
        img = Muffler
    }
    else if (VehicleComponent === 'Pistons') {
        img = Piston
    }
    else if (VehicleComponent === 'Rotors') {
        img = Rotors
    }
    else if (VehicleComponent === 'Seats') {
        img = Seats
    }
    else if (VehicleComponent === 'Sensors') {
        img = Sensors
    }
    else if (VehicleComponent === 'Shocks and Struts') {
        img = ShocksAndSturts
    }
    else if (VehicleComponent === 'Shoes') {
        img = Shoes
    }
    else if (VehicleComponent === 'Springs') {
        img = Springs
    }
    else if (VehicleComponent === 'Starter Motor') {
        img = StarterMotor
    }
    else if (VehicleComponent === 'Steering Rack') {
        img = SteeringRack
    }
    else if (VehicleComponent === 'Suspension') {
        img = Suspension
    }
    else if (VehicleComponent === 'Sway Bars') {
        img = SwayBars
    }
    else if (VehicleComponent === 'Tie Rods') {
        img = TieRods
    }
    else if (VehicleComponent === 'Tires') {
        img = Tires
    }
    else if (VehicleComponent === 'Transmission') {
        img = Transmission
    }
    else if (VehicleComponent === 'Timing belt or chain') {
        img = TimingBelt
    }
    else if (VehicleComponent === 'Valves') {
        img = Valves
    }
    else if (VehicleComponent === 'Wheel Bearings') {
        img = WheelBearing
    }
    else if (VehicleComponent === 'Windows') {
        img = Windows
    }

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              {VehicleComponent}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Maintenance</h4>
              <p className="card-text">{Maintenance}</p>
              <h4>Cure</h4>
              <p className="card-text">{Cure}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    return (
        <div>
            <div className="card" style={{width: "385px",height: "475px",margin: "20px",}}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', position: 'absolute' }}>
                    <span className={`badge rounded-pill bg-${color}`} style={{ zIndex: 1 }}>{Season}</span>
                </div>
                <img src={img} style={{height:"300px"}}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center"><b>{VehicleComponent}</b></h5>
                    <p className="card-text" style={{width: "345px",height: "70px"}}><b>Effect:</b> {Effect}</p>
                    {/* <p className="card-text"><b>Maintenance:</b> {Maintenance}</p>
                    <p className="card-text"><b>Cure:</b> {Cure}</p> */}
                    <div style={{marginLeft:"80px"}}>
                    <Button variant="primary"  onClick={() => setModalShow(true)}>
                        Maintenance and Cure
                    </Button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </div>
    )
    // }
}
export default WeatherVehiclePart