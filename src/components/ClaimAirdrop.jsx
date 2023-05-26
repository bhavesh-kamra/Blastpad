import React from "react";
import Bitcoin from "../assets/images/png/Bitcoin.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import rightArrow from "../assets/images/png/PresArrow.png";
import leftArrow from "../assets/images/png/nextArrow.png";
export const sliderData = [
  {
    Img: Bitcoin,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
    btn2: "  Claim AirDrop",
  },
  {
    Img: Bitcoin,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
    btn2: "  Claim AirDrop",
  },
  {
    Img: Bitcoin,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
    btn2: "  Claim AirDrop",
  },
  {
    Img: Bitcoin,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
    btn2: "  Claim AirDrop",
  },
  {
    Img: Bitcoin,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
    btn2: "  Claim AirDrop",
  },
];

const ClaimAirdrop = () => {
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
    ],
  };
  return (
    <>
      <section className=" relative">
        <img
          onClick={() => slider.current.slickPrev()}
          className=" absolute top-[20%] left-5"
          src={rightArrow}
          alt=""
        />
        <img
          onClick={() => slider.current.slickNext()}
          className=" absolute  top-[20%] right-5"
          src={leftArrow}
          alt="#"
        />
        <div className=" container max-w-[1140px] mx-auto px-3">
          <div className=" text-center pt-9 pb-6 mb-10">
            <h2 className=" font-Raleway text-[32px] text-white font-semibold">
              Claim AirDrop
            </h2>
          </div>
          <Slider ref={slider} {...settings}>
            {sliderData.map((value, index) => {
              return (
                <div className=" px-2">
                  <div key={index} className="Stake_Your_Card p-6">
                    <div className=" flex items-center">
                      <img
                        src={value.Img}
                        alt="Bitcoin"
                        className="bg-[#262D57] px-2.5 py-2 rounded-lg"
                      />
                      <div className=" ms-3">
                        <h2 className=" font-Raleway font-bold text-white text-lg">
                          {value.heading1}
                        </h2>
                        <p className=" font-Raleway font-normal text-sm text-white opacity-70">
                          {value.heading2}
                        </p>
                      </div>
                    </div>
                    <div className=" flex justify-between mt-8">
                      <p className=" font-Raleway font-normal text-xsm text-white ">
                        {value.Total}
                      </p>
                      <p className=" font-Raleway font-semibold text-xsm text-white me-4">
                        {value.TotalValue}
                      </p>
                    </div>
                    <div className=" flex justify-between mt-4">
                      <a
                        href="#"
                        className=" font-Raleway font-medium text-sm text-white underline opacity-80"
                      >
                        {value.YourToken}
                      </a>
                      <a
                        href="#"
                        className=" font-Raleway font-medium text-sm text-white underline opacity-80"
                      >
                        {value.YourTokenValue}
                      </a>
                    </div>
                    <div className=" flex justify-between ">
                      <div className="">
                        <button className=" font-Raleway font-medium text-white text-sm border border-white py-3 px-5 mt-8  rounded-[32px]">
                          {value.btn}
                        </button>
                      </div>
                      <div className="">
                        <button className="font-Raleway font-medium text-white text-sm slider_btn py-3 px-5 mt-8 block">
                          {value.btn2}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ClaimAirdrop;
