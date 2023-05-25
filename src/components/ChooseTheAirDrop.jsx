import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
// import { Button } from "@material-tailwind/react";
import Arrow from "../assets/images/png/samllArrow.png";
import Footer from "./Footer";
export default function Example() {
  return (
    <section className="bg_img_faq">
      <div className=" container max-w-[1176px] mx-auto px-3 pt-16 pb-10">
        <div className=" lg:flex gap-10">
          <div className=" lg:max-w-[399px] w-full relative">
            <div className=" blurChoose"></div>
            <div className=" flex items-center justify-between AirDropPush py-9 px-6 cursor-pointer ">
              <p className=" font-Raleway font-bold text-lg text-white">
                Air Drop Push
              </p>
              <img src={Arrow} alt="Arrow" className=" rotate-[270deg]" />
            </div>
            <div className=" flex items-center justify-between AirDropPush py-10 px-6 cursor-pointer mt-5">
              <p className=" font-Raleway font-bold text-lg text-white">
                Air Drop Claim
              </p>
              <img src={Arrow} alt="Arrow" className=" rotate-[270deg]" />
            </div>
          </div>
          <div className=" lg:max-w-[708px] rounded-2xl mt-5 lg:mt-0">
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="SetupdropDwon py-3 px-5">
                    <Disclosure.Button className=" text-white text-start w-full">
                      <button className="font-Raleway font-bold text-md py-2 px-10 bg-[#1D3279] rounded-[22px] mb-1 inline-block">
                        Step 1
                      </button>
                      <div className="flex justify-between px-4 relative dott_para">
                        <p className=" font-Raleway font-semibold text-sm mt-3">
                          Log into the Proton Account containing the token you
                          wish to Air Drop
                        </p>
                        <ChevronUpIcon
                          className={`${
                            open ? " rotate-[0deg]  ease-out duration-500" : ""
                          } h-5 w-5  text-white rotate-180 ease-out duration-500`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" ease-out duration-500">
                      <div className=" border my-7 mx-2 border-[#0A0E38]"></div>
                      <button className="cmn_btn font-Raleway font-semibold text-md text-white">
                        Log Into Wallet
                      </button>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="SetupdropDwon py-3 px-5 mt-5">
                    <Disclosure.Button className=" text-white text-start w-full">
                      <button className="font-Raleway font-bold text-md py-2 px-10 bg-[#1D3279] rounded-[22px] mb-1 inline-block">
                        Step 2
                      </button>
                      <div className="flex justify-between px-4 relative dott_para">
                        <p className=" font-Raleway font-semibold text-sm mt-3">
                          Choose the token you would like to Air Drop
                        </p>
                        <ChevronUpIcon
                          className={`${
                            open ? " rotate-[0deg]  ease-out duration-500" : ""
                          } h-5 w-5  text-white rotate-180 ease-out duration-500`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" ease-out duration-500">
                      <div className=" border my-7 mx-2 border-[#0A0E38]"></div>
                      <p className=" font-Raleway font-normal text-sm text-white opacity-70 mb-4">
                        Choose the token you would like to Air Drop
                      </p>

                      <select
                        class="form-select outline-none  font-Raleway font-bold text-sm text-white"
                        aria-label="Default select example"
                      >
                        <option selected>Air Drop Push</option>
                        <option value="1">1Day</option>
                        <option value="2">2Day</option>
                        <option value="3">3Day</option>
                      </select>
                      <p className=" font-Raleway font-normal text-sm text-white opacity-70 my-4">
                        Choose the total number of tokens to distribute to all
                        users combined
                      </p>
                      <input
                        type="text"
                        placeholder=""
                        className="bg_input outline-none text-white font-Raleway font-normal text-sm ps-4 py-[10px] w-full mt-3"
                      />
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="SetupdropDwon py-4 px-5 mt-4">
                    <Disclosure.Button className=" text-white text-start w-full">
                      <button className="font-Raleway font-bold text-md py-2 px-10 bg-[#1D3279] rounded-[22px] mb-3 inline-block">
                        Step 3
                      </button>
                      <div className="flex justify-between px-4 relative dott_para">
                        <p className=" font-Raleway font-semibold text-sm mt-3">
                          Choose one or both of the options below and select
                          from the drop down menus
                        </p>
                        <ChevronUpIcon
                          className={`${
                            open ? " rotate-[0deg]  ease-out duration-500" : ""
                          } h-5 w-5  text-white rotate-180 ease-out duration-500`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" ease-out duration-500">
                      <div className=" border my-7 mx-2 border-[#0A0E38]"></div>
                      <div className=" mb-3">
                        <form className="flex mb-1">
                          <div class="form_checkbook">
                            <input
                              type="checkbox"
                              id="javascript"
                              className="me-5"
                            />
                            <label for="javascript"></label>
                          </div>
                          <p className="ps-1 font-Raleway font-normal text-sm text-white opacity-70 mb-2">
                            Air Drop tokens to Proton accounts older than
                          </p>
                        </form>
                      </div>
                      <select
                        class="form-select outline-none mb-3 font-Raleway font-bold text-sm text-white"
                        aria-label="Default select example"
                      >
                        <option selected>1 Day</option>
                        <option value="1">1Day</option>
                        <option value="2">2Day</option>
                        <option value="3">3Day</option>
                      </select>
                      <div className=" mt-3">
                        <form className="flex mb-1">
                          <div class="form_checkbook">
                            <input type="checkbox" id="ff" className="me-5" />
                            <label for="ff"></label>
                          </div>
                          <p className="ps-1 font-Raleway font-normal text-sm text-white opacity-70 mb-2">
                            Air Drop tokens to Proton accounts older than
                          </p>
                        </form>
                      </div>
                      <div className=" flex gap-4">
                        <select
                          class="form-select outline-none mb-3 font-Raleway font-bold text-sm text-white"
                          aria-label="Default select example"
                        >
                          <option selected>1 Day</option>
                          <option value="1">1Day</option>
                          <option value="2">2Day</option>
                          <option value="3">3Day</option>
                        </select>
                        <select
                          class="form-select outline-none mb-3 font-Raleway font-bold text-sm text-white"
                          aria-label="Default select example"
                        >
                          <option selected>XPR</option>
                          <option value="1">1Day</option>
                          <option value="2">2Day</option>
                          <option value="3">3Day</option>
                        </select>
                      </div>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="SetupdropDwon py-4 px-5 mt-5">
                    <Disclosure.Button className=" text-white text-start w-full">
                      <button className="font-Raleway font-bold text-md py-2 px-10 bg-[#1D3279] rounded-[22px] mb-3 inline-block">
                        Step 4
                      </button>
                      <div className="flex justify-between px-4 relative dott_para">
                        <p className=" font-Raleway font-semibold text-sm mt-4">
                          Enter your message to be sent with the token air drop
                        </p>
                        <ChevronUpIcon
                          className={`${
                            open ? " rotate-[0deg]  ease-out duration-500" : ""
                          } h-5 w-5  text-white rotate-180 ease-out duration-500`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" ease-out duration-500">
                      <div className=" border my-7 mx-2 border-[#0A0E38]"></div>
                      <p className=" font-Raleway font-normal text-sm text-white opacity-70 SetupdropDwon px-5 py-3">
                        Lorem ipsum dolor sit amet consectetur. Augue euismod
                        purus imperdiet viverra. A at at scelerisque tortor
                        integer tristique arcu mauris eget. Dapibus scelerisque
                        fermentum aenean .
                      </p>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="SetupdropDwon py-4 px-5 mt-5">
                    <Disclosure.Button className=" text-white text-start w-full">
                      <button className="font-Raleway font-bold text-md py-2 px-10 bg-[#1D3279] rounded-[22px] mb-3 inline-block">
                        Step 5
                      </button>
                      <div className="flex justify-between px-4 relative dott_para">
                        <p className=" font-Raleway font-semibold text-sm mt-4">
                          Your status
                        </p>
                        <ChevronUpIcon
                          className={`${
                            open ? " rotate-[0deg]  ease-out duration-500" : ""
                          } h-5 w-5  text-white rotate-180 ease-out duration-500`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" ease-out duration-500">
                      <div className=" border my-7 mx-2 border-[#0A0E38]"></div>
                      <p className=" font-Raleway font-normal text-sm text-white opacity-70  ">
                        78,500 EASY tokens will be sent to the account
                        @airdroppro and qualified users will be able to claim at
                        a rate of 100 tokens per account to a total of 785
                        accounts
                      </p>
                      <button className="cmn_btn font-Raleway font-semibold text-md text-white mt-5">
                        Conform
                      </button>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
