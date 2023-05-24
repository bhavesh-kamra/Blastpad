import React from "react";
import StakeBlastpad from "./StakeBlastpad";
import StakeTokens from "./StakeTokens";
import StakeBlastpadBonus from "./StakeBlastpadBonus";

const Staking = () => {
  return (
    <>
      <StakeBlastpad />
      <StakeTokens />
      <StakeBlastpadBonus />
    </>
  );
};

export default Staking;
