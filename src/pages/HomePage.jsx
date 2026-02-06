import React from 'react'
import Hero from '../components/organisms/Hero'
import CourseSection from '../components/organisms/CourseSection'
import CTABanner from '../components/organisms/CTABanner'

function HomePage() {
  return (
    <main className='w-full mt-24 mb-7 md:mb-16'>
      <div className='mx-auto flex flex-col px-5 gap-6 md:gap-16 max-w-[75rem]'>
        <Hero />
        <CourseSection />
        <CTABanner />
      </div>
    </main>
  )
}

export default HomePage