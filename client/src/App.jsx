import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { MyTokens } from "./pages/MyTokens";
import { Home } from "./pages/Home";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4002";

function App() {
  return (
    <>
      <nav className="mb-5">
        <ul className="flex gap-6 mt-2 text-white justify-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MyTokens">My Tokens</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyTokens" element={<MyTokens />} />
      </Routes>
    </>
  );
}

export default App;
