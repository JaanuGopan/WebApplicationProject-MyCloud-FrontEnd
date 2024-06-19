import React from "react";
import { Link } from "react-router-dom";
import Navbarhome from "../layout/Navbarhome";
import "./Home.css";
import welcome from "../assets/logo2.png";
function Home() {
  return (
    <div className="Homecustombackground">
      <Navbarhome />
      <div className="d-flex justify-content-center align-items-center m-1">
      <h3 className="welcome-text">Welcome To</h3>
        <img src={welcome} alt="Description of the image" className="myImage" />
      </div>

      <div className="login template d-flex justify-content-center align-items-center 100-w ">
        <h3 className="bodytext">Are you new to MyCloud </h3>

        <Link to="/signup" className="btn1">
          <span>GetStart</span>
          <i></i>
        </Link>
      </div>
      {/* <div className="40-w p-5 rounded bg-white"></div> */}
    </div>
  );
}

export default Home;
