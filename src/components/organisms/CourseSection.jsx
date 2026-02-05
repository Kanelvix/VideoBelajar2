import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import CoursesCard from './CoursesCard'
import CoursesGrid from './CoursesGrid'


function CourseSection() {
  return (
    <div className='w-full flex flex-col gap-3'>
      <SectionTitle 
        textAlign="left"
        heading="3"
        fontSize="text-2xl md:text-[2rem]"
        type="contents"
        title="Koleksi Video Pembelajaran Unggulan"
        desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
      />
      <CoursesGrid />
    </div>
  )
}

export default CourseSection