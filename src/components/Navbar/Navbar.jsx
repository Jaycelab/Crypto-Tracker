import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyChangeHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "euro":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "jpy":
        setCurrency({ name: "jpy", symbol: "¥" });
        break;
      case "gbp":
        setCurrency({ name: "gbp", symbol: "£" });
        break;
      case "aud":
        setCurrency({ name: "aud", symbol: "A$" });
        break;
      case "cad":
        setCurrency({ name: "cad", symbol: "C$" });
        break;
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Trade</li>
        <li>Profits</li>
        <li>Technical Analysis</li>
      </ul>

      {/* right-side */}
      <div className="nav-right">
        {/* currency change handler  */}
        <select onChange={currencyChangeHandler}>
          <option value="usd">USD</option>
          <option value="euro">EUR</option>
          <option value="jpy">JPY</option>
          <option value="gbp">GBP</option>
          <option value="aud">AUD</option>
          <option value="cad">CAD</option>
        </select>
        <button>
          Members <img src={arrow_icon} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
