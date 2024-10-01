import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import AppleLogo from "../assets/AppleLogo.svg";
import GooglePlayLogo from "../assets/GooglePlayLogo.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Page1({ nextPage, prevPage,page }) {
  const [text, setText] = useState("More Points");
  const [key, setKey] = useState(0); // Unique key for AnimatePresence
  const texts = ["more points", "more levels", "more money"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
      setKey((prevKey) => prevKey + 1); // Increment key to trigger animation
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
          <Navbar page={page}/>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[40px]">3</h1>
        <div className="flex gap-10 items-center mt-5">
          <button className="px-6 py-3 bg-black rounded-lg flex items-center">
            <img src={GooglePlayLogo} alt="AppleLogo" />
            <div className="flex flex-col justify-start items-start ms-3">
              <span className="text-[12px]">Get it On</span>
              <span className="poppins-bold">Google Play</span>
            </div>
          </button>
          <button className="px-6 py-3 bg-black rounded-lg flex items-center">
            <img src={AppleLogo} alt="AppleLogo" />
            <div className="flex flex-col justify-start items-start ms-3">
              <span className="text-[12px]">Download on the</span>
              <span className="poppins-bold">App Store</span>
            </div>
          </button>
        </div>
      </div>
      <div className="flex gap-3 absolute right-5 bottom-5 ">
        <button className="h-12 w-12 rounded-full text-[18px] bg-[#12122D] flex justify-center items-center">
          <FaArrowLeft onClick={prevPage} />
        </button>
        <button className="h-12 w-12 rounded-full text-[18px] bg-[#12122D] flex justify-center items-center">
          <FaArrowRight onClick={nextPage} />
        </button>
      </div>
    </div>
  );
}

export default Page1;
