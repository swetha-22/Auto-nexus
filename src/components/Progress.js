import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

let progressStyle = {
  marginTop:"10px",
  width: "510px",
  height: "25px",
  borderRadius: "20px",
  position: "relative",
  top: "80px",
  right: "43px",
}

let variant;

const Progress = ({ percent }) => {

  if(percent>=80)
  {
    variant="success";
  }
  else if(percent>=60)
  {
    variant="warning";
  }
  else{
    variant="danger";
  }

  return (
    <div style={progressStyle}>
      <ProgressBar striped variant={`${variant}`} now={percent} label={`${percent}%`} animated style={{ width: '510px', height: '25px' , borderRadius:"20px" , backgroundColor:"#2d2c3e", }} />
    </div>
  );
};

export default Progress;
