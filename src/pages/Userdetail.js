import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../files/editfile.css";

export default function Userdetail() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [users, setusers] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });

  const { firstName, lastName, userName, password } = users;

  const onInputChange = (e) => {
    setusers({ ...users, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost:8080/normaluserapi/normalusers/${id}`
    );
    setusers(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      users.firstName === "" ||
      users.lastName === "" ||
      users.userName === "" ||
      users.password === ""
    ) {
      alert("Please enter the file name..!");
    } else {
      await axios.put("http://localhost:8080/normaluserapi/normalusers", users);
      navigate(`/userpage/${id}`);
    }
  };

  const deleteuser = (id) => {
    axios.delete(`http://localhost:8080/normaluserapi/normalusers/${id}`);
    navigate(`../`);
  };

  return (
    <div className="editfilebackground">
      <Navbar />
      <div className="editfilefield">
        <div className="editfileinnerfield rounded">
          <form onSubmit={(e) => onSubmit(e)}>
            <h3>Edit User</h3>
            <form>
              <nav className="editfileinnerfieldinput">
                <label htmlFor="filename">First Name</label>
                <input
                  className="form-control"
                  type={"text"}
                  placeholder="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => onInputChange(e)}
                />
              </nav>
              <nav className="editfileinnerfieldinput">
                <label htmlFor="lastname">Last Name</label>
                <input
                  className="form-control"
                  type={"text"}
                  placeholder="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                />
              </nav>
              <nav className="editfileinnerfieldinput">
                <label htmlFor="username">User Name</label>
                <input
                  className="form-control"
                  type={"text"}
                  placeholder="userName"
                  name="userName"
                  value={userName}
                  onChange={(e) => onInputChange(e)}
                />
              </nav>
              <nav className="editfileinnerfieldinput">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type={"text"}
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </nav>
            </form>
            <button type="submit" className="btn3">
              <span>Save</span>
              <i></i>
            </button>
            <button type="delete" className="btn3" onClick={deleteuser}>
              <span>Delete Account</span>
              <i></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
