import React from 'react';
import {Link} from "react-router-dom";

const Navbar = props => {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
              aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <Link className="navbar-brand" to="/" style={{fontFamily: 'Audiowide', color: '#e6e6e6'}}>FraudAnalyzer</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;
