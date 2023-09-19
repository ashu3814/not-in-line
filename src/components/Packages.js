import React from 'react';

const headingStyle = {
  width: '340px',
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

const boxContainer = {
  display: 'flex',
  justifyContent: 'space-between', 
};

const boxStyle = {
  width: '353px',
  height: '339px',
  boxShadow: '0px 4px 30px 0px #00000040',
  margin: '10px', 
  padding: '20px', 
};

const boxHeadingStyle = {
  width: '235px',
  height: '80px',
  fontFamily: 'Montserrat',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '40px',
  letterSpacing: '0em',
  textAlign: 'left',
};

const boxParaStyle = {
  fontFamily: 'Montserrat',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '28px',
  letterSpacing: '0em',
  textAlign: 'left',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  background: '#138ED1',
  color: '#ffffff',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  padding:"5px",
  margin:"1px"
};

export default function Packages() {
  return (
    <div style={main}>
      <h1 style={headingStyle}>
        Top <span style={{ color: "#138ED1" }}>Packages</span>
      </h1>
      <p style={paragraphStyle}>
        Explore our wide range of tests! We ensure that you don’t miss out on any chance to keep yourself healthy.
      </p>
      <div style={boxContainer} className='d-flex flex-column flex-sm-row'>
        <div style={boxStyle}>
          <div style={boxHeadingStyle}>
            Basic Full Body Checkup
          </div>
          <p style={boxParaStyle}>
           Number of test-53
          </p>
          <p style={boxParaStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, fermentum dolor quis, tempus magna.
          </p>
          <p>MRP{"  "}<span style={{textDecoration:'line-through'}}>₹ 10,000</span><span>{"        "}₹ 8,490</span></p>
          <button style={buttonStyle}>Book Now</button>
        </div>
        <div style={boxStyle}>
          <div style={boxHeadingStyle}>
            Basic Full Body Checkup
          </div>
          <p style={boxParaStyle}>
           Number of test-53
          </p>
          <p style={boxParaStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, fermentum dolor quis, tempus magna.
          </p>
          <p>MRP{"  "}<span style={{textDecoration:'line-through'}}>₹ 10,000</span><span>{"        "}₹ 8,490</span></p>
          <button style={buttonStyle}>Book Now</button>
        </div>
        <div style={boxStyle}>
          <div style={boxHeadingStyle}>
            Basic Full Body Checkup
          </div>
          <p style={boxParaStyle}>
           Number of test-53
          </p>
          <p style={boxParaStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, fermentum dolor quis, tempus magna.
          </p>
          <p>MRP{"  "}<span style={{textDecoration:'line-through'}}>₹ 10,000</span><span>{"        "}₹ 8,490</span></p>
          <button style={buttonStyle}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
