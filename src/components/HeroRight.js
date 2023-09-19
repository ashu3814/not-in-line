import React from 'react';

import Vector1 from '../assets/images/Vector1.png';
import HeroImage from '../assets/images/HeroImage.png';

import  Img6Img from '../assets/images/Img6.png';
import  Img7Img from '../assets/images/Img7.png';
import  Img5Img from '../assets/images/Img5.png';
const SectionImg = () => {
  const sectionStyle = {
    width: '603px',
    height: '623px',
    top: '113px',
    marginTop: '115px',
    left: '774px',
  };

  const headingStyle = {
    width: '540px',
    height: '70px',
    top: '113px',
    left: '788px',
    fontFamily: 'Montserrat',
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '70px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'white',
  };

  const blueTextStyle = {
    color: '#138ED1',
  };

  const grayTextStyle = {
    color: '#333333',
  };

  const lineStyle = {
    width: '1px', 
    height: '2px',
    position: 'absolute',
    top: '223px', 
    left: '783px',
    background: '#008DD9', 
  };


  const Img7Style = {
    width: '166px',
    height: '89px',
    position: 'absolute',
    top: '265px',
    left: '893px',
  };

  const Img5Style = {
    width: '183px',
    height: '90px',
    position: 'absolute',
    top: '374px',
    left: '774px',
  };

  const Img6Style = {
    width: '183px',
    height: '89px',
    position: 'absolute',
    top: '484px',
    left: '885px',
  };

  const Img1Style = {
    width: '1079px',
    height: '265px',
    position: 'absolute',
    top: '797px',
    left: '181px',
  };
  return (
    <div>
      <div style={sectionStyle}>
        <h1 style={headingStyle}>
          <span style={blueTextStyle}>Best in class</span> <span style={grayTextStyle}>lab tests!</span>
        </h1>
        <div style={lineStyle}>
        <img src={Vector1}/>
          </div> 
      </div>
      <img src={HeroImage} alt="Hero Image" width="514" height="521" style={{ position: 'absolute', top: '215px', left: '863px' }} />
      <div style={Img7Style}><img src={Img7Img}/></div>
      <div style={Img5Style}><img src={Img5Img}/></div>
      <div style={Img6Style}><img src={Img6Img}/></div>
      
    </div>
  );
};

export default SectionImg;
