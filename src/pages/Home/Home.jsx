import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);

  {
    /*useEffect to update displayCoins when allCoins gets updated*/
  }
  useEffect(() => {
    setDisplayCoins(allCoins);
  }, [allCoins]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest Crypto <br /> Resource Center
        </h1>
        <p>
          Welcome to the world's top leading knowledge center for all things
          cryptocurrency. Come see why we've been voted the 9th ranking exchange
          for the past few weeks!
          <br />
          <br />
          Sign up now to learn more about the world of cryptocurrency and
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
          <p>Coin</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p style={{ textAlign: "center" }}>24H Change %</p>
          <p className="market-cap">Marketcap</p>
        </div>

        {/*map through displayCoins to display each coin*/}
        {displayCoins.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>

            {/*coin name and symbol*/}
            <div>
              <img className="image-logo" src={item.image} alt="image-logo" />
              <p className="symbol">{item.name + " $" + item.symbol}</p>
            </div>

            {/*price*/}
            <p>
              {currency.symbol} {item.current_price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
