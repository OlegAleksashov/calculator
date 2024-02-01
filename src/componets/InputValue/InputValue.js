import React from 'react'
import './InputValue.css'

const InputValue = ({value, handler, title}) => {
  return (
    <div className='input'>
      <textarea id='output' className='field' cols={40} rows={12} value={value} onChange={handler} placeholder='0'/>
    </div>
  )
}

export default InputValue