import React, { useState,useEffect } from "react";
import Navbar from "../layout/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./addfile.css";

export default function Addfile() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [files1, setFile] = useState({
    fileName: "",
    fileType: "",
    fileSize: "",
    modifiedDate: "",
    userID: id,
    imageUrl:"",
  });

  useEffect(() => {
    loadFiles();
  }, []);
  const loadFiles = async () => {
    const result = await axios.get(`http://localhost:8080/fileapi/files/${id}`);
    setFile(result.data);
  };




  const { fileName, fileType, fileSize, modifiedDate, userID,imageUrl } = files1;


  const customcolor2 = "#6eff3e";

  return (
    <div className="addfilebackground">
      <Navbar />
      <div className="addfilefield">
        <div className="addfileinnerfield rounded">
          <form>
            <h3>View File</h3>
            <form>
              <div>
                { (fileType.split("/")[0]==="image") && imageUrl && <img src={imageUrl} width={60} height={40} alt=""/>}
              </div>
              <nav className="addfileinnerfieldinput">
                <label className="label-text" htmlFor="filename">
                  File Name
                </label>
                <input
                  className="form-control"
                  type="filename"
                  placeholder="filename"
                  value={fileName}
                
                />
              </nav>
              <nav className="addfileinnerfieldinput">
                <label className="label-text" htmlFor="filetype">
                  File Type
                </label>
                <input
                  className="form-control"
                  type="filetype"
                  placeholder="filetype"
                  value={fileType}
              
                />
              </nav>
              <nav className="addfileinnerfieldinput">
                <label className="label-text" htmlFor="filesize">
                  File Size
                </label>
                <input
                  className="form-control"
                  type="filesize"
                  placeholder="filesize"
                  value={fileSize}
                 
                />
              </nav>
              <nav className="addfileinnerfieldinput">
                <label className="label-text" htmlFor="modifieddate">
                  Modified Date
                </label>
                <input
                  className="form-control"
                  type="modifieddata"
                  placeholder="modified data"
                  value={modifiedDate}
                  
                />
              </nav>
            </form>
            <Link
              type="submit"
              className="btn3"
              to={`/userpage/${files1.userID}`}
              style={{ "--clr": customcolor2 }}
            >
              <span>Back</span>
              <i></i>
            </Link>
            <a className="openfile" href={imageUrl}>Open</a>
          </form>
        </div>
      </div>
    </div>
  );
}
