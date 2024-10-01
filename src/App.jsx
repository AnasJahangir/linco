import { useState } from "react";
import "./App.css";
import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";
import Page3 from "./components/Page3.jsx";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1); // Track direction: 1 for right, -1 for left

  // Page transition variants for right and left
  const pageVariants = {
    right: {
      initial: { opacity: 0, x: 100 }, // Slide in from the right
      animate: { opacity: 1, x: 0 }, // Center
      exit: { opacity: 0, x: -100 }, // Slide out to the left
    },
    left: {
      initial: { opacity: 0, x: -100 }, // Slide in from the left
      animate: { opacity: 1, x: 0 }, // Center
      exit: { opacity: 0, x: 100 }, // Slide out to the right
    },
  };

  const nextPage = () => {
    setDirection(1); // Moving right
    setPage((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const prevPage = () => {
    setDirection(-1); // Moving left
    setPage((prev) => (prev === 1 ? 3 : prev - 1));
  };
  return (
    <div className="poppins-regular pt-4 px-10">
      <div
        className={`h-[85vh] ${page == 1 && "bg-[#F15B39]"} ${
          page == 2 && "bg-[#12122D]"
        }  ${
          page == 3 && "bg-[#E6E7E8]"
        }   w-full rounded-2xl relative`}
      >
        <AnimatePresence mode="wait">
          {page === 1 && (
            <motion.div
              key="page1"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={
                direction === 1 ? pageVariants.right : pageVariants.left
              }
              transition={{ duration: 0.5 }}
            >
              <Page1 nextPage={nextPage} prevPage={prevPage} />
            </motion.div>
          )}
          {page === 2 && (
            <motion.div
              key="page2"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={
                direction === 1 ? pageVariants.right : pageVariants.left
              }
              transition={{ duration: 0.5 }}
            >
              <Page2 nextPage={nextPage} prevPage={prevPage} />
            </motion.div>
          )}
          {page === 3 && (
            <motion.div
              key="page3"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={
                direction === 1 ? pageVariants.right : pageVariants.left
              }
              transition={{ duration: 0.5 }}
            >
              <Page3 nextPage={nextPage} prevPage={prevPage} page={page} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
