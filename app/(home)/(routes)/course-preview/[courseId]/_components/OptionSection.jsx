import { Image } from 'lucide-react'
import React from 'react'

function OptionSection() {
    const optionsList=[
        {
            id:1,
            name:'Github',
            iconImage:'/github.png'
        },
        {
            id:2,
            name:'Demo',
            iconImage:'/demo.png'
        },
        {
            id:3,
            name:'YouTube',
            iconImage:'/youtube.png'
        },
    ]
  return (
    <div className='flex items-center gap-3'>
      {optionsList.map((option,index)=>(
        <div key={index} className='p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer'>
            <Image src={option.iconImage} width={30} height={30} alt='icons'/>
            <h2 className='text-[14px] text-gray-800'>{option.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default OptionSection
