import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const sideBarStyle = {
        width: '250px',
        height: '100%',
        backgroundColor: '#2d2c3e',
        color: 'white',
        position: 'fixed',
        top: "56px",
        left: 0,
    };

  const location = useLocation();

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    paddingTop: '5px',
    paddingBottom: '8px',
    paddingRight: '20px',
    marginLeft: '1px',
    borderRadius: '20px',
    backgroundColor: '#2d2c3e',
    color: 'white',
    fontSize:"17px"
  };

  const activeLinkStyle = {
    backgroundColor: 'whitesmoke',
    color: 'black',
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div style={sideBarStyle}>
      <div className="d-flex flex-row">
        <h2 className="m-3">AutoNexus</h2>
      </div>
      <hr />
      <br />
      <div className="d-flex flex-row align-items-center mb-2">
        <Link
          className="link"
          style={{ ...linkStyle, ...(isLinkActive('/dashboard') && activeLinkStyle) }}
          to="/dashboard"
        >
          <i className="fas fa-user fa-lg me-3 fa-fw mb-2 mx-3" />
          Home
        </Link>
      </div>
      <div className="d-flex flex-row align-items-center mb-2">
        <Link
          className="link"
          style={{ ...linkStyle, ...(isLinkActive('/vehicleDetails') && activeLinkStyle) }}
          to="/vehicleDetails"
        >
          <i className="fas fa-car fa-lg me-3 fa-fw mb-2 mx-3" />
          Vehicle Details
        </Link>
      </div>
      <div className="d-flex flex-row align-items-center mb-2">
        <Link
          className="link"
          style={{ ...linkStyle, ...(isLinkActive('/notification') && activeLinkStyle) }}
          to="/notification"
        >
          <i className="fas fa-bell fa-lg me-3 fa-fw mb-2 mx-3" />
          Notifier
        </Link>
      </div>
      <div className="d-flex flex-row align-items-center mb-2">
        <Link
          className="link"
          style={{ ...linkStyle, ...(isLinkActive('/vehicleCondition') && activeLinkStyle) }}
          to="/vehicleCondition"
        >
          <i className="fas fa-heartbeat fa-lg me-3 fa-fw mb-2 mx-3" />
          Vehicle Condition 
        </Link>
      </div>
      <div className="d-flex flex-row align-items-center mb-2">
        <Link
          className="link"
          style={{ ...linkStyle, ...(isLinkActive('/weatherDetails') && activeLinkStyle) }}
          to="/weatherDetails"
        >
          <i className="fas fa-moon fa-lg me-3 fa-fw mb-2 mx-3" />
          Weather Maintainance
        </Link>
      </div>
      <div className="d-flex flex-row align-items-center mb-2">
        <Link
          className="link"
          style={{ ...linkStyle, ...(isLinkActive('/serviceLocator') && activeLinkStyle) }}
          to="/serviceLocator"
        >
          <i className="fas fa-map-marker-alt fa-lg me-3 fa-fw mb-2 mx-3" />
          Service Locator
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;