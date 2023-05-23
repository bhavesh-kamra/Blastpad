import React, { useState } from "react";
import logo from "../assets/images/svg/pagelogo.svg";
import wallet from "../assets/images/svg/wallet.svg";
import cross from "../assets/images/svg/cross.svg";

const MyNav = () => {
  const [first, setfirst] = useState(true);
  return (
    <section className=" bg-primary py-2">
      <div className="container max-w-[1170px] mx-auto px-3">
        <nav className=" flex justify-between relative">
          <div className=" flex items-center">
            <img src={logo} alt="" />
            <a className=" text-white ms-3 text-lg" href="#">
              BlastPad.io
            </a>
          </div>
          <ul
            className={
              first
                ? " flex gap-5 items-center hiddennav mobileview"
                : "flex gap-5 items-center  show mobileview"
            }
          >
            <li>
              <a className=" text-white  text-xsm" href="">
                Home
              </a>
            </li>
            <li>
              <a className=" text-white  text-xsm" href="">
                About Us
              </a>
            </li>
            <li>
              <a className=" text-white text-xsm" href="">
                Token AirDrop
              </a>
            </li>
            <li>
              <a className=" text-white text-xsm" href="">
                Token Staking
              </a>
            </li>
            <li className=" me-10">
              <a className=" text-white text-xsm" href="">
                Create a Token
              </a>
            </li>
            <button className=" text-white text-md  border border-[#3A4973] rounded-full py-2 px-4 bg-[#0D1E49]">
              Get into Touch
            </button>
            <div className=" flex cmn_btn">
              <img src={wallet} alt="wallet" />
              <p className=" text-white ms-3">Connect Wallet</p>
            </div>
            <img
              className="absolute  lg:hidden top-5 right-8 cursor-pointer"
              onClick={() => {
                setfirst(true);
              }}
              src={cross}
              alt="cross"
            />
          </ul>

          <div
            className="navbox flex  justify-center items-center  cursor-pointer lg:hidden"
            onClick={() => {
              setfirst(false);
            }}
          >
            <span className="navline"></span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default MyNav;
