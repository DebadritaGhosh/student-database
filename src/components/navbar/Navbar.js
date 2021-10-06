import React from "react";
// import { Link } from "react-router-dom";
// import { useFirebase } from "react-redux-firebase";
import Logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo" />
        </a>

        <div>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a href="#!" className="btn btn-primary mr-3">
                Add Student
              </a>
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
