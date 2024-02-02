import React from 'react'

const ButtonDeleteOne = ({ value, title, handler }) => {
    return (
        <button className='button' 
                onClick={() => {handler(value)}}
        >
          {title}
        </button>
      )
}

export default ButtonDeleteOne