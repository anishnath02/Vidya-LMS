"use client"
import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='flex justify-between mx-5 gap-5 m-5'>
        <div>
            <Image src='contact-image.avif' width={650} height={650}/>
        </div>
        <div className='border-2 gap-5 p-10 border-purple-700 rounded-lg hover:bg-red-50'>
            <h1 className='text-2xl text-center text-violet-900 font-bold'>Vidya</h1>
            <form id='contact-form' className=''>
                <div className="form-group p-3">
                <label htmlFor="name" className='text-lg text-red-900'>Name</label>
                <input type="text" className='border-2 rounded-lg mx-3 border-blue-500 form-control' />
                </div>
                <div className="form-group p-3">
                <label htmlFor="exampleInputEmail1" className='text-lg text-red-900'>Email address</label>
                <input type="email" className="border-2 form-control rounded-lg mx-3 border-blue-500" aria-describedby="emailHelp" />
                </div>
                <div className="form-group p-3">
                <label htmlFor="message" className='text-lg text-red-900'>Message</label>
                <textarea className="border-2 form-control rounded-lg mx-3 border-blue-500" rows="5"></textarea>
                </div>
                <div className='text-lg text-green-700 font-semibold'>
                    <h2>Send</h2>
                </div>
            </form>
        </div>
      {/* <form id="contact-form" method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form> */}
    </div>
  )
}

export default page
