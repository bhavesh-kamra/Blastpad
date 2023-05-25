import React from "react";
import StakeBlastpad from "./StakeBlastpad";
import StakeTokens from "./StakeTokens";
import StakeBlastpadBonus from "./StakeBlastpadBonus";
// import Footer from "./Footer";

const Staking = () => {
  return (
    <>
      <div className="stakeYourToken_bg_img">
        <StakeBlastpad />
        <StakeTokens />
      </div>
      <StakeBlastpadBonus />
    </>
  );
};

export default Staking;
