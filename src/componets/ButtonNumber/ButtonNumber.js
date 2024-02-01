import React from 'react'

const ButtonNumber = ({title, handler}) => {
  return (
    <button className='button' onClick={() => handler(title)}>{title}</button>
  )
}

export default ButtonNumber