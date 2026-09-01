"use client"
import React, { useEffect } from 'react'
import SearchBar from './../_components/SearchBar'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { BellDot } from 'lucide-react';

function Header(){
    const {user}=useUser();
    const router=useRouter();
    useEffect(()=>{
        console.log(user)
    },[user])
  return (
    <div className='ml-64 p-6 border-b flex items-center justify-between'>
      <SearchBar/>
      <div className='flex items-center gap-4'>
        <BellDot/>
        {!user?<button className='border-2 font-semibold text-purple-950 border-purple-900 rounded-md p-1 hover:bg-purple-700 hover:text-white' onClick={()=>router.push('/sign-in')}>Get Started</button>:
        <UserButton/>}
      </div>
    </div>
  )
}

export default Header
