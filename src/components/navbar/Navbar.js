import React from "react";
// import { Link } from "react-router-dom";
// import { useFirebase } from "react-redux-firebase";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <div>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/studentForm" className="btn btn-primary mr-3">
                Add Student
              </Link>
            </li>
            <li className="nav-item">
              <span className="ml-2 navbar-text px-3">Debadrita Ghosh</span>
              <span className="ml-2 navbar-text px-3">Profile</span>
              <span className="ml-2 navbar-text px-3">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
