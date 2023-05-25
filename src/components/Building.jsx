import React from 'react'
import proton from "../assets/images/svg/proton.svg"

const Building = () => {
  return (
    <section className=" bg-primary">
      <div className="container  mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className=" mx-auto pb-8">
            <img
              className=" w-[513px] lg:h-[450px] h-[350px]"
              src={proton}
              alt="proton"
            />
          </div>
          <div className=" ps-5 text-center  md:text-start">
            <h2 className=" text-white font-Raleway text-xxl  font-bold mb-4   leading-[46px]">
              Building On The Proton Blockchain
            </h2>
            <p className=" text-white font-Raleway text-sm  font-normal opacity-75 mb-5">
              Proton is a blockchain platform that was designed to offer fast,
              scalable, and secure peer-to-peer transactions. It is built on top
              of the EOSIO software, which is known for its high transaction
              throughput and low latency.
            </p>
            <p className="text-white font-Raleway text-sm  font-normal opacity-75">
              Proton is specifically designed to cater to the needs of
              businesses and enterprises, providing them with a blockchain
              infrastructure that is capable of handling large volumes of
              transactions without compromising on speed or security. It aims to
              provide a seamless experience for users, allowing them to transact
              quickly and efficiently, without the need for intermediaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Building