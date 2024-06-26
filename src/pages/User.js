import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import "./user.css";

export default function User() {
  const [files, setfiles] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadFiles();
  }, []);
  const loadFiles = async () => {
    const result = await axios.get(
      ApiConstant.baseUrl + `fileapi/files/users/${id}`
    );
    setfiles(result.data);
  };

  const deleteFile = async (id) => {
    await axios.delete(`http://localhost:8080/fileapi/files/${id}`);
    loadFiles();
  };

  let navigate = useNavigate();

  const navigatepage = (fileid, filepass) => {
    if (filepass === null || filepass === "") {
      navigate(`/viewfile/${fileid}`);
    } else {
      navigate(`/filepass/${fileid}`);
    }
  };

  const navigatepageedit = (fileid, filepass) => {
    if (filepass === null || filepass === "") {
      navigate(`/editfile/${fileid}`);
    } else {
      navigate(`/filepassedit/${fileid}`);
    }
  };

  const customcolor1 = "#6eff3e";
  const customcolor2 = "#FFFF00";
  const customcolor3 = "#ff1867";

  return (
    <div className="userbackground">
      <Navbar />
      <div className="container">
        <div className="addfile-div">
          <Link
            style={{ "--clr": customcolor1 }}
            className="btn3"
            to={`/addfile/${id}`}
          >
            <span>Add File</span>
            <i></i>
          </Link>
        </div>
        <div className="table-body">
          <table className="table1">
            <thead className="table-thead">
              <tr className="table-row1">
                <th className="table-heading" scope="col">
                  #
                </th>
                <th className="table-heading" scope="col">
                  File Name
                </th>
                <th className="table-heading" scope="col">
                  File Type
                </th>
                <th className="table-heading" scope="col">
                  Modified
                </th>
                <th className="table-heading" scope="col">
                  File Size
                </th>
                <th className="table-heading" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td className="table-data">{file.fileName}</td>
                  <td className="table-data">{file.fileType}</td>
                  <td className="table-data">{file.modifiedDate}</td>
                  <td className="table-data">{file.fileSize}</td>
                  <td className="table-data">
                    <button
                      className="userbtn"
                      style={{ "--clr": customcolor1 }}
                      onClick={() => navigatepage(file.id, file.filePassword)}
                    >
                      <span>View</span>
                      <i></i>
                    </button>

                    <button
                      className="userbtn"
                      style={{ "--clr": customcolor2 }}
                      onClick={() =>
                        navigatepageedit(file.id, file.filePassword)
                      }
                    >
                      <span>Edit</span>
                      <i></i>
                    </button>
                    <Link
                      className="userbtn"
                      style={{ "--clr": customcolor3 }}
                      onClick={() => deleteFile(file.id)}
                    >
                      <span>Delete</span>
                      <i></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
