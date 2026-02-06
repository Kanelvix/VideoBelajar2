import React from 'react'
import arrow from '../../assets/arrow.svg'

function FooterLinks(props) {
  return (
    <div className='flex items-center justify-between md:flex-col md:justify-start md:items-start gap-3'>
      <h4 className='font-bold'>{props.title}</h4>
      <ul className='hidden md:flex flex-col gap-3'>
        {props.links.map((item, i) => (
          <li key={i} 
            className='text-[--base-color] font-medium cursor-pointer
            hover:opacity-80 active:opacity-100
          '>
            {item}
          </li>
        ))}
      </ul>
      <div className='size-6 flex items-center justify-center cursor-pointer rounded-full md:hidden'>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default FooterLinks