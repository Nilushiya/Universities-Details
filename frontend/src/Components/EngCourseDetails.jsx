import React from 'react'

const EngCourseDetails = ({course}) => {
    console.log("course  :" , course)
  return (
    <div className='engCourseDetails'>
           {course.length > 0 ? course[0].image_data : null }                                           
    </div>
  )
}

export default EngCourseDetails