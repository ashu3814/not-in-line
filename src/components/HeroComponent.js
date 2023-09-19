import React from "react";
import SubmitForm from "./SubmitForm";
import OfferSection from "./OfferSection";
import HeroRight from "./HeroRight";
import "./HeroComponent.css"; 
const HeroComponent = () => {
  const heroContainerStyle = {
    background: "linear-gradient(to bottom right, #138ED1 0%, #FFFFFF 100%)",
    paddingTop: "50px",
    paddingBottom: "50px",
  };

  const leftSectionStyle = {
    width: "100%", 
    borderRadius: "34px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 15px 0px #00000040",
    padding: "20px",
    border: "2px solid #ccc",
    marginTop: "100px", 
  };

  return (
    <div style={heroContainerStyle}>
      <div className="container">
        <div className="row">
         
          <div className="col-md-6">
            <form style={leftSectionStyle}>
              <SubmitForm />
            </form>

            <div className="col-md-6 d-none d-sm-block">
              <OfferSection />
            </div>
          </div>

         
          <div className="col-md-6 d-none d-sm-block">
            <div>
              <HeroRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
