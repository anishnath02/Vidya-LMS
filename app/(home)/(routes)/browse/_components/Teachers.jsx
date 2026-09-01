import React from 'react'
import Image from 'next/image'

function Teachers() {
  return (
    <div className='mt-5'>
        <h2 className='border-2 text-[20px] font-semibold border-purple-800 rounded-lg p-3 hover:bg-purple-600 hover:text-white'>Our Educators</h2>
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <div className='border-2 p-5 border-purple-800 rounded-lg hover:bg-[#001021]'>
          <Image className='cursor-pointer' src='/teacher-11.png' alt='Loading..' width={300} height={400}/>
          <h2 className='font-semibold'>Mr. John Anderson</h2>
          <h3 className='font-light'>Fullstack Developer, Trainer at Vidya</h3>
          </div>
          <div className='border-2 p-5 border-purple-800 rounded-lg hover:bg-[#001021]'>
          <Image className='cursor-pointer' src='/teacher-11.png' alt='Loading..' width={300} height={400}/>
          <h2 className='font-semibold'>Mr. Michael Thompson</h2>
          <h3 className='font-light'>OS Developer, Trainer at Vidya</h3>
          </div>
          <div className='border-2 p-5 border-purple-800 rounded-lg hover:bg-[#240019]'>
          <Image className='cursor-pointer' src='/femaletea.png' alt='Loading..' width={300} height={400}/>
          <h2 className='font-semibold'>Ms. Emily Davis</h2>
          <h3 className='font-light'>Machine Learning Developer, ML Engineer</h3>
          </div>
          <div className='border-2 p-5 border-purple-800 rounded-lg hover:bg-[#001021]'>
          <Image className='cursor-pointer' src='/teacher-11.png' alt='Loading..' width={300} height={400}/>
          <h2 className='font-semibold'>Mr. David Roberts</h2>
          <h3 className='font-light'>Fullstack Developer, Trainer at Vidya</h3>
          </div>
        </div>
    </div>
    
  )
}

export default Teachers
