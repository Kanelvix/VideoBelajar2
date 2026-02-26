import React from 'react'
import Input from '../atoms/Input'

function ProductFormInput( {title, type, required, placeholder, value, onChange} ) {
  return (
    <div className={title==="Deskripsi" ? 'md:col-span-2' : ''}>
      <p className='text-[--dark-color]' >{title}<span className={`text-[--red-color] ${required ? '' : 'hidden'}`}> *</span></p>
      <Input type={type} required={required} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default ProductFormInput