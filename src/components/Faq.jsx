import React from "react";
import Arrow from "../assets/images/png/Arrow.png";
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
  const acoordianHandler = (id) => {
    setAccordin(id);
    setToggle(true);
  };
  const [accordin, setAccordin] = useState(0);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="bg_img_faq py-10">
        <div className=" container max-w-[1176px] mx-auto px-3">
          {SliderDataValue.map((items, index) => {
            return (
              <FAQ
                key={index}
                question={items.headding}
                answer={items.par}
                open={index === 0 && true}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;

const FAQ = ({ question, answer, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div onClick={() => setIsOpen((prev) => !prev)}>
      <div className=" flex justify-between items-center cursor-pointer">
        <h2 className=" font-medium font-Raleway text-xl text-white ">
          {question}
        </h2>
        <img
          className={
            !isOpen
              ? " rotate-0 duration-500 ease-out"
              : " rotate-180 duration-500 ease-out"
          }
          src={Arrow}
          alt="Arrow"
        />
      </div>
      <p
        className={`text-white overflow-hidden duration-500 ease-out pt-4 max-w-[844px] ms-10  ${
          !isOpen && "h-0 duration-500 ease-out"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};
