import React, { useLayoutEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Roadmap = () => {
  const { scrollYProgress } = useScroll();
  const lineRef = useRef(null);
  useLayoutEffect(() => {
    const height = document.documentElement.scrollHeight;
    lineRef.current.style.maxHeight = `${height}px`;
  }, []);
  return (
    <div
      className="min-h-screen bg-[#000010] bg-no-repeat bg-[center_bottom_-37rem]"
      style={{
        backgroundImage: "url('New.png')",
      }}
    >
      <motion.h2
        className="text-white text-5xl text-center pt-20"
        animate={{ x: [null, 100, 0] }}
      >
        Roadmap
      </motion.h2>
      <motion.div
        ref={lineRef}
        className="absolute bg-blue-800 w-10 h-0 origin-top-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
};

export default Roadmap;
