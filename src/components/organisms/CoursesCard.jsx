import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import CourseTitle from '../molecules/CourseTitle'
import ProfileName from '../molecules/ProfileName'
import RatingStars from '../molecules/RatingStars'
import Price from '../atoms/Price'

function CoursesCard(props) {
  return (
    <div className='p-4 md:p-5 bg-white border-[1px] border-[#3A35411F] flex flex-col gap-2 md:gap-4 rounded-lg md:min-w-96 md:min-h-[426px]'>
      <div className='flex items-center gap-3 md:gap-4 md:flex-col'>

        <div className='size-20 md:w-[21.5rem] md:h-48 flex justify-center items-center overflow-hidden rounded-lg'>
          <img src={props.img} alt="" className='size-full object-cover' />
        </div>

        <div className='flex flex-col flex-1 h-full justify-between'>
          <CourseTitle 
            title={props.title} 
            desc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." />
          <ProfileName pfp={props.pfp} name={props.name} role={props.role} company={props.company} />
        </div>

      </div>
      
      <div className='flex justify-between items-center'>
        <RatingStars />
        <Price price={props.price} />
      </div>
    </div>
  )
}

export default CoursesCard