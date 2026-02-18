import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';

/**
 * Custom hook to access the theme context.
 * Must be used within a ThemeProvider.
 */
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return ctx;
}
