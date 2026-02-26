import React from 'react'
import Select from '../atoms/Select'

const options = [
  {
    label: "Bisnis",
    value: "bisnis"
  },
  {
    label: "Desain",
    value: "desain"
  },
  {
    label: "Pemasaran",
    value: "pemasaran"
  },
  {
    label: "Pengembangan Diri",
    value: "pengembanganDiri"
  },
]

function ProductFormSelect( {title, onChange} ) {
  return (
    <div>
      <p className='text-[--dark-color]'>{title}<span className='text-[--red-color]'> *</span></p>
      <Select options={options} onChange={onChange} />
    </div>
  )
}

export default ProductFormSelect