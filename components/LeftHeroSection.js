import React from "react";

function LeftHeroSection() {
  return (
    <div className="flex flex-col w-[60%] p-20 gap-y-16 bg-red-200 text-[100px] font-semibold">
      <p className=" bg-transparent">Lorem Ipsum <br></br> <span className="text-primaryColor leading-0">Dolor Sit</span></p>
      <button
        type="button"
        className="w-[230px] h-[70px] inline-block px-6 py-2.5 bg-secondaryColor text-white font-medium text-[20px] rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
      >
        Explore Services
      </button>
    </div>
  );
}

export default LeftHeroSection;
