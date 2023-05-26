import React from "react";
import MetalDao from "../assets/images/png/metal.png";
import present12 from "../assets/images/png/Parsent12.png";
const OurActiveToken = () => {
  return (
    <>
      <section>
        <div className=" container max-w-[1176px] mx-auto px-3">
          <div className=" grid grid-cols-3">
            <div className="">
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
                <button className=" mx-3 px-3 py-2 bg-[#12174C] font-Raleway font-normal text-xsm text-white rounded-[22px]">
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
                <p className=" font-Raleway font-normal text-xsm text-white me-14">
                  10 BUSD
                </p>
              </div>
              <div className="">
                <button>Active</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurActiveToken;
