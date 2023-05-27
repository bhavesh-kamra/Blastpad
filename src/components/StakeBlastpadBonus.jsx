import React from "react";
import blastpadman from "../assets/images/png/blastpadman.png";
import blur from "../assets/images/png/blur.png";


const StakeBlastpadBonus = () => {
  return (
    <section className=" bgblastpadbonus bg-[#030222] lg:pt-20 lg:pb-10 relative">
      <img
        className=" z-50 absolute top-0  left-0"
        src={blur}
        alt="blureffect"
      />
      <div className="container  mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className=" mx-auto pb-8 pt-8">
            <img className=" w-full" src={blastpadman} alt="proton" />
          </div>
          <div className=" ps-5 text-center  md:text-start pb-5 md:pb-0">
            <h2 className=" text-white font-Raleway text-[30px]  md:text-[35px] lg:text-[40px]  font-bold mb-4   leading-[46px]">
              BlastPad Bonus Pool
            </h2>
            <p className=" text-white font-Raleway text-[13px] sm:text-[14px] lg:text-[16px]  font-normal opacity-75 mb-5">
              Staking has become an increasingly popular way for investors to
              earn rewards on their cryptocurrency holdings. By locking up their
              funds to help validate transactions and maintain network security,
              stakers can earn additional cryptocurrency as a reward.
            </p>
            <p className="text-white font-Raleway text-[13px] sm:text-[14px] lg:text-[16px]   font-normal opacity-75">
              These bonus rewards can take many forms, such as higher staking
              rewards, access to exclusive features or services, or airdrops of
              new tokens. For example, some networks may offer higher staking
              rewards to investors who hold a certain amount of their native
              token or provide liquidity to the network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeBlastpadBonus;
