import React from 'react'
import CoursesCard from './CoursesCard'
import courses from '../../data/courses'

function CoursesGrid() {
  return (
    <section className='grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3 '>
      {courses.map((item) => (
        <CoursesCard 
          img={item.thumbnail}
          title={item.title}
          pfp={item.pfp}
          price={item.price}
          name={item.name}
          role={item.role}
          company={item.company}
        />
      ))}
    </section>
  )
}

export default CoursesGrid