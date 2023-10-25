import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import axios from "axios";

export function MyTokens() {
  const [myTokens, setMyTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMongoCryptos = async () => {
    const response = await axios.get("/datos");
    // console.log(response.data);
    setMyTokens(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getMongoCryptos();
  }, [myTokens]);

  const handleClick = async (e) => {
    console.log(e.target.value);
    const cmc_rank = e.target.value;
    try {
      await axios.post("/remove", {
        cmc_rank,
      });
      console.log("Removed successful");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(myTokens);
  return (
    <>
      <h3 className="text-gray-500">My Tokens</h3>
      <Cards data={myTokens} loading={loading} handleClick={handleClick} />
    </>
  );
}
