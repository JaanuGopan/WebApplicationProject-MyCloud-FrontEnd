import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Userdetail from "./pages/Userdetail";
import Addfile from "./files/Addfile";
import Editfile from "./files/Editfile";
import Viewfile from "./files/Viewfile"
import Filepassword from "./files/modal/Filepassword";
import Filepasswordedit from "./files/modal/Filepasswordedit";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/userpage" element={<User />}></Route>
          <Route path="/userdetail/:id" element={<Userdetail/>}></Route>
          <Route path="/addfile/:id" element={<Addfile />}></Route>
          <Route exact path="/userpage/:id" element={<User/>}/>
          <Route exact path="/editfile/:id" element={<Editfile/>}/>
          <Route exact path="/viewfile/:id" element={<Viewfile/>}/>
          <Route exact path="/filepass/:id" element={<Filepassword/>}/>
          <Route exact path="/filepassedit/:id" element={<Filepasswordedit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
