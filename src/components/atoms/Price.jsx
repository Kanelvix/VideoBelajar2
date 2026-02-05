import React from 'react'

function Price(props) {
  return (
    <p className='text-[--green-color] font-semibold text-xl md:text-2xl'>{props.price}</p>
  )
}

export default Price