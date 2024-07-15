import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Center!
        </h1>
        <p>
          Welcome to the world's largest knowledge center for Cryptocurrency!
          Come see why we've been voted the world's rank #9th for the past 69
          years!
          <br />
          <br />
          Sign up now to learn more about the world of Cryptocurrency and
          explore <em>some</em> of our features!
        </p>
        {/* search */}
        <form>
          <input type="text" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
      {/* hero coin table */}
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>24H Change %</p>
          <p>Total MC</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
