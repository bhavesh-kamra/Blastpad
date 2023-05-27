import React from "react";
import { useRef } from "react";
import MetalDao from "../assets/images/png/metal.png";
import bitcoin from "../assets/images/png/Bitcoin.png";
import metaldollar from "../assets/images/png/metalDallor.png";
import present12 from "../assets/images/png/Parsent12.png";
import rocket from "../assets/images/png/rocket.png";
import Slider from "react-slick";
import rightArrow from "../assets/images/png/PresArrow.png";
import leftArrow from "../assets/images/png/nextArrow.png";
const OurActiveToken = () => {
  const slider = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <section className="bgactivetoken ">
        <div className=" container mx-auto px-3">
          <div className=" text-center pt-9 pb-6 mb-10">
            <h2 className=" font-Raleway text-[32px] text-white font-semibold">
              Our Active Token
            </h2>
          </div>

          <div className="relative">
            <img
              onClick={() => slider.current.slickPrev()}
              className=" absolute top-[-18%] left-0   xl:left-[-6%]    xl:top-[50%]"
              src={rightArrow}
              alt=""
            />
            <img
              onClick={() => slider.current.slickNext()}
              className=" absolute  top-[-18%]  right-0  xl:top-[50%] xl:right-[-6%]"
              src={leftArrow}
              alt="#"
            />
            <Slider ref={slider} {...settings}>
              <div className="px-2">
                <div className=" Stake_Your_Card p-3  h-full">
                  <div className=" flex ">
                    <img
                      src={MetalDao}
                      alt="MetalDao"
                      className="bg-[#262D57] px-2.5 py-2 rounded-lg tokenimg"
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
                  <div className=" mt-6 flex justify-between">
                    <button className=" w-full px-1 sm:px-[3px] py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[10px]  text-white rounded-[22px]">
                      Total raise 69k
                    </button>
                    <button className=" w-full mx-2 px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px]  text-white rounded-[22px]">
                      value 3.2M
                    </button>
                    <button className=" w-full px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px]  text-white rounded-[22px]">
                      Min allow$0
                    </button>
                  </div>
                  <img
                    src={present12}
                    alt="present12"
                    className=" mt-8 w-full"
                  />
                  <div className=" flex justify-between mt-3">
                    <p className=" font-Raleway font-normal text-xsm text-white ">
                      0/87,074 MECHA
                    </p>
                    <p className=" font-Raleway font-normal text-xsm text-white me-4">
                      10 BUSD
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button className="slider_btn font-Raleway font-semibold text-white text-sm px-10 py-3">
                      Active
                    </button>
                    <div className=" flex">
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
                <div className=" Stake_Your_Card p-3  h-full">
                  <div className=" flex ">
                    <img
                      src={bitcoin}
                      alt="bitcoin"
                      className="bg-[#262D57] px-2.5 py-2 rounded-lg tokenimg"
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
                  <div className=" mt-6 flex justify-between">
                    <button className=" w-full px-1 sm:px-[3px] py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[10px] text-white rounded-[22px]">
                      Total raise 69k
                    </button>
                    <button className=" w-full mx-2 px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      value 3.2M
                    </button>
                    <button className=" w-full px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      Min allow$0
                    </button>
                  </div>
                  <img
                    src={present12}
                    alt="present12"
                    className=" mt-8 w-full"
                  />
                  <div className=" flex justify-between mt-3">
                    <p className=" font-Raleway font-normal text-xsm text-white ">
                      0/87,074 MECHA
                    </p>
                    <p className=" font-Raleway font-normal text-xsm text-white me-4">
                      10 BUSD
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button className="slider_btn font-Raleway font-semibold text-white text-sm px-10 py-3">
                      Active
                    </button>
                    <div className=" flex">
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
                <div className=" Stake_Your_Card p-3 h-full ">
                  <div className=" flex ">
                    <img
                      src={metaldollar}
                      alt="metaldollar"
                      className="bg-[#262D57] px-2.5 py-2 rounded-lg tokenimg"
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
                  <div className=" mt-6 flex justify-between">
                    <button className=" w-full px-1 sm:px-[3px] py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[10px] text-white rounded-[22px]">
                      Total raise 69k
                    </button>
                    <button className=" w-full mx-2 px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      value 3.2M
                    </button>
                    <button className=" w-full px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      Min allow$0
                    </button>
                  </div>
                  <img
                    src={present12}
                    alt="present12"
                    className=" mt-8 w-full"
                  />
                  <div className=" flex justify-between mt-3">
                    <p className=" font-Raleway font-normal text-xsm text-white ">
                      0/87,074 MECHA
                    </p>
                    <p className=" font-Raleway font-normal text-xsm text-white me-4">
                      10 BUSD
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button className="slider_btn font-Raleway font-semibold text-white text-sm px-10 py-3">
                      Active
                    </button>
                    <div className=" flex">
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
                <div className=" Stake_Your_Card p-3  h-full">
                  <div className=" flex ">
                    <img
                      src={MetalDao}
                      alt="MetalDao"
                      className="bg-[#262D57] px-2.5 py-2 rounded-lg tokenimg"
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
                  <div className=" mt-6 flex justify-between">
                    <button className=" w-full px-1 sm:px-[3px] py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[10px] text-white rounded-[22px]">
                      Total raise 69k
                    </button>
                    <button className=" w-full mx-2 px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      value 3.2M
                    </button>
                    <button className=" w-full px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      Min allow$0
                    </button>
                  </div>
                  <img
                    src={present12}
                    alt="present12"
                    className=" mt-8 w-full"
                  />
                  <div className=" flex justify-between mt-3">
                    <p className=" font-Raleway font-normal text-xsm text-white ">
                      0/87,074 MECHA
                    </p>
                    <p className=" font-Raleway font-normal text-xsm text-white me-4">
                      10 BUSD
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button className="slider_btn font-Raleway font-semibold text-white text-sm px-10 py-3">
                      Active
                    </button>
                    <div className=" flex">
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
                <div className=" Stake_Your_Card p-3  h-full">
                  <div className=" flex ">
                    <img
                      src={MetalDao}
                      alt="MetalDao"
                      className="bg-[#262D57] px-2.5 py-2 rounded-lg tokenimg"
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
                  <div className=" mt-6 flex justify-between">
                    <button className=" w-full px-1 sm:px-[3px] py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[10px] text-white rounded-[22px]">
                      Total raise 69k
                    </button>
                    <button className=" w-full mx-2 px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      value 3.2M
                    </button>
                    <button className=" w-full px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      Min allow$0
                    </button>
                  </div>
                  <img
                    src={present12}
                    alt="present12"
                    className=" mt-8 w-full"
                  />
                  <div className=" flex justify-between mt-3">
                    <p className=" font-Raleway font-normal text-xsm text-white ">
                      0/87,074 MECHA
                    </p>
                    <p className=" font-Raleway font-normal text-xsm text-white me-4">
                      10 BUSD
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button className="slider_btn font-Raleway font-semibold text-white text-sm px-10 py-3">
                      Active
                    </button>
                    <div className=" flex">
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
                <div className=" Stake_Your_Card p-3  h-full">
                  <div className=" flex ">
                    <img
                      src={MetalDao}
                      alt="MetalDao"
                      className="bg-[#262D57] px-2.5 py-2 rounded-lg tokenimg"
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
                  <div className=" mt-6 flex justify-between">
                    <button className=" w-full px-1 sm:px-[3px] py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[10px] text-white rounded-[22px]">
                      Total raise 69k
                    </button>
                    <button className=" w-full mx-2 px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      value 3.2M
                    </button>
                    <button className=" w-full px-2 md:px-3 py-2 bg-[#12174C] font-Raleway font-normal text-[10px] sm:text-[11px] text-white rounded-[22px]">
                      Min allow$0
                    </button>
                  </div>
                  <img
                    src={present12}
                    alt="present12"
                    className=" mt-8 w-full"
                  />
                  <div className=" flex justify-between mt-3">
                    <p className=" font-Raleway font-normal text-xsm text-white ">
                      0/87,074 MECHA
                    </p>
                    <p className=" font-Raleway font-normal text-xsm text-white me-4">
                      10 BUSD
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button className="slider_btn font-Raleway font-semibold text-white text-sm px-10 py-3">
                      Active
                    </button>
                    <div className=" flex">
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
          <div className=" text-center py-7">
            <button className=" text-white text-[13px] sm:text-[16px]  border border-[#31355A] bg-[#0B0F37]  font-Raleway font-semibold px-6 sm:px-9 md:px-14 py-3 rounded-full">
              Show All Tokens Available to be Staked
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurActiveToken;
