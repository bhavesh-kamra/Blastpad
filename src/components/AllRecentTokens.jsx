import React from "react";
import Bitcoin from "../assets/images/png/Bitcoin.png";
const AllRecentTokens = () => {
  return (
    <>
      <section>
        <div className=" container max-w-[1140px] mx-auto px-3">
          <div className=" grid grid-cols-3">
            <div className="Stake_Your_Card p-6">
              <div className=" flex items-center">
                <img
                  src={Bitcoin}
                  alt="Bitcoin"
                  className="bg-[#262D57] px-2.5 py-2 rounded-lg"
                />
                <div className=" ms-3">
                  <h2 className=" font-Raleway font-bold text-white text-lg">
                    Bitcoin
                  </h2>
                  <p className=" font-Raleway font-normal text-sm text-white opacity-70">
                    $METAL
                  </p>
                </div>
              </div>
              <div className=" flex justify-between mt-8">
                <p className=" font-Raleway font-normal text-xsm text-white ">
                  Total Value
                </p>
                <p className=" font-Raleway font-semibold text-xsm text-white me-4">
                  $1,003,235,34
                </p>
              </div>
              <div className=" flex justify-between mt-4">
                <a
                  href="#"
                  className=" font-Raleway font-medium text-sm text-white underline opacity-80"
                >
                  Stake your token...
                </a>
                <a
                  href="#"
                  className=" font-Raleway font-medium text-sm text-white underline opacity-80"
                >
                  Claim to air drop...
                </a>
              </div>
              <button className=" font-Raleway font-medium text-white text-sm slider_btn w-full py-3 mt-8">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllRecentTokens;
