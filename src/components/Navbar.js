import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/Logo.png";
import PlayLogo from '../assets/images/PlayLogo.png';

function Navbar() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "83px",
        padding: "10px",
        background: "#FFFFFF",
      }}
      className="navbar-container"
    >
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light justify-content-center"
        style={{
          background: "#FFFFFF",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" width="50" height="50" />
            <span
              style={{
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Not
            </span>
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
              }}
            >
              In
            </span>
            <span
              style={{
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Line
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                  <a className="nav-link" href="#">
                    Health conditions
                  </a>
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    Lab tests
                  </a>
                  <a className="nav-link" href="#">
                    Medicines
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-buttons d-none d-lg-block">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              className="btn btn-primary btn-sm"
              style={{
                marginRight: "10px",
                width: "113px",
                height: "35px",
                borderRadius: "4px",
                background: "#00486C",
                color: "white",
              }}
            >
              For Patients
            </button>
            <button
              className="btn btn-primary btn-sm"
              style={{
                marginRight: "10px",
                width: "113px",
                height: "35px",
                borderRadius: "4px",
                background: "#00486C",
                color: "white",
              }}
            >
              For Hospitals
            </button>
            <img
              src={PlayLogo}
              alt="Play Store"
              width="115"
              height="35"
              style={{
                borderRadius: "4px",
                marginLeft: "10px",
              }}
              className="playstore-logo "
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
