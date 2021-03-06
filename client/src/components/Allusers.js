import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import URL from "./Url";
import axios from "axios";
import Moment from "react-moment";
class Allusers extends Component {
  state = {
    users: [],
    loding: false,
  };

  fetchuser = async () => {
    this.setState({ loding: false });
    await axios
      .get(`${URL}/fetchusers`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log("uuu", data);
        if (data.data.length) {
          // console.log(data.data);
          this.setState({ users: data.data, loding: false, redirect: true });
        } else {
          this.setState({ users: [], loding: false });
        }
      })
      .catch((err) => {
        console.log("ffff", err);

        this.setState({ loding: false });
      });
  };
  remove = async (id) => {
    await axios
      .get(
        `${URL}/deleteuser/${id}`,

        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            auth: localStorage.getItem("auth"),
          },
        }
      )
      .then((data) => {
        console.log("uuu", data.data);
        this.componentDidMount();
        // if (data.data.length) {
        //   this.setState({ withdraw: data.data, loding: false, redirect: true });
        // }
      })
      .catch((err) => {
        console.log("ffff", err);

        // this.setState({ error: err.response.data.messege.msg, loding: false })
      });
  };
  componentDidMount() {
    this.fetchuser();
  }
  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">
            {" "}
            <a href="/">Chaincome</a>{" "}
          </div>
          <br />
          <br />
          <div className="list-group list-group-flush">
            <Link
              to="/dashboard"
              className="list-group-item list-group-item-action bg-light"
            >
              Dashboard
            </Link>
            <Link className="list-group-item list-group-item-action bg-light">
              <ul className="list-unstyled">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link  dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Manage Users
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <Link to="/alluser" className="dropdown-item">
                        All User
                      </Link>
                    </li>
                    <li>
                      <Link to="/userrequest" className="dropdown-item">
                        User Requests
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </Link>
            <Link className="list-group-item list-group-item-action bg-light">
              <ul className="list-unstyled">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link  dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Withdraw Manage
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <Link to="/allwithdraw" className="dropdown-item">
                        All Withdraws
                      </Link>
                    </li>
                    <li>
                      <Link to="/withdrawrequest" className="dropdown-item">
                        Withdraw Requests
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </Link>
            <Link className="list-group-item list-group-item-action bg-light">
              <ul className="list-unstyled">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link  dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Settings
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <Link to="/manageslider" className="dropdown-item">
                        Manage Slider
                      </Link>
                    </li>
                    <li>
                      <Link to="/managegreeting" className="dropdown-item">
                        Manage Gretting
                      </Link>
                    </li>
                    <li>
                      <Link to="/manageservices" className="dropdown-item">
                        Manage Services
                      </Link>
                    </li>
                    <li>
                      <Link to="manageportfolio" className="dropdown-item">
                        Manage Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to="/managebussiness" className="dropdown-item">
                        Manage Business
                      </Link>
                    </li>
                    <li>
                      <Link to="/managemission" className="dropdown-item">
                        Manage Mission
                      </Link>
                    </li>
                    <li>
                      <Link to="/managevission" className="dropdown-item">
                        Manage Vission
                      </Link>
                    </li>
                    <li>
                      <Link to="/manageteam" className="dropdown-item">
                        Manage Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/managefaq" className="dropdown-item">
                        Manage Faq
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </Link>
          </div>
        </div>
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></Link>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/">
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <h1 className="mt-4">All activate User here</h1>

            <table className="table">
              <thead>
                <th>S No</th>
                <th>Name</th>
                <th>Post Code</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Downlines</th>
                <th>Check</th>
                <th>Member SInce</th>
                <th>Action</th>
              </thead>
              <tbody>
                {this.state.users.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td data-label="S.No">{index + 1}</td>
                      <td data-label="Name">{data.fullname}</td>
                      <td data-label="Post Code">{data.postcode}</td>
                      <td data-label="Mobile Number">{data.mobile}</td>
                      <td data-label="Email">{data.email}</td>
                      <td data-label="Gender">{data.gender}</td>
                      <td data-label="Downlines">{data.myrefused}</td>
                      <td data-label="Check">
                        <a
                          className="dropdown-item"
                          href={`/profile/${data.username}`}
                        >
                          Details
                        </a>
                      </td>

                      <td data-label="Member SInce">
                        <Moment>{data.createdAt}</Moment>
                      </td>
                      <td data-label="Action">
                        <button
                          type="button"
                          onClick={() => this.remove(data._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Allusers;
