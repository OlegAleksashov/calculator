import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext('light');

export const ThemeContextProvider = ({children}) => {
    const [ theme, setTheme ] = useState('light');

    useEffect(() => {
        if(theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme])

    // const toggleDarkMode = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    //   };

    return (
        <ThemeContext.Provider value={[ theme, setTheme ]}>
            {children}
        </ThemeContext.Provider>
    )
}