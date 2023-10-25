import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="data:image/jpeg;base64,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"
        className="h-11 w-11 cursor-pointer hover:brightness-95 rounded-full"
      />
      <div className="w-full divide-y divide-slate-200">
        <div>
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="2"
            placeholder="Whats Happening"
          />
        </div>
        <div className="flex items-center pt-2.5 justify-between mt-4">
          <div className="flex items-center">
            <BsEmojiSmile className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-200" />
            <HiOutlinePhotograph className="h-10 w-10 p-2 hoverEffect text-sky-500 hover:bg-sky-200" />
          </div>

          <button className="bg-blue-400 px-4 py-1.5 font-bold shadow-md hover:brightness-95 text-center text-white rounded-full disabled:opacity-50">
            {" "}
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
