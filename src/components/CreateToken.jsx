import React from "react";
import Footer from "./Footer";
const CreateToken = () => {
  return (
    <>
      <section className="bg_img_faq pt-10">
        <div className=" container mx-w-[1176px] mx-auto px-3 ">
          <h2 className=" font-bold font-Raleway text-white text-center text-xxl">
            Create Token
          </h2>
          <div className=" max-w-[1014px] Stake_Your_Card createToken px-10 py-8 mx-auto mt-10">
            <button className=" font-bold font-Raleway text-md text-white bg-[#1C2F6F] px-10 py-2 rounded-[22px]">
              Step 2
            </button>
            <form action="">
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white pt-4">
                    Log ID
                  </p>
                  <input
                    type="text"
                    placeholder="xyn@explaim.com"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className="">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white  sm:pt-4">
                    Password
                  </p>
                  <input
                    type="password"
                    minlength="8"
                    className="bg_input outline-none text-[#092E8B] text-sm font-Raleway font-normal ps-4 py-[10px] w-full mt-3"
                  />
                </div>
              </div>
              <button className=" cmn_btn font-Raleway font-semibold text-xsm text-white mt-6">
                Log in
              </button>
            </form>
          </div>
          <div className=" max-w-[1014px] Stake_Your_Card createToken px-10 py-8 mx-auto mt-10">
            <button className=" font-bold font-Raleway text-md text-white bg-[#1C2F6F] px-10 py-2 rounded-[22px]">
              Step 2
            </button>

            <form action="">
              <div className=" grid grid-cols-1 sm:grid-cols-2">
                <div className="">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white pt-4">
                    Issuer
                  </p>
                  <input
                    type="text"
                    placeholder="testnettacy"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className=" sm:ms-11">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white  sm:pt-4">
                    Max Token Supply
                  </p>
                  <input
                    type="text"
                    placeholder="e.g. 50.0000"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className=" mt-8">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white">
                    Token Symbol
                  </p>
                  <input
                    type="text"
                    placeholder="e.g. $XMD or $BTC"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className="mt-8 sm:ms-11">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white">
                    Token name
                  </p>
                  <input
                    type="text"
                    placeholder="e.g Bitcoin,proton"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className=" mt-8">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white">
                    Precession
                  </p>
                  <input
                    type="text"
                    placeholder="www.Blastpad.com"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className="mt-8 sm:ms-11">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white">
                    URL (your company website)
                  </p>
                  <input
                    type="text"
                    placeholder="www.Blastpad.com"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className=" mt-8">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white">
                    Description
                  </p>
                  <input
                    type="text"
                    placeholder="e.g. $XMD or $BTC"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className="mt-8 sm:ms-11">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white">
                    Upload logo
                  </p>
                  <input
                    type="file"
                    id="avatar"
                    // name="avatar"
                    accept="image/png, image/jpeg"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
                <div className=" mt-8">
                  <p className=" font-Raleway font-normal text-sm opacity-70 text-white">
                    Email Address
                  </p>
                  <input
                    type="text"
                    placeholder="nickraja@example.com"
                    className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                  />
                </div>
              </div>
              <div className=" mt-8">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className=""
                />
                <label
                  for="vehicle1"
                  className=" font-Raleway font-semibold text-sm text-white ms-3"
                >
                  A flat fee of 1XPR will be change for creating your token as a
                  one time fee.
                </label>
              </div>
              <button className=" font-Raleway font-semibold text-md text-white mt-6 border rounded-[32px] px-8 py-4 border-white">
                Create Token
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default CreateToken;
