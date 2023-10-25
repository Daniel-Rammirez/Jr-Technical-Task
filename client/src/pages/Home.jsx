import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";

export function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "0cb61b43-fe49-42ce-8e3a-e030fb104f24",
          },
        }
      );
      const json = await response.json();
      setData(json.data.slice(0, 5));
      setLoading(false);
    } catch (ex) {
      // error
      console.log(ex);
    }
  };
  console.log(data);
  // function for register crypto in mongodb
  const registerCrypto = async (crypto) => {
    // console.log(crypto);
    const symbol = crypto.symbol;
    const slug = crypto.slug;
    const signal = crypto.signal;
    const cmc_rank = crypto.cmc_rank;
    const quote = crypto.quote;
    try {
      await axios.post("/register", {
        symbol,
        slug,
        signal,
        cmc_rank,
        quote,
      });
      console.log("Registration successful");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    console.log(e.target.value);
    const index = e.target.value;
    registerCrypto(data[index - 1]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="text-gray-500">Home</h2>
      <Cards loading={loading} data={data} handleClick={handleClick} />
    </>
  );
}
