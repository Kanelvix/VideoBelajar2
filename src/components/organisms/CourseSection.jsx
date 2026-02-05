import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import CoursesCard from './CoursesCard'
import CoursesGrid from './CoursesGrid'
import CategoryTabs from '../molecules/CategoryTabs'


function CourseSection() {
  return (
    <div className='w-full flex flex-col gap-6 md:gap-8'>
      <SectionTitle 
        textAlign="left"
        heading="3"
        fontSize="text-2xl md:text-[2rem]"
        type="contents"
        title="Koleksi Video Pembelajaran Unggulan"
        desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
      />
      <div className='w-full'>
        <CategoryTabs />
      </div>
      <CoursesGrid />
    </div>
  )
}

export default CourseSection