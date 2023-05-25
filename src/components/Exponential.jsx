import React from 'react'
import rocketwithmoon from "../assets/images/png/rocketwithmoon.png"
import circle from "../assets/images/png/circle.png"
import globe1 from "../assets/images/png/globe1.png"

const Exponential = () => {
    return (
      <section className=" bg-primary bghero1 py-[50px] relative overflow-hidden">
        <div className="container mx-auto px-3">
          <div className=" grid grid-cols-2 py-[80px]">
            <div>
              <h3 className=" text-[#4377F8] text-sm  font-Raleway font-semibold mb-4">
                Exponentially grow your brand
              </h3>
              <h2 className=" text-white font-bold text-[70px] leading-[70px] mb-[70px]">
                The fastest way to launch your new project
              </h2>
              <button className=" cmn_btn text-white"> Learn more</button>
            </div>
            <div className=" ">
              <img src={rocketwithmoon} alt="rocketwithmoon" />
              <img
                className=" absolute top-[45%] right-[-65px]"
                src={circle}
                alt="bluecircle"
              />
              <img className=' absolute top-[10%]' src={globe1} alt="globe" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Exponential