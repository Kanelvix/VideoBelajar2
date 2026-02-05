import React from 'react'

function ProfileName(props) {
  return (
    <div className='flex items-center gap-2'>
      <img src={props.pfp} alt="" className='size-9 md:size-10 rounded-lg' />
      <div>
        <p className='font-medium text-[#222325]'>{props.name}</p>
        <p className='text-[#333333AD] text-sm'>{props.role} di <span className='font-bold'>{props.company}</span></p>
      </div>
    </div>
  )
}

export default ProfileName