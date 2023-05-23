import React from "react";
import firstTumbe from "../assets/images/png/fist thumb.png";
import secTumbe from "../assets/images/png/sec. thumb.png";
import trdthumb from "../assets/images/png/trd. thumb.png";
const StakeBlastpad = () => {
  return (
    <div>
      <section className=" bg-primary py-5">
        <div className=" container max-w-[1140px] mx-auto px-3">
          <h2 className=" font-Raleway font-bold text-white text-xxl max-w-[683px] text-center mx-auto">
            Stake your Blastpad tokens for Bonus Pool Rewards
          </h2>
          <div className=" grid grid-cols-2 pt-10 items-end justify-between">
            <div className="">
              <p className=" font-Raleway font-semibold text-white text-xl">
                We can have 3 levels of staking
              </p>
              <p className=" font-Raleway font-normal text-sm text-white pt-4 opacity-70 max-w-[396px]">
                Lorem ipsum dolor sit amet consectetur. Nisi enim tellus quisque
                euismod feugiat sed vestibulum fermentum tempor.
              </p>
              <div className=" flex items-center pt-7">
                <p className=" font-Raleway font-semibold text-xxl text-white bg-secandary py-7 px-9 rounded-xl ">
                  1m
                </p>
                <p className=" font-Raleway font-semibold text-xxl text-white bg-secandary py-7 px-9 rounded-xl mx-6">
                  5m
                </p>
                <p className=" font-Raleway font-semibold text-xxl text-white bg-secandary py-7 px-9 rounded-xl ">
                  10m
                </p>
              </div>
            </div>
            <div className=" flex pt-1 justify-between items-center translate-y-[32px]">
              <div className="">
                <div className=" flex items-end">
                  <div className="">
                    <p className=" font-Raleway text-[#4377F8] pb-4">Bonus</p>
                    <p className=" font-Raleway font-bold text-white text-xxxl leading-[60px] ">
                      1%
                    </p>
                  </div>
                  <img src={firstTumbe} alt="firstTumbe" className=" ms-4" />
                </div>
                <p className=" font-Raleway font-semibold text-lg text-white bg-[#4377F8] px-8 rounded-[22px] inline-block mt-5">
                  1m
                </p>
              </div>
              <div className=" translate-y-[-17px]">
                <div className=" flex items-end">
                  <div className="">
                    <p className=" font-Raleway text-[#4377F8] pb-4">Bonus</p>
                    <p className=" font-Raleway font-bold text-white text-xxxl leading-[60px]">
                      2%
                    </p>
                  </div>
                  <img src={secTumbe} alt="firstTumbe" className=" ms-4" />
                </div>

                <p className=" font-Raleway font-semibold text-lg text-white bg-[#4377F8] px-8 inline-block rounded-[22px] mt-5">
                  5m
                </p>
              </div>
              <div className=" translate-y-[-35px]">
                <div className=" flex items-end">
                  <div className="">
                    <p className=" font-Raleway text-[#4377F8] pb-4">Bonus</p>
                    <p className=" font-Raleway font-bold text-white text-xxxl leading-[60px]">
                      3%
                    </p>
                  </div>
                  <img src={trdthumb} alt="trdthumb" className=" ms-4" />
                </div>
                <p className=" font-Raleway font-semibold text-lg text-white bg-[#4377F8] px-8 inline-block rounded-[22px] mt-5">
                  10m
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StakeBlastpad;
