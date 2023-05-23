import React from "react";
import firstTumbe from "../assets/images/png/fist thumb.png";
import secTumbe from "../assets/images/png/sec. thumb.png";
import trdthumb from "../assets/images/png/trd. thumb.png";
const StakeBlastpad = () => {
  return (
    <>
      <section className=" bg-primary py-5 bg_img_Stake min-h-screen">
        <div className=" container max-w-[1176px] mx-auto px-3 flex flex-col ">
          <h2 className=" font-Raleway font-bold text-white text-3xl sm:text-xxl sm:leading-[60px] max-w-[683px] text-center mx-auto">
            Stake your Blastpad tokens for Bonus Pool Rewards
          </h2>
          <div className=" grid grid-cols-1 lg:grid-cols-2 pt-10 items-end justify-between">
            <div className=" text-center lg:text-start">
              <p className=" font-Raleway font-semibold text-white text-xl">
                We can have 3 levels of staking
              </p>
              <p className=" font-Raleway font-normal text-sm text-white pt-4 opacity-70 max-w-[396px] mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet consectetur. Nisi enim tellus quisque
                euismod feugiat sed vestibulum fermentum tempor.
              </p>
              <div className=" flex items-center pt-7 justify-center lg:justify-start">
                <p className=" font-Raleway font-semibold text-xxl text-white bg-secandary p-4 sm:py-7 sm:px-9 rounded-xl ">
                  1m
                </p>
                <p className=" font-Raleway font-semibold text-xxl text-white bg-secandary p-4 sm:py-7 sm:px-9  rounded-xl mx-6">
                  5m
                </p>
                <p className=" font-Raleway font-semibold text-xxl text-white bg-secandary p-4 sm:py-7 sm:px-9  rounded-xl ">
                  10m
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mx-auto lg:mx-0 translate-y-[32px] max-w-[100%] pt-7">
              <div className=" pt-0">
                <div className=" flex items-end">
                  <div className="">
                    <p className=" font-Raleway text-[#4377F8] sm:pb-4">
                      Bonus
                    </p>
                    <p className=" font-Raleway font-bold text-white text-3xl sm:text-xxl lg:text4xl xl:text-xxxl leading-9 sm:leading-[60px] ">
                      1%
                    </p>
                  </div>
                  <img
                    src={firstTumbe}
                    alt="firstTumbe"
                    className=" ms-2 sm:ms-4 max-w-[28px] sm:max-w-[100%] "
                  />
                </div>
                <p className=" font-Raleway font-semibold text-sm sm:text-lg text-white bg-[#4377F8] px-8 rounded-[22px] inline-block mt-3 lg:mt-5">
                  1m
                </p>
              </div>
              <div className=" translate-y-[-17px] mx-5 sm:mx-10 xl:mx-0">
                <div className=" flex items-end">
                  <div className="">
                    <p className=" font-Raleway text-[#4377F8] sm:pb-4">
                      Bonus
                    </p>
                    <p className=" font-Raleway font-bold text-white text-3xl sm:text-xxl lg:text4xl xl:text-xxxl leading-9 sm:leading-[60px]">
                      2%
                    </p>
                  </div>
                  <img
                    src={secTumbe}
                    alt="firstTumbe"
                    className=" ms-2 sm:ms-4 max-w-[38px] sm:max-w-[100%]"
                  />
                </div>

                <p className=" font-Raleway font-semibold text-sm sm:text-lg text-white bg-[#4377F8] px-8 inline-block rounded-[22px] mt-3 sm:mt-5">
                  5m
                </p>
              </div>
              <div className=" translate-y-[-35px]">
                <div className=" flex items-end">
                  <div className="">
                    <p className=" font-Raleway text-[#4377F8] sm:pb-4">
                      Bonus
                    </p>
                    <p className=" font-Raleway font-bold text-white text-3xl sm:text-xxl lg:text4xl xl:text-xxxl leading-9 sm:leading-[60px]">
                      3%
                    </p>
                  </div>
                  <img
                    src={trdthumb}
                    alt="trdthumb"
                    className=" ms-2 md:ms-4 max-w-[50px] sm:max-w-[100%]"
                  />
                </div>
                <p className=" font-Raleway font-semibold text-sm sm:text-lg text-white bg-[#4377F8] px-8 inline-block rounded-[22px] mt-3 sm:mt-5">
                  10m
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StakeBlastpad;
