import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  {
    /*search coin state*/
  }
  const [input, setInput] = useState("");

  {
    /*input handler to update input state*/
  }

  const inputHandler = (e) => {
    setInput(e.target.value);
    {
      /*if input is empty, display top 20 coins*/
    }
    if (e.target.value === "") {
      setDisplayCoins(allCoins);
    }
  };

  const searchHandler = async (e) => {
    event.preventDefault();
    {
      /*filter through allCoins to find coins that match the input*/
    }
    const coins = await allCoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    {
      /*update displayCoins with the filtered coins*/
    }

    setDisplayCoins(coins);
  };

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
          Welcome To <br /> Crypto Clique 🚀
        </h1>
        <p>
          Welcome to the world's largest knowledge center for all things
          cryptocurrency. Come see why we've been ranked the 9th leading trading
          exchange by The Food Network Channel for the past 10 years!
          <br />
          <br />
          Sign up now to explore and learn more about the world of
          cryptocurrency. Fully paid members have the opportunity to enjoy{" "}
          <em style={{ fontSize: "smaller" }}>some</em> of our features and
          benefits.
          <br />
          <br />
          <button className="signup-btn">
            <h3 className="signup">Sign up now!</h3>
          </button>
        </p>
        {/* search */}
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search coin..."
            required
          />
          {/*datalist dropdown of all coins api*/}
          <datalist id="coinlist">
            {allCoins.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      {/* hero coin table */}
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p className="coin">Coin</p>
          <p className="symbol-header">Symbol</p>
          <p>Price</p>
          <p className="price-change">24H Change</p>
          <p className=" price-change-percentage ">24H Change %</p>
          <p className="market-cap">Marketcap</p>
        </div>

        {/*map through displayCoins to display each coin*/}
        {displayCoins.slice(0, 20).map((item, index) => (
          <div className="table-layout " key={index}>
            <p>{item.market_cap_rank}</p>

            {/*coin name and symbol*/}
            <div>
              <img className="image-logo" src={item.image} alt="image-logo" />
              <p> {item.name}</p>
            </div>
            {/*symbol*/}
            <p className="symbol">${item.symbol}</p>
            {/*price*/}
            <p className="price">
              {currency.symbol}
              {Math.round(item.current_price * 100) / 100}
            </p>
            {/*24H change*/}
            <p className="price-change">
              {currency.symbol}
              {Math.floor(item.price_change_24h * 100).toLocaleString()}
            </p>
            {/*24H change %*/}
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.round(item.price_change_percentage_24h * 100) / 100}%
            </p>

            {/*marketcap*/}
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
