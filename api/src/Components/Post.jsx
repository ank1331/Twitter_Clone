import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";

export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* image */}
      <img className="mr-4 h-11 w-11 rounded-full" src={post.img} />
      {/* right Side */}
      <div>
        {/* Header */}

        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 whitespace-nowrap">
          <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
          <span className="text-sm sm:text-[15px]">@{post.username} - </span>
          <span className="text-sm sm:text-[15px] hover:underline"> {post.timeStamp}</span>
        </div>

          {/* post user info */}
          
          {/* dot icon */}
          <FiMoreHorizontal className="h-10 w-10 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200" />
        </div>

        {/* post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2 ">{post.text}</p>

        {/* post image */}
        <img className = "rounded-2xl mr-2" src={post.userImg} />

        {/* icons */}

        <div className=" flex justify-between text-gray-500 p-2">
          <BsChatDots className="h-10 w-10 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200" />
          <BsTrash3 className="h-10 w-10 hoverEffect p-2 hover:text-red-600 hover:bg-red-200" />
          <AiOutlineHeart className="h-10 w-10 hoverEffect p-2 hover:text-red-600 hover:bg-red-200" />
          <AiOutlineShareAlt className="h-10 w-10 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200" />
          <IoMdStats className="h-10 w-10 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200" />
        </div>
      </div>
    </div>
  );
}
