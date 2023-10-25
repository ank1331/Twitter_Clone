import React from "react";
import { HiSparkles } from "react-icons/hi2";
import Input from "./Input";
export default function Feed() {
  return (
    <div className="xl:ml-[370px] flex-grow  max-w-xl border-l border-r border-gray-200 h-full xl:min-w-[576px] sm:ml-[73px]">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto ">
          <HiSparkles />
        </div>
      </div>
      <Input/>
    </div>
  );
}
