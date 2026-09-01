import React from 'react'
import { EnrollCourse, PublishCourse } from '../../../../../_services'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

function EnrollmentSection({courseDetail,userCourse,course}) {
    const {user}=useUser();
    const router=useRouter();
    const enrollCourse=async()=>{
        if(user)
        {
        await EnrollCourse(courseDetail.id,user.primaryEmailAddress.emailAddress).then(async(resp)=>{
            console.log("EnrollCourseResp=>",resp);
            if(resp){
                await PublishCourse(resp?.createUserEnrollCourse?.id).then(result=>{
                    console.log(result);
                    if(result){
                      router.push('/view-course/'+courseDetail.id)
                    }
                })
            }
        })
    }
    else{
        router.push('/sign-in');
    }
    }

  return (
    <div>
        {userCourse?.courseId?
        <div className='mt-5 border rounded-r-lg p-2 text-center'>
        <h2 className='text-gray-700'>Continue Build Project, Access Source Code and Track your progress for free!</h2>
        <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700' onClick={()=> router.push('/view-course/'+courseDetail.id)}>Continue</button>
      </div>:null
        }
      {courseDetail.free&&!userCourse?.courseId? <div className='mt-5 border rounded-r-lg p-2 text-center'>
        <h2 className='text-gray-700'>Learn and Build Project, Access Source Code and Track your progress for free!</h2>
        <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700' onClick={()=>enrollCourse()}>Enroll Now</button>
      </div>
      : !userCourse?.courseId?<div className='mt-5 border rounded-r-lg p-2 text-center'>
        <h2 className='text-gray-700'>Buy this course, Source Code and Track your progress !</h2>
        <button className='p-2 w-full bg-pink-500 text-white rounded-lg text-[14px] mt-2 hover:bg-pink-700'>Buy Course for $4.99</button>
      </div>:null}

      <div className='mt-5 border rounded-r-lg p-2 text-center'>
        <h2 className='text-gray-700'>Buy Monthly membership and get access to all courses, Source Codes and Track your progress !</h2>
        <button className='p-2 w-full bg-red-500 text-white rounded-lg text-[14px] mt-2 hover:bg-red-700'>Buy Membership $9.99/Month</button>
      </div>
       

    </div>

    
  )
}

export default EnrollmentSection
