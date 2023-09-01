import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";

const users = () => {
  return <div className="parent">
    <Sidebar/>
    <div className="head-title">
            <div className="left">
              <h1>Admin</h1>
              <ul className="breadcrumb">
                <li>User</li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <Button onClick={getAllUsers}>Get All User</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>List User</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {admin.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <p>{item.Username}</p>
                      </td>
                      <td>
                        <Button className="btn">
                          <MdDelete />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  </div>;
};

export default users;
