import React from 'react'
import logo from "../assets/images/svg/pagelogo.svg"

const MyNav = () => {
  return (
    <section className=" bg-primary">
      <div className="container max-w-[1140px] mx-auto p-4">
        <nav className=" flex justify-between">
          <div className=" flex items-center">
            <img src={logo} alt="" />
            <a className=" text-white ms-3 text-lg" href="#">
              BlastPad.io
            </a>
          </div>
          <ul className=" flex gap-4 items-center">
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
            <li>
              <a className=" text-white text-xsm" href="">
                Create a Token
              </a>
            </li>
            <button className=" text-white text-md  border border-[#3A4973] rounded-full py-2 px-3 bg-[#0D1E49]">
              Get into Touch
                      </button>
                      <div>
                          
            </div>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default MyNav