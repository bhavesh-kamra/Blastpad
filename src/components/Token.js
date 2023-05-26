import React from "react";
import CreateToken from "./CreateToken";
import MyNav from "./MyNav";
import AllRecentTokens from "./AllRecentTokens";

const Token = () => {
  return (
    <>
      <MyNav />
      <AllRecentTokens />
      <CreateToken />
    </>
  );
};

export default Token;
