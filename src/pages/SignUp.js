import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import Navbarsignup from "../layout/Navbarsignup";
import ApiConstant from "../api/ApiConstant";

function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });

  const { firstName, lastName, email, userName, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [allusers, setallusers] = useState();

  useEffect(() => {
    loadusers();
  }, []);
  const loadusers = async () => {
    const result = await axios.get(
      ApiConstant.baseUrl + `normaluserapi/normalusers`
    );
    setallusers(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let submit = true;
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.userName === "" ||
      user.password === ""
    ) {
      submit = false;
    }
    if (
      allusers.find(
        (alluser) =>
          alluser.userName === user.userName &&
          alluser.password === user.password
      )
    ) {
      submit = false;
    }
    if (submit) {
      await axios.post(ApiConstant.baseUrl + `normaluserapi/normalusers`, user);
      navigate("/login");
    } else {
      alert("Invalid Input..!");
    }
  };
  return (
    <div className="signupbackground">
      <Navbarsignup />
      <div className="signupfield">
        <div className="signupinnerfield rounded">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="signupinnerfieldinput">
              <label htmlFor="firstname">FirstName</label>
              <input
                type="firstname"
                placeholder="Enter firstname"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="signupinnerfieldinput">
              <label htmlFor="lastname">LastName</label>
              <input
                type="lastname"
                placeholder="Enter lastname"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="signupinnerfieldinput">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="signupinnerfieldinput">
              <label htmlFor="username">UserName</label>
              <input
                type="username"
                placeholder="Enter UserName"
                className="form-control"
                name="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="signupinnerfieldinput">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="signupinnerfieldbutton">
              <button type="submit" className="btn2">
                <span>Signup</span>
                <i></i>
              </button>
            </div>
          </form>
          <p className="text-right">
            Already have{" "}
            <a className="account" href="/login">
              account.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
