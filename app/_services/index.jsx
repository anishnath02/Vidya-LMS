import { request,gql } from "graphql-request"

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clvc7qz5k2y7b07waqxxfae42/master"

export const getCourseList=async()=>{
    const query=gql`
    query CourseList {
      courseLists {
        name
        description
        banner {
          url
        }
        free
        id
        totalChapters
        tag
        sourceCode
        author
      }
    }
    `

    const result= await request(MASTER_URL,query);
    return result;
}

export const getCourseById=async(id,userEmail)=>{
  const query=gql`
  query course {
    courseList(where: {id: "`+id+`"}) {
      chapter {
        ... on Chapter {
          id
          name
          chapterNumber
          video {
            url
          }
          youtubeUrl
        }
      }
      description
      name
      id
      free
      totalChapters
    }
    userEnrollCourses(where: {courseId: "`+id+`", userEmail: "`+userEmail+`"}) {
      courseId
      userEmail
      id
      completedChapter {
        ... on CompletedChapter {
          chapterId
        }
      }
    }
  }
  `

  const result= await request(MASTER_URL,query);
  return result;
}

export const EnrollCourse=async(courseId,userEmail)=>{
  const mutationQuery=gql`
  mutation EnrollCourse {
    createUserEnrollCourse(data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}) {
      id
    }
  }
  `

  const result= await request(MASTER_URL,mutationQuery);
  return result;
}

export const PublishCourse=async(id)=>{
  const mutationQuery=gql`
  mutation EnrollCourse {
    publishUserEnrollCourse(where: {id: "`+id+`"})
    {
      id
    }
  }  
  `
  const result= await request(MASTER_URL,mutationQuery);
  return result;
}


export const markChapterCompleted=async(recordId,chapterNumber)=>{
  const mutationQuery=gql`
  mutation MarkChapterComplete {
    updateUserEnrollCourse(
      data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+chapterNumber+`"}}}}}
      where: {id: "`+recordId+`"}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `

  const result= await request(MASTER_URL,mutationQuery);
  return result;
}

export const GetUserCourseList=async(userEmail)=>{
  const query=gql`
  query UserCourseList {
    userEnrollCourses(where: {userEmail: "`+userEmail+`"}) {
      courseList {
        banner {
          url
        }
        description
        name
        id
        free
        sourceCode
        tag
        totalChapters
        author
      }
    }
  }  
  `

  const result= await request(MASTER_URL,query);
  return result;
}



