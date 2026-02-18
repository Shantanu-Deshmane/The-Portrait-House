import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

/**
 * ThemeProvider component that manages the dark/light mode state.
 * This is the ONLY export from this file to ensure Fast Refresh works perfectly.
 */
export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        // Read from localStorage on init (FOUC already handled by index.html script)
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
