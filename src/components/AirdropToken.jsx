import React from "react";
import airdroptoken from "../assets/images/png/airdroptoken.png";

const AirdropToken = () => {
  return (
    <section
      className=" bg-primary tokenbg1
"
    >
      <div className="container  mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className=" ps-5 text-center  md:text-start order-2 md:order-1">
            <h2 className=" text-white font-Raleway text-xxl  font-bold mb-4   leading-[46px]">
              Air Drop Tokens
            </h2>
            <p className=" text-white font-Raleway text-sm  font-normal opacity-75 mb-5">
              In a crypto AirDrop, tokens or coins are usually distributed for
              free to eligible users who meet certain criteria, such as holding
              a specific amount of another cryptocurrency, completing certain
              tasks, or signing up for a particular service. The tokens or coins
              are typically distributed directly to the users' wallets, and can
              be held or sold on exchanges
            </p>
            <p className="text-white font-Raleway text-sm  font-normal opacity-75">
              AirDrops can be a way for crypto projects to build a community,
              incentivize user engagement, and generate buzz around their
              project.
            </p>
          </div>
          <div className=" mx-auto pb-8 ps-5 order-1 md:order-2">
            <img className=" w-full" src={airdroptoken} alt="proton" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirdropToken;
