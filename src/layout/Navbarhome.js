import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "../assets/logo2.png"

export default function Navbarhome() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo"/>
          </a>

          <div>
            <Link className="btn1" to="/login">
              <span>Log In</span><i></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
