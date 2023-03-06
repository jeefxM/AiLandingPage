import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "./Main";
import SmartContracts from "./SmartContracts";
import Roadmap from "./Roadmap";

export default function Home() {
  return (
    <div>
      <Main />
      <SmartContracts />
      <Roadmap />
    </div>
  );
}
