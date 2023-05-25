import React from 'react'
import rocketwithmoon from "../assets/images/png/rocketwithmoon.png"
import circle from "../assets/images/png/circle.png"
import globe1 from "../assets/images/png/globe1.png"
import rocket1 from "../assets/images/png/rocket1.png";
import whitecloud from "../assets/images/png/whitecloud.png";

const Exponential = () => {
    return (
      <section className=" bg-primary bghero1 py-[50px] relative overflow-hidden">
        <div className="container mx-auto px-3">
          <div className=" grid  grid-cols-1 lg:grid-cols-2 lg:py-[80px]">
            <div className=' lg:order-1 order-2 text-center lg:text-left'>
              <h3 className=" text-[#4377F8] text-sm   font-Raleway font-semibold mb-4">
                Exponentially grow your brand
              </h3>
              <h2 className=" text-white font-bold lg:text-[70px] sm:text-[60px] text-[40px] leading-[50px]  lg:leading-[70px] sm:leading-[65px] lg:mb-[70px] mb-10">
                The fastest way to launch your new project
              </h2>
              <button className=" cmn_btn text-white"> Learn more</button>
            </div>
            <div className=" order-1 mx-auto ">
              <img className='' src={rocketwithmoon} alt="rocketwithmoon" />
              <img
                className=" absolute top-[45%] right-[-65px] hidden  lg:block"
                src={circle}
                alt="bluecircle"
              />
              <img
                className=" absolute top-[10%] left-[45%] hidden  lg:block"
                src={globe1}
                alt="globe"
              />
              <img
                className=" absolute top-[8%] left-[60%] hidden  lg:block"
                src={rocket1}
                alt="rocket"
              />
              <div className=" relative">
                <img
                  className=" absolute bottom-10  z-10"
                  src={whitecloud}
                  alt="cloud"
                />
                <p className=" absolute bottom-20 left-11 text-[16px]  font-black text-black z-50">
                  Launch Your Project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Exponential