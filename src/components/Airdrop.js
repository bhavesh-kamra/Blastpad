import React from "react";
import ChooseTheAirDrop from "./ChooseTheAirDrop";
import MyNav from "./MyNav";
import ClaimAirdrop from "./ClaimAirdrop";
import Footer from "./Footer";
import AirdropToken from "./AirdropToken";
const Airdrop = () => {
  return (
    <>
      <MyNav />
      <ClaimAirdrop />
      <AirdropToken />
      <ChooseTheAirDrop />
      <Footer />
    </>
  );
};

export default Airdrop;
