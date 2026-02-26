import React from 'react'

function Price(props) {
  const formatPrice = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1) + "M";
    }

    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    }

    return num
  }

  return (
    <p className={`text-[--green-color] font-semibold ${props.fontSize}`}>{`Rp ${formatPrice(props.price)}`}</p>
  )
}

export default Price