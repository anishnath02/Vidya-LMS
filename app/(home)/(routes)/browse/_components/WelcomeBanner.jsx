import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-purple-300 rounded-xl p-5 mb-5'>
      <Image className='cursor-pointer' src='/Robot.png' alt='Loading..' width={100} height={100}/>
      
      <div>
        <h2>Welcome to <b>Vidya</b></h2>
        <h2>Explore, Learn and Build All Real Life Projects </h2>
      </div>
    </div>
  )
}

export default WelcomeBanner
