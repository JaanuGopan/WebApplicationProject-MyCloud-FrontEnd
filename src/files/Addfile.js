import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./addfile.css";
import ApiConstant from "../api/ApiConstant";
export default function Addfile() {
  let navigate = useNavigate();
  const { id } = useParams();
  // const [fileName1, setFileName] = useState();
  // const [fileType1, setFileType] = useState();
  // const [fileSize1, setFileSize] = useState();
  // const [modifiedDate1, setmodifiedDate] = useState();
  // const [filePassword1, setFilePassword] = useState();
  // const [userID1, setuserID] = useState();

  const [files1, setFile] = useState({
    fileName: "",
    fileType: "",
    fileSize: "",
    modifiedDate: "",
    userID: id,
    filePassword: "",
    imageUrl: "",
  });

  const onInputChange = (e) => {
    setFile({ ...files1, [e.target.name]: e.target.value });
  };

  const {
    fileName,
    fileType,
    fileSize,
    modifiedDate,
    userID,
    filePassword,
    imageUrl,
  } = files1;

  // const onInputChangefileName = (e) => {
  //   setfiles({ ...files1, fileName: e.target.value });
  // };
  // const onInputChangefileType = (e) => {
  //   setfiles({ ...files1, fileType: e.target.value });
  // };

  // const onInputChange = (e) => {
  //   setfiles({ ...files, [e.target.name]: e.target.value });
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (files1.fileName === "") {
      alert("Please add the file..!");
    } else {
      await axios.post(`${ApiConstant.baseUrl}fileapi/files`, files1);
      navigate(`/userpage/${id}`);
    }
  };

  const customcolor2 = "#6eff3e";

  return (
    <div className="addfilebackground">
      <Navbar />
      <div className="addfilefield">
        <div className="addfileinnerfield rounded">
          <form onSubmit={(e) => onSubmit(e)}>
            <h3>Add File</h3>
            <form>
              <div>
                {fileType.split("/")[0] === "image" && imageUrl && (
                  <img
                    src={imageUrl}
                    className="fileimage"
                    width={60}
                    height={40}
                    alt="aaa"
                  />
                )}
              </div>
              <nav className="addfileinnerfieldinput">
                <label className="label-text" htmlFor="filename">
                  File Name
                </label>
                <input
                  className="form-control"
                  type="filename"
                  placeholder="filename"
                  name="fileName"
                  value={fileName}
                  onChange={(e) => onInputChange(e)}
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
                  //onChange={(e) => onInputChangefileType(e)}
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
                  // onChange={(e) => onInputChange(e)}
                />
              </nav>
              <nav className="addfileinnerfieldinput">
                <label className="label-text" htmlFor="modifieddate">
                  Modified Date
                </label>
                <input
                  className="form-control"
                  type="modifieddata"
                  placeholder="modified date"
                  value={modifiedDate}
                  // onChange={(e) => onInputChange(e)}
                />
              </nav>
              <nav className="addfileinnerfieldinput">
                <label className="label-text" htmlFor="filePassword">
                  File Password
                </label>
                <input
                  className="form-control"
                  type="filePassword"
                  placeholder="file password"
                  value={filePassword}
                  name="filePassword"
                  onChange={(e) => onInputChange(e)}
                />
              </nav>
            </form>

            <form
              className="inputform"
              action=""
              onClick={() => document.querySelector(".fileinput").click()}
            >
              Browse
              <input
                type="file"
                name="file"
                className="fileinput"
                hidden
                onChange={({ target: { files } }) => {
                  files[0] &&
                    setFile({
                      files1,
                      fileName: files[0].name.split(".")[0],
                      fileType: files[0].type,
                      fileSize: files[0].size + " Bytes",
                      modifiedDate:
                        Date(files[0].lastModified).split(" ")[1] +
                        " " +
                        Date(files[0].lastModified).split(" ")[2] +
                        " " +
                        Date(files[0].lastModified).split(" ")[3],
                      userID: id,
                      imageUrl: URL.createObjectURL(files[0]),
                    });
                }}
              />
            </form>
            <button
              type="submit"
              className="btn3"
              style={{ "--clr": customcolor2 }}
            >
              <span>Submit</span>
              <i></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
