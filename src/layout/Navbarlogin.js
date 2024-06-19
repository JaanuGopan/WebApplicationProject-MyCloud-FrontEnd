import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo2.png";

export default function Navbarlogin() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo" />
          </a>
          <h3 className="heder-text">You Can Login Here</h3>
          <div>
            <Link className="btn2" to="/signup">
              <span>SignUp</span>
              <i></i>
            </Link>
            <Link className="btn2" to="/">
              <span>Home</span>
              <i></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
