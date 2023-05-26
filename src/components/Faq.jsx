import React from "react";
import Arrow from "../assets/images/png/Arrow.png";
import FagBgImg from "../assets/images/png/Faq_bg_img.png";
import { useState } from "react";
const SliderDataValue = [
  {
    headding: "Q1. What is a BlastPad.io?",
    par: "Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus eu est euismod pulvinar. Condimentum metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac lacus dolor rutrum in erat lobortis rhoncus volutpat arcu. ",
  },
  {
    headding: "Q2. How do I buy cryptocurrency?",
    par: "Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus eu est euismod pulvinar. Condimentum metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac lacus dolor rutrum in erat lobortis rhoncus volutpat arcu. ",
  },
  {
    headding: "Q3. How do I store my cryptocurrency?",
    par: "Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus eu est euismod pulvinar. Condimentum metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac lacus dolor rutrum in erat lobortis rhoncus volutpat arcu. ",
  },
  {
    headding: "Q4. Is cryptocurrency secure?",
    par: "Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus eu est euismod pulvinar. Condimentum metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac lacus dolor rutrum in erat lobortis rhoncus volutpat arcu. ",
  },
  {
    headding: "Q5. Can I use cryptocurrency to buy goods and services?",
    par: "Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus eu est euismod pulvinar. Condimentum metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac lacus dolor rutrum in erat lobortis rhoncus volutpat arcu. ",
  },
  {
    headding: "Q6. What is the current price of cryptocurrency?",
    par: "Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus eu est euismod pulvinar. Condimentum metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac lacus dolor rutrum in erat lobortis rhoncus volutpat arcu. ",
  },
  {
    headding: "Q7. Can I mine cryptocurrency?",
    par: "Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus eu est euismod pulvinar. Condimentum metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac lacus dolor rutrum in erat lobortis rhoncus volutpat arcu. ",
  },
];
const Faq = () => {
  const [isOpenId, setIsOpenId] = useState(0);

  const handleOpen = (id) => {
    if (id === isOpenId) {
      setIsOpenId(-1);
    } else {
      setIsOpenId(id);
    }
  };
  return (
    <>
      <section className="b g_img_faq py-10 relative">
        {/* <img
          src={FagBgImg}
          alt="FagBgImg"
          className=" absolute z-[-1] right-0 w-full top-0"
        /> */}
        <div className=" container max-w-[1176px] mx-auto px-3">
          <p className=" text-xxl font-Raleway font-semibold text-white pb-3 sm:pb-14 text-center sm:text-start">
            Frequently Asked Questions
          </p>
          {SliderDataValue.map((items, index) => {
            return (
              <FAQ
                key={index}
                question={items.headding}
                answer={items.par}
                open={isOpenId === index && true}
                id={index}
                handleOpen={handleOpen}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;

const FAQ = ({ question, answer, open = false, handleOpen, id }) => {
  // const [isOpen, setIsOpen] = useState(open);

  return (
    <div onClick={() => handleOpen(id)}>
      <div className=" flex justify-between items-center cursor-pointer">
        <h2 className=" font-medium font-Raleway  sm:text-xl text-white pt-4">
          {question}
        </h2>
        <img
          className={
            !open
              ? " rotate-0 duration-500 ease-out"
              : " rotate-180 duration-500 ease-out"
          }
          src={Arrow}
          alt="Arrow"
        />
      </div>
      <p
        className={`text-white overflow-hidden duration-500 ease-out pt-4 max-w-[844px] sm:ms-10 opacity-70 font-Raleway font-normal text-xs sm:text-sm  ${
          !open && " h-0 duration-500 ease-out"
        }`}
      >
        {answer}
      </p>
      {open && (
        <div className="h-[1px] bg-[#4377F8] max-w-[969px] sm:ms-10 mt-4 mb-7"></div>
      )}
    </div>
  );
};
