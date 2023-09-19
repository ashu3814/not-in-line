import React from 'react';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
  };

  const columnStyle = {
    flex: 1,
    margin: '0 10px',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
  };

  const searchButtonStyle = {
    padding: '10px 20px',
    background: 'transparent',
    border: '1px solid white',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  };

 
  const mobileStyles = {
    footerStyle: {
      ...footerStyle,
      flexDirection: 'column', 
      textAlign: 'center', 
    },
    columnStyle: {
      ...columnStyle,
      textAlign: 'center', 
    },
  };

  return (
    <footer style={window.innerWidth <= 767 ? mobileStyles.footerStyle : footerStyle}>
      <div style={columnStyle}>
        <div style={logoStyle}>
            <img src={Logo} alt="Logo" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <input
          type="text"
          placeholder="Search"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid white', marginTop: '10px' }}
        />
        <button style={searchButtonStyle}>Search</button>
      </div>
      <div style={columnStyle}>
        <h4>Services</h4>
        <ul>
          <li>Appointments</li>
          <li>Lab tests</li>
          <li>A-Z medicine</li>
        </ul>
      </div>
      <div style={columnStyle}>
        <h4>How it works</h4>
        <ul>
          <li>Talk to us</li>
          <li>support@notinline.com</li>
          <li>appointment@notinline.com</li>
        </ul>
      </div>
      <div style={columnStyle}>
        <h4>Contact Information</h4>
        <ul>
          <li>+91 12345 67899</li>
          <li>+91 97642 09752</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
