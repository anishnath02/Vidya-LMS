"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { GetUserCourseList } from '../../../_services';
import CategoryItem from '../../_components/CategoryItem';

function Dashboard() {
    const {user}=useUser();
    const [userCourseList,setUserCourseList]=useState([]);

    useEffect(()=>{
        user?getUserCourse():null;
    },[user])

    const getUserCourse=async()=>{
        await GetUserCourseList(user.primaryEmailAddress.emailAddress).then(resp=>{
            if(resp)
              setUserCourseList(resp?.userEnrollCourses)
        })
    }
  return (
    <div>
       {user&&userCourseList? <>
      <h2 className='text-[20px] font-medium'>My Enrolled Courses</h2>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
        {userCourseList&&userCourseList.map((course,index)=>(
            <div key={index}>
                <CategoryItem course={course.courseList}/>
            </div>
        ))}
      </div>
      </>:
      <div className='flex justify-center items-center text-[25px] mt-20 text-red-700'>
        <h2>You don't have any Enrolled Courses...</h2>
      </div>}
    </div>
  )
}

export default Dashboard
