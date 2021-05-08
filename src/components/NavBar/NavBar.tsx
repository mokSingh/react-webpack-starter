import React from 'react';
import { Link } from 'react-router-dom';
import "@momentum-ui/web-components";
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="header">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
      <div className="avatar"> <md-avatar alt="avatar" title="Mohak Singh" size="20" type="active" src="../../images/mohak.png"></md-avatar></div>
    </header>
  );
};

export default NavBar;