import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  {
    /*/init with empty array api and default USD currency*/
  }
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  {
    /*fetch all coins from api in json not jason*/
  }
  const fetchAllCoins = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-fy74QBTALvabkR7epUgTC2St",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCoins(response))
      .catch((err) => console.error(err));
  };

  {
    /*useEffect to fetch all coins. execute again if currency gets updated*/
  }
  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  {
    /*create context value to pass to the provider*/
  }
  const contextValue = {
    allCoins,
    currency,
    setCurrency,
  };

  {
    /*return the provider with the value of the context*/
  }
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
