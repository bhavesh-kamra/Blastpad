import React from "react";
import Airplane_Img from "../assets/images/png/Airplane_Img.png";
import LineImg from "../assets/images/png/lineImg.png";
import LeftSideArrow from "../assets/images/png/leftsiderArrow.png";
import rightArrow from "../assets/images/png/rightsideArrow.png";
import Clouds from "../assets/images/png/clouds.png";
import bg_Launch from "../assets/images/png/bg_launch.png";

const LaunchYourProject = () => {
  return (
    <>
      <section className="py-10 lg:mb-20 relative">
  
        

        <img src={bg_Launch} alt="bg_Launch" className=" absolute z-[-1]" />
        <div className=" container max-w-[1140px] mx-auto px-3">
          <h2 className=" font-Raleway font-bold text-xxl text-white text-center">
            Launch Your Project
          </h2>
          <div className=" flex lg:justify-center sticky mt-7">
            <img
              src={Airplane_Img}
              alt="Airplane_Img.png"
              className=" text-center hidden md:inline-flex"
            />
          </div>
          <div className=" relative">
            <img
              src={LineImg}
              alt="LineImg.png"
              className=" absolute line_steup hidden md:inline-flex"
            />
            <img
              src={LeftSideArrow}
              alt="LeftSideArrow"
              className=" absolute hidden lg:inline-flex Arrow_Left"
            />
            <img
              src={LeftSideArrow}
              alt="LeftSideArrow"
              className=" absolute hidden lg:inline-flex Arrow_Left_2"
            />
            <img
              src={rightArrow}
              alt="rightArrow"
              className=" absolute hidden md:inline-block Arrow_Right"
            />
            <img
              src={rightArrow}
              alt="rightArrow"
              className=" absolute hidden md:inline-block Arrow_Right_3"
            />
            <img
              src={rightArrow}
              alt="rightArrow"
              className=" absolute hidden md:inline-block Arrow_Right_2"
            />
            <div className="w-full flex justify-end lg:justify-start mt-8 md:mt-0">
              <div className="createToken p-5 max-w-[700px] lg:max-w-[354px]">
                <h3 className=" font-Raleway font-bold text-lg text-white">
                  Token
                </h3>
                <p className=" font-Raleway font-normal text-sm text-white opacity-70 pt-2">
                  A token is a sequence of characters that represents a unit of
                  meaning or syntax in a programming language.
                </p>
                <button className=" font-Raleway font-semibold text-xsm text-white cmn_btn mt-4">
                  Read more
                </button>
              </div>
            </div>
            <div className=" w-full flex justify-end my-8 lg:my-0 ">
              <div className="createToken p-5 max-w-[700px] lg:max-w-[354px] ">
                <h3 className=" font-Raleway font-bold text-lg text-white">
                  Airdrop
                </h3>
                <p className=" font-Raleway font-normal text-sm text-white opacity-70 pt-2">
                  Airdrops are a marketing strategy used by cryptocurrency
                  projects to distribute tokens to a large number of people.
                </p>
                <button className=" font-Raleway font-semibold text-xsm text-white cmn_btn mt-4">
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full flex justify-end lg:justify-start">
              <div className="createToken p-5 max-w-[700px] lg:max-w-[354px]">
                <h3 className=" font-Raleway font-bold text-lg text-white">
                  Staking
                </h3>
                <p className=" font-Raleway font-normal text-sm text-white opacity-70 pt-2">
                  Staking is a process by which users hold cryptocurrency in a
                  wallet to support the operations of a blockchain network.
                </p>
                <button className=" font-Raleway font-semibold text-xsm text-white cmn_btn mt-4">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Clouds}
          alt="Clouds"
          className=" absolute Clouds_setup hidden lg:inline-block"
        />
      </section>
    </>
  );
};

export default LaunchYourProject;
