import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div lassName="hero">
        <h1>
          Largest <br /> Crypto Center!
        </h1>
        <p>
          Welcome to the world's largest learning center for Cryptocurrency!
          Come see why we've been voted rank #11 for the past 40 years (way
          before Crypto even existed including the person responsible making
          this webpage)
        </p>
        <form>
          <input type="text" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
