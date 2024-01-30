import React from 'react'

const CalcHandlerBtn = ({title, handler}) => {
  return (
    <button className='button' onClick={handler}>{title}</button>
  )
}

export default CalcHandlerBtn