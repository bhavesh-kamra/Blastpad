import React from "react";
import FooterLogo from "../assets/images/png/Footerlogo.png";
import HomeBookLogo from "../assets/images/png/HomebloksLogo.png";
import tiwtter from "../assets/images/svg/twitter.svg";
import instgrame from "../assets/images/svg/Instagram.svg";
import Discord from "../assets/images/svg/discord.svg";
import footerSky from "../assets/images/png/footerSky.png";

const Footer = () => {
  return (
    <>
      <section className=" bg-primary pt-10 ">
        <div className=" container max-w-[1140px] mx-auto px-3">
          <div className=" sm:flex items-center justify-between">
            <div className=" text-center">
              <div className=" flex justify-center sm:justify-start">
                <img src={FooterLogo} alt="FooterLogo" />
                <p className=" text-3xl text-white font-Inter font-medium ms-2">
                  BlastPad.io
                </p>
              </div>
              <p className=" font-FiraSans text-sm text-white font-normal mt-2">
                © 2023 Blastpad.io, all rights reserved
              </p>
            </div>
            <div className=" md:flex mt-6 sm:mt-0">
              <img src={HomeBookLogo} alt="HomeBookLogo" className=" mx-auto" />

              <div className=" flex items-center justify-center sm:justify-start mt-2 sm:mt-0 sm:ms-4">
                <a
                  href="#tiwtter"
                  className=" hover:scale-110 ease-in-out duration-500"
                >
                  <img src={tiwtter} alt="tiwtter.svg" />
                </a>
                <a
                  href="#instgrame"
                  className=" mx-4  hover:scale-110 ease-in-out duration-500"
                >
                  <img src={instgrame} alt="instgrame.svg" />
                </a>
                <a
                  href="#tiwtter"
                  className=" hover:scale-110 ease-in-out duration-500"
                >
                  <img src={Discord} alt="Discord.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src={footerSky} alt="footerSky" className=" w-full" />
      </section>
    </>
  );
};

export default Footer;
