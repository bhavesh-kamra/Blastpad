import React from "react";
import FooterLogo from "../assets/images/png/Footerlogo.png";
const Footer = () => {
  return (
    <>
      <section className=" bg-primary">
        <div className=" container max-w-[1140px] mx-auto px-3">
          <div className=" flex">
            <img src={FooterLogo} alt="FooterLogo" />
            <p className="">BlastPad.io</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
