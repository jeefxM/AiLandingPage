import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "./Main";
import SmartContracts from "./SmartContracts";

export default function Home() {
  return (
    <div>
      <Main />
      <SmartContracts />
    </div>
  );
}
