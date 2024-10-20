// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/personal-info">
          Resume Builder
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/personal-info">
                Personal Info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/education">
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/experience">
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/preview">
                Preview
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
