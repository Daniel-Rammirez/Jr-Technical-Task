import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import axios from "axios";

export function MyTokens() {
  const [myTokens, setMyTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMongoCryptos = async () => {
    const response = await axios.get("/datos");
    setMyTokens(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getMongoCryptos();
  }, []);

  const handleClick = async (e) => {
    const cmc_rank = e.target.value;
    try {
      await axios.post("/remove", {
        cmc_rank,
      });
      console.log("Removed successful");
      getMongoCryptos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3 className="text-gray-500">My Tokens</h3>
      <Cards data={myTokens} loading={loading} handleClick={handleClick} />
    </>
  );
}
