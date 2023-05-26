import React from "react";
import MetalDao from "../assets/images/png/metal.png";
import Bitcoin from "../assets/images/png/Bitcoin.png";
import metaldollar from "../assets/images/png/metalDallor.png";


import present12 from "../assets/images/png/Parsent12.png";
import rocket from "../assets/images/png/rocket.png";
import Slider from "react-slick";
const OurActiveToken = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section>
        <div className=" container max-w-[1176px] mx-auto px-3">
          <div className=" text-center py-6 mt-5">
            <h2 className=" font-Raleway text-[40px] text-white font-semibold">Our Active Token</h2>
          </div>

          <Slider {...settings}>
            <div className="px-2">
              <div className=" Stake_Your_Card p-4 ">
                <div className=" flex ">
                  <img
                    src={MetalDao}
                    alt="MetalDao"
                    className="bg-[#262D57] px-2.5 py-2 rounded-lg"
                  />
                  <div className=" ms-4">
                    <h2 className=" font-bold font-Raleway text-lg text-white">
                      Metal DAO
                    </h2>
                    <p className=" font-Raleway font-normal text-sm text-white opacity-70">
                      $METAL
                    </p>
                  </div>
                </div>
                <div className=" mt-6">
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Total raise 69k
                  </button>
                  <button className=" mx-2 px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    value 3.2M
                  </button>
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Min allow$0
                  </button>
                </div>
                <img src={present12} alt="present12" className=" mt-8" />
                <div className=" flex justify-between mt-3">
                  <p className=" font-Raleway font-normal text-xsm text-white ">
                    0/87,074 MECHA
                  </p>
                  <p className=" font-Raleway font-normal text-xsm text-white me-4">
                    10 BUSD
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button className="slider_btn font-Raleway font-semibold text-white text-sm px-12 py-3">
                    Active
                  </button>
                  <div className=" flex me-0">
                    <a href="#">
                      <img src={rocket} alt="rocate" />
                    </a>
                    <a
                      href="#"
                      className=" font-Inter font-medium text-sm text-white ps-2 "
                    >
                      BlastPad.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className=" Stake_Your_Card p-4">
                <div className=" flex ">
                  <img
                    src={Bitcoin}
                    alt="bitcoin"
                    className="bg-[#262D57] px-2.5 py-2 rounded-lg"
                  />
                  <div className=" ms-4">
                    <h2 className=" font-bold font-Raleway text-lg text-white">
                      Bitcoin
                    </h2>
                    <p className=" font-Raleway font-normal text-sm text-white opacity-70">
                      $BTC
                    </p>
                  </div>
                </div>
                <div className=" mt-6">
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Total raise 69k
                  </button>
                  <button className=" mx-2 px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    value 3.2M
                  </button>
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Min allow$0
                  </button>
                </div>
                <img src={present12} alt="present12" className=" mt-8" />
                <div className=" flex justify-between mt-3">
                  <p className=" font-Raleway font-normal text-xsm text-white ">
                    0/87,074 MECHA
                  </p>
                  <p className=" font-Raleway font-normal text-xsm text-white me-4">
                    10 BUSD
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button className="slider_btn font-Raleway font-semibold text-white text-sm px-12 py-3">
                    Active
                  </button>
                  <div className=" flex me-0">
                    <a href="#">
                      <img src={rocket} alt="rocate" />
                    </a>
                    <a
                      href="#"
                      className=" font-Inter font-medium text-sm text-white ps-2 "
                    >
                      BlastPad.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className=" Stake_Your_Card p-4">
                <div className=" flex ">
                  <img
                    src={metaldollar}
                    alt="MetalDao"
                    className="bg-[#262D57] px-2.5 py-2 rounded-lg"
                  />
                  <div className=" ms-4">
                    <h2 className=" font-bold font-Raleway text-lg text-white">
                      Metal Dollar
                    </h2>
                    <p className=" font-Raleway font-normal text-sm text-white opacity-70">
                      $XMD
                    </p>
                  </div>
                </div>
                <div className=" mt-6">
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Total raise 69k
                  </button>
                  <button className=" mx-2 px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    value 3.2M
                  </button>
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Min allow$0
                  </button>
                </div>
                <img src={present12} alt="present12" className=" mt-8" />
                <div className=" flex justify-between mt-3">
                  <p className=" font-Raleway font-normal text-xsm text-white ">
                    0/87,074 MECHA
                  </p>
                  <p className=" font-Raleway font-normal text-xsm text-white me-4">
                    10 BUSD
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button className="slider_btn font-Raleway font-semibold text-white text-sm px-12 py-3">
                    Active
                  </button>
                  <div className=" flex me-0">
                    <a href="#">
                      <img src={rocket} alt="rocate" />
                    </a>
                    <a
                      href="#"
                      className=" font-Inter font-medium text-sm text-white ps-2 "
                    >
                      BlastPad.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className=" Stake_Your_Card p-4">
                <div className=" flex ">
                  <img
                    src={Bitcoin}
                    alt="bitcoin"
                    className="bg-[#262D57] px-2.5 py-2 rounded-lg"
                  />
                  <div className=" ms-4">
                    <h2 className=" font-bold font-Raleway text-lg text-white">
                      Bitcoin
                    </h2>
                    <p className=" font-Raleway font-normal text-sm text-white opacity-70">
                      $BTC
                    </p>
                  </div>
                </div>
                <div className=" mt-6">
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Total raise 69k
                  </button>
                  <button className=" mx-2 px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    value 3.2M
                  </button>
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Min allow$0
                  </button>
                </div>
                <img src={present12} alt="present12" className=" mt-8" />
                <div className=" flex justify-between mt-3">
                  <p className=" font-Raleway font-normal text-xsm text-white ">
                    0/87,074 MECHA
                  </p>
                  <p className=" font-Raleway font-normal text-xsm text-white me-4">
                    10 BUSD
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button className="slider_btn font-Raleway font-semibold text-white text-sm px-12 py-3">
                    Active
                  </button>
                  <div className=" flex me-0">
                    <a href="#">
                      <img src={rocket} alt="rocate" />
                    </a>
                    <a
                      href="#"
                      className=" font-Inter font-medium text-sm text-white ps-2 "
                    >
                      BlastPad.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className=" Stake_Your_Card p-4">
                <div className=" flex ">
                  <img
                    src={MetalDao}
                    alt="MetalDao"
                    className="bg-[#262D57] px-2.5 py-2 rounded-lg"
                  />
                  <div className=" ms-4">
                    <h2 className=" font-bold font-Raleway text-lg text-white">
                      Metal DAO
                    </h2>
                    <p className=" font-Raleway font-normal text-sm text-white opacity-70">
                      $METAL
                    </p>
                  </div>
                </div>
                <div className=" mt-6">
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Total raise 69k
                  </button>
                  <button className=" mx-2 px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    value 3.2M
                  </button>
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Min allow$0
                  </button>
                </div>
                <img src={present12} alt="present12" className=" mt-8" />
                <div className=" flex justify-between mt-3">
                  <p className=" font-Raleway font-normal text-xsm text-white ">
                    0/87,074 MECHA
                  </p>
                  <p className=" font-Raleway font-normal text-xsm text-white me-4">
                    10 BUSD
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button className="slider_btn font-Raleway font-semibold text-white text-sm px-12 py-3">
                    Active
                  </button>
                  <div className=" flex me-0">
                    <a href="#">
                      <img src={rocket} alt="rocate" />
                    </a>
                    <a
                      href="#"
                      className=" font-Inter font-medium text-sm text-white ps-2 "
                    >
                      BlastPad.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className=" Stake_Your_Card p-4">
                <div className=" flex ">
                  <img
                    src={metaldollar}
                    alt="MetalDao"
                    className="bg-[#262D57] px-2.5 py-2 rounded-lg"
                  />
                  <div className=" ms-4">
                    <h2 className=" font-bold font-Raleway text-lg text-white">
                      Metal Dollar
                    </h2>
                    <p className=" font-Raleway font-normal text-sm text-white opacity-70">
                      $XMD
                    </p>
                  </div>
                </div>
                <div className=" mt-6">
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Total raise 69k
                  </button>
                  <button className=" mx-2 px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    value 3.2M
                  </button>
                  <button className=" px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
                    Min allow$0
                  </button>
                </div>
                <img src={present12} alt="present12" className=" mt-8" />
                <div className=" flex justify-between mt-3">
                  <p className=" font-Raleway font-normal text-xsm text-white ">
                    0/87,074 MECHA
                  </p>
                  <p className=" font-Raleway font-normal text-xsm text-white me-4">
                    10 BUSD
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button className="slider_btn font-Raleway font-semibold text-white text-sm px-12 py-3">
                    Active
                  </button>
                  <div className=" flex me-0">
                    <a href="#">
                      <img src={rocket} alt="rocate" />
                    </a>
                    <a
                      href="#"
                      className=" font-Inter font-medium text-sm text-white ps-2 "
                    >
                      BlastPad.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OurActiveToken;
