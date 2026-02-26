import React from 'react'
import ActionBtn from '../atoms/ActionBtn'
import Price from '../atoms/Price'

function Products( {title, desc, price, mentor, role} ) {
  return (
    <tr className='border-t'>
      <td className='p-3 md:p-4'>
        <p className='text-[--dark-color] font-medium'>{title}</p>
        <p className='text-sm '>{desc}</p>
      </td>
      <td className='text-nowrap p-3 md:p-4'>
        <Price price={price} />
      </td>
      <td className='p-3 md:p-4'>
        <p className='font-medium'>{mentor}</p>
        <p className='text-[--secondary-color] text-sm'>{role}</p>
      </td>
      <td className='p-3 md:p-4'>
        <div className='flex gap-2'>
          <ActionBtn action="Edit" />
          <ActionBtn action="Delete" />
        </div>
      </td>
    </tr>
  )
}

export default Products