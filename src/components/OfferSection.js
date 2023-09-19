import React from 'react';

const OfferSection = () => {
  const containerStyle = {
    border: '1px solid #FFFFFF',
    width: '608px',
    height: '70px',
    top: '599px',
    left: '122px',
    position: 'absolute',
    color:'#ffffff'
  };
  const mainStyle = {
    width: '470px',
    height: '70px',
    borderRadius: '35px',
    border: '1px solid #FFFFFF',
    background: 'linear-gradient(0deg, #00486C, #00486C), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
  };

  const rupeeStyle = {
    width: '20px',
    height: '20px',
    top: '584px',
    left: '508px',

    color: '#FFFFFF', 
  };

  const textWrapperStyle = {
    width: '274px',
    height: '29px',
    top: '592px',
    left: '158px',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',

  };

  const overlapStyle = {
    width: '224px', 
    height: '68px',
    background: '#00A6FF',
    position: 'absolute',
    top: '600px',
    borderRadius: '34px',
    left: '536px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
  };
  
  const offStyle = {
    width: '103px',
    height: '24px',
    fontFamily: 'Inter',
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'right', 
  };
  
  

  const discountPriceStyle = {
    fontFamily: 'Inter',
    fontSize: '18px',
   
    textDecoration: 'line-through', 
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={mainStyle}>
          <p>
            Get a Full Body Checkup Now at
            <span style={rupeeStyle}>{" "}₹{" "}</span>
            <span style={discountPriceStyle}> 5,999</span>
            <span style={rupeeStyle}>{" "}₹{" "}</span>
            <span style={textWrapperStyle}> 999</span>
          </p>
        </div>
      </div>

     
      <div style={overlapStyle}>
      <p style={offStyle}>70% OFF</p>

      </div>
    </div>
  );
};

export default OfferSection;
