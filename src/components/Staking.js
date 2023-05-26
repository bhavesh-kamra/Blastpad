import React from "react";
import StakeBlastpad from "./StakeBlastpad";
import StakeTokens from "./StakeTokens";
import StakeBlastpadBonus from "./StakeBlastpadBonus";
import MyNav from "./MyNav";
import OurActiveToken from "./OurActiveToken";

const Staking = () => {
  return (
    <>
      <MyNav />
      <OurActiveToken />
      <div className="stakeYourToken_bg_img">
        <StakeBlastpadBonus />
        <StakeBlastpad />
        <StakeTokens />
      </div>
    </>
  );
};

export default Staking;
