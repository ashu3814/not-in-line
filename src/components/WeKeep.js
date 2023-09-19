import React from 'react';
import Vector2 from '../assets/images/Vector2.png';
import Accreditation from '../assets/images/Accreditation.png';
import './WeKeep.css'; 

export default function WeKeep() {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    position: 'relative',
  };

  const headingStyle = {
    fontFamily: 'Montserrat',
    fontSize: '48px',
    fontWeight: '600',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#333333',
  };

  const imageStyle = {
    width: '262px',
    height: '19px',
    border: '2px solid black',
  };

  const innerDivStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '30px auto', 
  };

  const containerStyleOuter = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const containerStyleInner = {
    height: '100px',
    borderRadius: '16px',
    background: '#138ED1',
    border: '1px solid #138ED1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '0em',
  };

  return (
    <div style={containerStyleOuter}>
      <section style={sectionStyle}>
        <div className='d-flex flex-sm-none'>
          <img src={Accreditation} alt="Accreditation" />
        </div>
        <h2 style={headingStyle}>
          We keep <span style={{ color: '#138ED1' }}>expanding!</span>
        </h2>
        <img src={Vector2} alt="Vector" style={imageStyle} />
        <div style={innerDivStyle}>
        <div style={containerStyleInner}>
            <p className='m-2'>5+</p>
            <p>Cities Present</p>
          </div>
          <div style={containerStyleInner}>
            <p className='m-2'>1000+</p>
            <p>Collections</p>
          </div>
          <div style={containerStyleInner}>
            <p className='m-2'>1000+</p>
            <p>Monthly tests</p>
          </div>
          <div style={containerStyleInner}>
            <p className='m-2 '>2200+</p>
            <p>Test menu</p>
          </div>
          <div style={containerStyleInner}>
            <p className='m-2'>5+</p>
            <p>Cities Present</p>
          </div>
        </div>
      </section>
    </div>
  );
}
