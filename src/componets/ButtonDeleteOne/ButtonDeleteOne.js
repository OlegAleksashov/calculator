import React from 'react'

const ButtonDeleteOne = ({ value, title, handler }) => {
    return (
        <button className='button' 
                //onClick={() => {handler(value)}}
                onClick={handler}
        >
          {title}
        </button>
      )
}

export default ButtonDeleteOne