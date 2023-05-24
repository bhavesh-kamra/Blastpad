import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <section className="bg_img_faq">
      <div className=" container max-w-[1176px] mx-auto px-3 pt-16">
        <div className="mx-auto w-full rounded-2xl p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <div className="SetupdropDwon py-4 px-5">
                  <Disclosure.Button className=" text-white">
                    <div className="">
                      <div className=" flex justify-between items-center">
                        <div className="">
                          <p className=" font-Raleway font-bold text-md py-2 px-10 bg-[#1D3279] rounded-[22px] mb-3 inline-block">
                            Step 1
                          </p>
                          <p className=" font-Raleway font-semibold text-sm">
                            What is your refund policy?
                          </p>
                        </div>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Do you offer technical support?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
}
