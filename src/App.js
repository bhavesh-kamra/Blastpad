import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Staking from "./components/Staking";
import Building from "./components/Building";
import Exponential from "./components/Exponential";
// import Faq from "./components/Faq";

import Faq from "./components/Faq";
import StakeBlastpadBonus from "./components/StakeBlastpadBonus";
import AirdropToken from "./components/AirdropToken";
import Token from "./components/Token";
import Airdrop from "./components/Airdrop";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <>
      <MyNav />
      <Exponential />
      <Building />
      <StakeBlastpadBonus />
      <AirdropToken />
      {/* <Footer /> */}
      {/* <Staking /> */}
      {/* <MyNav /> */}
      <Footer />
      <HomePage />
      <Staking />
      <Token />
      <Airdrop />
    </>
  );
}

export default App;
