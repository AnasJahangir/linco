import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import AppleLogo from "../assets/AppleLogo.svg";
import GooglePlayLogo from "../assets/GooglePlayLogo.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Page1({ nextPage, prevPage }) {
  const [text, setText] = useState("More Points");
  const [key, setKey] = useState(0); // Unique key for AnimatePresence
  const texts = ["more points", "more levels", "more money"];

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Increment key to trigger animation
      setText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: { opacity: 0.4, y: -50 }, // Start above
    animate: { opacity: 1, y: 0 }, // Enter to center
    exit: { opacity: 0.4, y: 50 }, // Exit to below
  };

  // Navbar animation variants
  const navbarVariants = {
    initial: { y: -100, opacity: 0 }, // Hidden above screen
    animate: { y: 0, opacity: 1 }, // Slide down into view
    exit: { y: -100, opacity: 0 }, // Slide up out of view
  };

  const buttonsVariants = {
    initial: { y: -20, opacity: 0 }, // Hidden above screen
    animate: { y: 0, opacity: 1 }, // Slide down into view
    exit: { y: 100, opacity: 0 }, // Slide up out of view
  };

  return (
    <div className="h-[85vh] relative">
      <AnimatePresence>
        {/* Navbar with animation */}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={navbarVariants}
          transition={{ duration: 1 }}
        >
          <Navbar />
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-center">
          Shop your favorite <br />
          local stores & get <br />
          <span className="poppins-bold"> & get</span>
          <AnimatePresence mode="wait">
            {/* AnimatePresence for transition */}
            <motion.span
              key={key} // Add unique key here to track changes
              className="poppins-bold ms-4 changble-text"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.5 }} // Smooth transition
            >
              {text}
            </motion.span>
          </AnimatePresence>
        </h1>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={buttonsVariants}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-10 items-center mt-5">
            <button className="px-6 py-3 bg-black rounded-lg flex items-center">
              <img src={GooglePlayLogo} alt="Google Play Logo" />
              <div className="flex flex-col justify-start items-start ms-3">
                <span className="text-[12px]">Get it On</span>
                <span className="poppins-bold">Google Play</span>
              </div>
            </button>
            <button className="px-6 py-3 bg-black rounded-lg flex items-center">
              <img src={AppleLogo} alt="Apple Logo" />
              <div className="flex flex-col justify-start items-start ms-3">
                <span className="text-[12px]">Download on the</span>
                <span className="poppins-bold">App Store</span>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
      <div className="flex gap-3 absolute right-5 bottom-5">
        <button
          className="h-12 w-12 rounded-full text-[18px] bg-[#FFFFFF1A] flex justify-center items-center"
          onClick={prevPage}
        >
          <FaArrowLeft />
        </button>
        <button
          className="h-12 w-12 rounded-full text-[18px] bg-[#FFFFFF1A] flex justify-center items-center"
          onClick={nextPage}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Page1;
