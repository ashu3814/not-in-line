import React from 'react';

import call from '../assets/images/call.png';
import distance from '../assets/images/distance.png';
import person from '../assets/images/person.png';

const MyForm = () => {
  const formStyle = {
    textAlign: 'center',
    alignItems: "center",
  };

  const headerStyle = {
    width: '307px',
    height: '30px',
    top: '152px',
    left: '196px',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '30px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#2F2F2F',
  };

  const inputStyle = {
    width: '499px', // Increase the width to make the input elements wider
    height: '47px',
    top: '207px',
    left: '196px',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  const checkboxLabelStyle = {
    display: 'flex',
    alignItems: 'center', // Center align checkbox and text
    marginBottom: '10px', // Add margin below checkbox and text
  };

  const checkboxStyle = {
    width: '50px', // Set the width equal to the logo and input element width
    height: '22px',
    top: '431px',
    left: '158px',
  };

  

  const buttonTextStyle = {
    width: '85px',
    height: '25px',
    top: '478px',
    left: '315px',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#FFFFFF',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'center',
  };
  const buttonContainerStyle = {
    width: '236px',
    height: '42px',
    top: '469px',
    left: '239px',
    borderRadius: '6px',
    background: '#138ED1',
    display: 'flex',
    alignItems: 'center',
    marginLeft:'55px',
    justifyContent: 'center', 
    textAlign: 'center', 
  };

  return (
    <div style={formStyle}>
      <h1 style={headerStyle}>Fill in the details to get a call!</h1>

      <div>
        <div style={inputStyle}>
          <img src={person} alt="Person" style={logoStyle} />
          <input style={{ background: '#E3E3E3', borderRadius: '5px' }} type="text" placeholder="Full Name" />
        </div>
        <div style={inputStyle}>
          <img src={call} alt="Call" style={logoStyle} />
          <input style={{ background: '#E3E3E3', borderRadius: '5px' }} type="text" placeholder="Mobile" />
        </div>
        <div style={inputStyle}>
          <img src={distance} alt="Distance" style={logoStyle} />
          <input style={{ background: '#E3E3E3', borderRadius: '5px' }} type="text" placeholder="Location" />
        </div>
      </div>
      <div style={checkboxLabelStyle}>
        <label>
          <input type="checkbox" style={checkboxStyle} />
          By continuing, you agree to our <a href="#">T&C</a> and privacy policy
        </label>
      </div>
      <div style={buttonContainerStyle}>
        <span style={buttonTextStyle}>Proceed</span>
      </div>
    </div>
  );
};

export default MyForm;
