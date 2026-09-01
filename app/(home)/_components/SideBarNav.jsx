"use client"
import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import path from 'path'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

function SideBarNav() {
    const pathName=usePathname();
    const menuList=[
        {
            id:1,
            name:'Browse',
            icon:Search,
            path:'/browse'
            
        },
        {
            id:2,
            name:'Dashboard',
            icon:Layout,
            path:'/dashboard'
            
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
            
        },
        {
            id:4,
            name:'Contact',
            icon:Mail,
            path:'/contact'
            
        },
        
    ]
    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
        <div className='p-5 border-b z-50'>
            <Image src='/logo-no-background.png' alt='logo' width={130} height={100}></Image>
        </div>
        <div className='flex flex-col '>
            {menuList.map((item,index)=>(
                <Link href={item.path} key={index} className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-purple-600 hover:text-white cursor-pointer ${pathName==item.path?'bg-purple-100 font-semibold text-purple-900':null}`} onClick={()=>setActiveIndex(index)}>
                    <item.icon/>
                    <h2>{item.name}</h2>
                </Link>
            ))}
        </div>
        
        
    </div>
  )
}

export default SideBarNav
