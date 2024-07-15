import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Pairs</li>
      </ul>

      {/* right-side */}
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="euro">EUR</option>
          <option value="jpy">JPY</option>
          <option value="gbp">GBP</option>
          <option value="aud">AUD</option>
          <option value="cad">CAD</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
