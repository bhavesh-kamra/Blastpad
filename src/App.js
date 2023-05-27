import "./App.css";
import Staking from "./components/Staking";
import Token from "./components/Token";
import Airdrop from "./components/Airdrop";
import HomePage from "./components/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/token" element={<Token />} />
        <Route path="/airdrop" element={<Airdrop />} />
      </Routes>
    </>
  );
}

export default App;
