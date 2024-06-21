
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import VehicleUi from './components/VehicleUi';
import Notification from './components/Notification';
import VehicleCondition from './components/VehicleCondition';
import ServiceLocator from './components/ServiceLocator';
import WeatherDetails from './components/WeatherDetails';
// season imports
import Summer from './components/Summer';
import Winter from './components/Winter';
import Spring from './components/Spring';
import Rainy from './components/Rainy';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div >
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/vehicleDetails" element={<VehicleUi />} />
            <Route exact path="/notification" element={<Notification/>} />
            <Route exact path="/weatherDetails" element={<WeatherDetails />} />
            <Route exact path="/vehicleCondition" element={<VehicleCondition />} />
            <Route exact path="/serviceLocator" element={<ServiceLocator />} />
            <Route exact path="/summer" element={<Summer />} />
            <Route exact path="/winter" element={<Winter />} />
            <Route exact path="/spring" element={<Spring />} />
            <Route exact path="/rainy" element={<Rainy />} />

            <Route exact path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
