import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

// ✅ Move outside component so it's not recreated on every render
const textToType = ["Frontend Developer", "Web Developer"];

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const typeEffect = setInterval(() => {
      const currentText = textToType[currentTextIndex];
      const nextIndex = (currentTextIndex + 1) % textToType.length;
      const slicedText = currentText.substring(0, displayText.length + 1);

      setDisplayText(slicedText);

      if (displayText === currentText) {
        setTimeout(() => {
          setDisplayText("");
          setCurrentTextIndex(nextIndex);
        }, 100);
      }
    }, 100);

    return () => clearInterval(typeEffect);
  }, [displayText, currentTextIndex]); // ✅ removed textToType

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-left">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Manasa Karisiddappa
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a {displayText}.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive Frontend web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
