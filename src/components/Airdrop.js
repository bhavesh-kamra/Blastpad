import React from "react";
import ChooseTheAirDrop from "./ChooseTheAirDrop";
import MyNav from "./MyNav";
import ClaimAirdrop from "./ClaimAirdrop";
import Footer from "./Footer";

const Airdrop = () => {
  return (
    <>
      <MyNav />
      <ClaimAirdrop />
      <Airdrop />
      <ChooseTheAirDrop />
      <Footer />
    </>
  );
};

export default Airdrop;
