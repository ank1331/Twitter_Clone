import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import News from './News';

export default function Widget() {

  const [arti, setarti] = useState({})
  const [arti_new, setarti_new] = useState(0)
  const [articlenum, setarticlenum] = useState(3)

  const readNews = async ()=>{
    const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
    const data =  await newsResults.json()
    setarti(data.articles)
    console.log(arti)
    }

    useEffect(()=>{
      readNews()

    },[arti_new])

    const loadpage = ()=>{
      setarti_new(arti_new+1)
    }


  return (
    <div className='xl:w-[300px] hidden lg:inline ml-8 space-y-5'>
      <div className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50 '>
        <div className='flex p-3 rounded-full items-center relative'>
        <AiOutlineSearch className='h-6 z-50 text-gray-500 w-6'/>
        <input className = "absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 bg-gray-100 focus:bg-white focus:shadow-lg" type="text" placeholder='Search Twitter'/>
        </div>
      </div>


      <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[85%]'>
        <h4 onClick = {loadpage} className='font-bold text-xl px-4'>What`s Happening</h4>


      {arti.slice(0,articlenum).map((article)=>(
        <News key={article.title} article = {article}/>))}
        <button onClick = {()=>setarticlenum(articlenum+3)}className='text-blue-300 px-4 pb-3 hover:text-blue-400'>Show More</button>
      </div>

    </div>
  )
}
