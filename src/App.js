import "./App.css";
import Staking from "./components/Staking";
import Token from "./components/Token";
import Airdrop from "./components/Airdrop";
import HomePage from "./components/HomePage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Staking" Component={Staking} />
        <Route path="/Token" Component={Token} />
        <Route path="/Airdrop" Component={Airdrop} />
      </Routes>
    </>
  );
}

export default App;
