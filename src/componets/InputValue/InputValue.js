import React from 'react'

const InputValue = ({value, handler, title}) => {
  return (
    <div>
      <label>{title}</label>
      <input value={value} onChange={handler}/>
    </div>
  )
}

export default InputValue