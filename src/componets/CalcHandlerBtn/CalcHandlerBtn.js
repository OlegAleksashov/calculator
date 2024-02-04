import React from 'react'
import './CalcHandlerBtn.css'

const CalcHandlerBtn = ({title, handler}) => {
  return (
    <button className='button' 
            onClick={() => {handler(title); console.log(title)}}
            //onClick={handler}
    >
       {title}
    </button>
  )
}

export default CalcHandlerBtn