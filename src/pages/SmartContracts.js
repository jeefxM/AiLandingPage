import React from "react";
import Lottie from "lottie-react";
import contract from "public/contract.json";
import {
  Fade,
  Slide,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Zoom,
  Bounce,
} from "react-awesome-reveal";
import { AttentionSeeker } from "react-awesome-reveal";
import GitHub from "@mui/icons-material/GitHub";

const SmartContracts = () => {
  return (
    <div
      id="SmartContracts"
      className="min-h-screen bg-[#000010] snap-start flex flex-row items-center align-middle justify-center gap-10 px-56 max-lg:px-10 max-lg:flex-col"
    >
      <div className="">
        <AttentionSeeker
          effect={"pulse"}
          className="text-white text-5xl my-5 font-bold max-md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 max-md:mt-20">
            Smart contracts
          </p>
        </AttentionSeeker>
        <div className="text-white max-md:text-base">
          <AttentionSeeker effect={"pulse"}>
            <p>
              Smart contracts are an essential component of any blockchain-based
              ecosystem. They enable decentralized applications to operate
              autonomously and securely without the need for intermediaries.
            </p>
            <p>
              However, writing smart contracts can be a complex and
              time-consuming task that requires extensive knowledge of
              programming languages and blockchain technology.
            </p>
            <p>
              At our company, we are committed to simplifying the process of
              creating smart contracts by leveraging the power of AI. Our
              AI-powered smart contract platform is designed to generate secure
              and reliable contracts quickly and efficiently.
            </p>
            <p>
              We have trained our AI algorithms to understand the nuances of
              smart contract development, enabling it to produce code that is
              both readable and robust. Our AI-written smart contracts are
              scalable and can be easily integrated into any blockchain network.
              They are also securable, ensuring that your assets and
              transactions are protected from fraud and tampering.
            </p>
            <p>
              By using our platform, you can save time and resources while
              ensuring that your contracts are of the highest quality. Our
              motto, "A Fast Blockchain Scalable AI," reflects our commitment to
              providing our clients with the most innovative and effective
              solutions for their blockchain needs.
            </p>
            <p>
              With our AI-powered smart contract platform, you can trust that
              your contracts are in good hands. Contact us today to learn more
              about how we can help you leverage the power of AI for your smart
              contract needs.
            </p>

            <button class="bg-purple-500 p-3 mt-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex gap-2">
              <GitHub />
              Contracts
            </button>
          </AttentionSeeker>
        </div>
      </div>
      <Bounce>
        <Lottie
          animationData={contract}
          className=" duration-300 w-90 min-w-full "
        />
      </Bounce>
    </div>
  );
};

export default SmartContracts;
