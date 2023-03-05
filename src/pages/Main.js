import React from "react";
import Header from "./Header";

const Main = () => {
  return (
    <div
      className="bg-[#000000] min-h-screen duration-300 max-lg:bg-contain"
      style={{
        backgroundImage: "url('Looper3.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        transition: "visibility 2s linear 0.5s",
      }}
    >
      <Header />
      <main className="flex flex-col items-center pt-16 gap-5 max-md:mb-20">
        <div>
          <p className=" text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 max-md:text-4xl ">
            A Fast Blockchain{" "}
          </p>
        </div>
        <div>
          <p className="text-white text-6xl max-md:text-2xl">Scalable AI.</p>
        </div>
        <div className="pt-5">
          <p className="text-white max-w-[600px] text-xl max-md:text-sm max-md:mx-20">
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </p>
        </div>
        <div className="flex gap-3 ">
          <button
            className="text-white p-3 rounded-[40px] max-md:text-sm max-md:p-2"
            style={{
              background:
                "linear-gradient(#000000, #000000) padding-box, linear-gradient(to right, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5) border-box",
              border: "2px solid transparent",
            }}
          >
            Get Started
          </button>
          <button
            className="text-white p-3 rounded-[40px] max-md:text-sm max-md:p-2"
            style={{
              background:
                "linear-gradient(#000000, #000000) padding-box, #fff border-box",
              border: "2px solid transparent",
            }}
          >
            Ecosystems
          </button>
        </div>
      </main>
    </div>
  );
};

export default Main;
