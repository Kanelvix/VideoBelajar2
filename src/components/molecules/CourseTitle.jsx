import React from 'react'

function CourseTitle(props) {
  return (
    <div className='flex flex-col'>
      <p className='font-bold text-[--dark-color] text-base/5 md:text-lg'>{props.title}</p>
      <p className='hidden md:block font-medium'>{props.desc}</p>
    </div>
  )
}

export default CourseTitle