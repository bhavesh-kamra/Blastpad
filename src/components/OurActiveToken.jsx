import React from "react";
import { useRef } from "react";
import MetalDao from "../assets/images/png/metal.png";
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
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <section className="">
        <div className=" container max-w-[1176px] mx-auto px-3 relative">
          <img
            onClick={() => slider.current.slickPrev()}
            className=" absolute left-[-65px] top-[40%]"
            src={rightArrow}
            alt=""
          />
          <img
            onClick={() => slider.current.slickNext()}
            className="ms-3 absolute right-[-65px] top-[40%] "
            src={leftArrow}
            alt="#"
          />
          <div className=" ">
            <Slider ref={slider} {...settings}>
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
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurActiveToken;
