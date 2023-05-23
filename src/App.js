import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Staking from "./components/Staking";
import Faq from "./components/Faq";
// import Faq from "./components/Faq";

function App() {
  return (
    <>
      {/* <MyNav /> */}
      <Faq />
      <Footer />
      <Staking />
    </>
  );
}

export default App;
