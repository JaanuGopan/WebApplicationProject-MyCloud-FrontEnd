import React from "react";
import "./navbar.css";
import logo from "../assets/logo2.png";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { id } = useParams();
  let navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo" />
          </a>

          <div>
            <button
              className="btn2"
              onClick={() => navigate(`../userdetail/${id}`)}
            >
              <span>User</span>
              <i></i>
            </button>
            <Link className="btn2" to="/">
              <span>Logout</span>
              <i></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
