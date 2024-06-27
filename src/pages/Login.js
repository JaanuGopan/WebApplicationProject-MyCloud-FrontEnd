import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./login.css";
import Navbarlogin from "../layout/Navbarlogin";
import ApiConstant from "../api/ApiConstant";

function Login() {
  let navigate = useNavigate();

  const [users, setusers] = useState([]);
  const [correctuser, setcorrectuser] = useState();
  const [loginUserName, setloginUserName] = useState();
  const [loginPassword, setloginPassword] = useState();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      ApiConstant.baseUrl + `normaluserapi/normalusers`
    );
    setusers(result.data);
  };

  const handleClick = () => {
    const foundUser = users.find(
      (user) =>
        user.userName === loginUserName && user.password === loginPassword
    );

    if (foundUser) {
      setcorrectuser(foundUser);
      navigate(`/userpage/${foundUser.id}`);
    } else {
      alert("Invalid username & password..!");
    }
    //navigate(`/login`);
  };

  return (
    <div className="loginbackground">
      <Navbarlogin />
      <div className="loginfield">
        <div className="logininnerfield rounded">
          <form>
            <div className="logininnerfieldinput">
              <label htmlFor="username">UserName</label>
              <input
                type="username"
                placeholder="Enter UserName"
                className="form-control"
                name="loginUserName"
                value={loginUserName}
                onChange={(e) => setloginUserName(e.target.value)}
              />
            </div>
            <div className="logininnerfieldinput">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                name="loginPassword"
                value={loginPassword}
                onChange={(e) => setloginPassword(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              />
              <label htmlFor="check" className="custom-input-lable">
                Remember me
              </label>
            </div>
            <div className="logininnerfieldbutton">
              <button className="btn2" onClick={handleClick}>
                <span>LogIn</span>
                <i></i>
              </button>
            </div>
          </form>
          <p className="para1 text-right m-2">
            Don't have account ,
            <a className="a-signup" href="/signup">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
