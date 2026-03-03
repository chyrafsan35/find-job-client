import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.querySelector('body').setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;