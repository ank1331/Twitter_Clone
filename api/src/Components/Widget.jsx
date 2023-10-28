import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

export default function Widget() {
  return (
    <div className='xl:w-[300px] hidden lg:inline ml-8 space-y-5'>
      <div className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50 '>
        <div className='flex p-3 bg-red-300 rounded-full items-center relative'>
        <AiOutlineSearch className='h-6 z-50 text-gray-500 w-6'/>
        <input className = "absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 bg-gray-100 focus:bg-white focus:shadow-lg" type="text" placeholder='Search Twitter'/>
        </div>
      </div>
    </div>
  )
}
