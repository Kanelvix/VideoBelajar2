import React from 'react'

function SocialMediaButtons(props) {
  return (
    <div className='flex gap-4'>
      {props.socialMedias.map((icon) => (
        <div key={icon.name} className='size-9 border-[1px] border-[#22232559] flex justify-center items-center rounded-full cursor-pointer hover:bg-[--border-color] duration-300 active:bg-[#2223250d]'>
          <img src={icon.img} alt="" />
        </div>
      ))}
    </div>
  )
}

export default SocialMediaButtons