import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../Utils/Theme';
import { GlobalStyles } from '../../Utils/Global';
import { FiSun } from 'react-icons/fi';

// The function that toggles between themes
function ThemeSwitch() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    // Return the layout based on the current theme
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <button className="toggleThemeButton" onClick={toggleTheme} >
                    <FiSun />
                </button>
            </>
        </ThemeProvider>
    );
}

export default ThemeSwitch;