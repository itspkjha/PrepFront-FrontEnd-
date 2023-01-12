import React from "react";
import Image from "next/image";
import FunnyImage2 from "../assets/funny-guerilla2.webp"

const about = () => {
  return (
    <div className=" flex justify-center flex-col items-center">
      <div className="font-bold text-[48px]">APNE BAAP KO NHI PEHCHAANTA ?</div>
      <Image src={FunnyImage2}/>
    </div>
  );
};

export default about;
