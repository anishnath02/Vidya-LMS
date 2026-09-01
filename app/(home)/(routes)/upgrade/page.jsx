"use client"
import React from 'react'

function page() {
  return (
    <div className='flex gap-10 m-10'>
      <div className='mt-5 border-2 border-gray-400 rounded-lg p-2 text-center'>
        <h2 className='text-gray-700'>Buy <b>Monthly</b> membership and get access to all courses, Source Codes and Track your progress ! <br />Subscribe to Vidya's <b>Monthly</b> Membership and access all our courses. Enhance your skills with expert-led lessons in technology, business, arts, and more. Learn at your own pace and elevate your knowledge with our comprehensive, flexible courses. <br />+ No Premium Courses <br />+ No Live session</h2>
        <button className='p-2 w-full bg-red-500 text-white rounded-lg text-[14px] mt-2 hover:bg-red-700'>Buy Membership $9.99/Month </button>
      </div>
      <div className='mt-5 border-2 border-gray-400 rounded-lg p-2 text-center'>
        <h2 className='text-gray-700'>Buy <b>Yearly</b> membership and get access to all courses, Source Codes and Track your progress ! <br />+Unlock unlimited learning potential with Vidya's yearly membership! <br />+Subscribe to Vidya's <b>Yearly</b> Membership and access all our courses. Enhance your skills with expert-led lessons in technology, business, arts, and more. Learn at your own pace and elevate your knowledge with our comprehensive, flexible courses. <br />+ <b>Premium Courses</b></h2>
        <button className='p-2 w-full bg-yellow-500 text-white rounded-lg text-[14px] mt-2 hover:bg-yellow-600'>Buy Membership $99.99/Year</button>
      </div>
    </div>
  )
}

export default page
