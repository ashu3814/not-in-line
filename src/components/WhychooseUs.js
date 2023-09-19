import React from 'react';

import Ellipse13 from '../assets/images/Ellipse13.png';
import Ellipse14 from '../assets/images/Ellipse14.png'
import Ellipse15 from '../assets/images/Ellipse15.png'
import Ellipse16 from '../assets/images/Ellipse16.png'

const headingStyle = {
  width: '540px',
  height: '70px',
  fontFamily: 'Montserrat',
  fontSize: '48px',
  fontWeight: 600,
  lineHeight: '70px',
  letterSpacing: '0em',
  textAlign: 'center',
};

const paragraphStyle = {
  width: '927px',
  height: '80px',
  fontFamily: 'Montserrat',
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '40px',
  letterSpacing: '0em',
  textAlign: 'center',
};

const main = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerStyle = {
  width: '373px',
  height: '226px',
  border: '1px solid #ccc',
  borderRadius: '33px',
  padding: '20px',
  position: 'relative',
  marginBottom: '10px',
};

const circleImageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  border: '1px solid #ccc',
  position: 'absolute',
  top: '-50px',
  left: '100%',
  transform: 'translateX(-70%)',
};

export default function WhychooseUs() {
  return (
    <div style={main}>
      <h1 style={headingStyle}>
        Why <span style={{ color: "#138ED1" }}>Choose</span> Us?
      </h1>
      <p style={paragraphStyle}>
        We want you and your heart to be healthy so you can live a happy life!
      </p>

      <div className="row">
        <div className="col-md-6">
          <div style={containerStyle}>
            <img
              src={Ellipse13}
              alt="Circle Image"
              style={circleImageStyle}
            />
            <h2 style={{ margin: '0' }}>NABL Accredited</h2>
            <p>Get accurate and safe results from our NABL-certified lab partners.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div style={containerStyle}>
            <img
              src={Ellipse14}
              alt="Circle Image"
              style={circleImageStyle}
            />
            <h2 style={{ margin: '0' }}>Container 2 Heading</h2>
            <p>Container 2 content goes here.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div style={containerStyle}>
            <img
              src={Ellipse15}
              alt="Circle Image"
              style={circleImageStyle}
            />
            <h2 style={{ margin: '0' }}>Container 3 Heading</h2>
            <p>Container 3 content goes here.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div style={containerStyle}>
            <img
              src={Ellipse16}
              alt="Circle Image"
              style={circleImageStyle}
            />
            <h2 style={{ margin: '0' }}>Container 4 Heading</h2>
            <p>Container 4 content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
