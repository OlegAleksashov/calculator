import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import './ButtonIcon.css'

export const ButtonIcon = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
      <button 
        className='button' value={theme} 
        onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}
      >
        Change theme
      </button>
    )
}