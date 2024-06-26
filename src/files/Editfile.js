import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./editfile.css";
import ApiConstant from "../api/ApiConstant";

export default function Editfile() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [files1, setFile] = useState({
    fileName: "",
    filePassword: "",
  });

  const { fileName, filePassword } = files1;

  const onInputChange = (e) => {
    setFile({ ...files1, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadFiles();
  }, []);
  const loadFiles = async () => {
    const result = await axios.get(ApiConstant.baseUrl + `fileapi/files/${id}`);
    setFile(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (files1.fileName === "") {
      alert("Please enter the file name..!");
    } else {
      await axios.put(ApiConstant.baseUrl + "fileapi/files", files1);
      navigate(`/userpage/${files1.userID}`);
    }
  };

  return (
    <div className="editfilebackground">
      <Navbar />
      <div className="editfilefield">
        <div className="editfileinnerfield rounded">
          <form onSubmit={(e) => onSubmit(e)}>
            <h3>Edit File</h3>
            <form>
              <nav className="editfileinnerfieldinput">
                <label htmlFor="filename">File Name</label>
                <input
                  className="form-control"
                  type={"text"}
                  placeholder="fileName"
                  name="fileName"
                  value={fileName}
                  onChange={(e) => onInputChange(e)}
                />
              </nav>
              <nav className="editfileinnerfieldinput">
                <label htmlFor="filePassword">File Password</label>
                <input
                  className="form-control"
                  type={"text"}
                  placeholder="filePassword"
                  name="filePassword"
                  value={filePassword}
                  onChange={(e) => onInputChange(e)}
                />
              </nav>
            </form>
            <button type="submit" className="btn3">
              <span>Save</span>
              <i></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
