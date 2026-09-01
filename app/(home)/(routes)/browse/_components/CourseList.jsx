"use client"
import React from 'react'
import Image from 'next/image'
import { Book, Link} from 'lucide-react'
import CategoryItem from '../../../_components/CategoryItem'


function CourseList({courses}) {
  return (
    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {courses.map((course,index)=>(
        // <Link href={'/course-preview/'+course.id} key={index}>
          
        // </Link>
        <CategoryItem course={course}/>        
      ))}
    </div>
  )
}

export default CourseList
