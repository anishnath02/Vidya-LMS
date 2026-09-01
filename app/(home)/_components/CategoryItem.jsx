import { Book } from 'lucide-react'
import { SquarePlay } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function CategoryItem({course}) {
  return (
    <div>
      <div onClick={()=>window.location.href ='/course-preview/'+course.id} className='border rounded-lg p-2 cursor-pointer hover:border-purple-500'>
            <img src={course?.banner?.url}
            alt={course?.name}
            width={1000}
            height={500}
            className='rounded-lg'/>

            <div className='mt-2'>
              <h2 className='text-[18px] md:text-[16px] font-medium'>{course.name}</h2>
              <h2 className='text-gray-800 text-[13px]'>{course.author}</h2>
            </div>
            {course.totalChapters?  <div className='flex items-center gap-2 mt-2'>
              <Book className='h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1'/>
              <h2 className='text-[12px] text-gray-400'>{course?.totalChapters} Chapters</h2>
            </div>:<div className='flex items-center gap-2 mt-2'>
              <SquarePlay className='h-6 w-6 text-red-600 rounded-full bg-red-100 p-1'/>
              <h2 className='text-[12px] text-gray-400'>Watch on YouTube</h2>
            </div>}
            
            <h2 className='mt-2 text-[14px]'>{course.free?'Free':'Paid'}</h2>

            
        </div>
    </div>
  )
}

export default CategoryItem
