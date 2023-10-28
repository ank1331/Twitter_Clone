import React from 'react'

export default function User({article}) {
  return (
    <a href={article.url} target='_blank'>

        <div className='flex items-center justify-between px-2 py-4 space-x-1 hover:bg-gray-200 transtion duration-200'>

            <div className='space-y-0.5'>
                <h6 className='text-sm font-bold '>{article.title}</h6>
                <p className='text-xs font-medium text-gray-500'>{article.source.name}</p>
            </div>
            <img width ="70" className=" rounded-xl " src={article.urlToImage}/>
        </div>
    
    </a>
  )
}
