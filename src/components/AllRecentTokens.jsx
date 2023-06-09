import React from "react";
import Bitcoin from "../assets/images/png/Bitcoin.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import rightArrow from "../assets/images/png/PresArrow.png";
import leftArrow from "../assets/images/png/nextArrow.png";
import metaDallor from "../assets/images/png/metalDallor.png";
import Meata from "../assets/images/png/metal.png";
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
  },
  {
    Img: metaDallor,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
  },
  {
    Img: Meata,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
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
  },
  {
    Img: metaDallor,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
  },
  {
    Img: Meata,
    heading1: "Bitcoin",
    heading2: "$BTC",
    Total: "Total Value",
    TotalValue: "$1,003,235,34",
    YourToken: "Stake your token...",
    YourTokenValue: "Claim to air drop...",
    btn: "View Profile",
  },
];

const AllRecentTokens = ({ value }) => {
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
      <section className=" relative py-5 pb-10">
        
        <div className=" container max-w-[1140px] mx-auto px-3">
          <div className=" text-center pt-9 pb-6 mb-10">
            <h2 className=" font-Raleway text-[32px] text-white font-semibold">
              All Recent Tokens
            </h2>
          </div>
          <div className=" relative">
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
              {sliderData.map((value, index) => {
                return (
                  <div className=" px-2">
                    <div
                      key={index}
                      value={value}
                      className="Stake_Your_Card p-6"
                    >
                      <div className=" flex items-center">
                        <div className="bg-[#262D57] w-[70px] h-[70px] flex items-center justify-center rounded-lg">
                          <img src={value.Img} alt="Bitcoin" />
                        </div>
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
                      <button className=" font-Raleway font-medium text-white text-sm slider_btn w-full py-3 mt-8">
                        {value.btn}
                      </button>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllRecentTokens;
