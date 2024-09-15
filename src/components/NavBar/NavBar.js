import React from 'react';
import './NavBar.css';  // Importing the CSS file for NavBar

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Tech.Care</h1>
      <div className="navbar-links">
        <a href="/overview">Overview</a>
        <a href="/patients">Patients</a>
        <a href="/schedule">Schedule</a>
        <a href="/message">Message</a>
        <a href="/transactions">Transactions</a>
      </div>
    </nav>
  );
}

export default NavBar;
