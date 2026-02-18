import { createContext } from 'react';

/**
 * The raw ThemeContext object.
 * Separated into its own file to prevent Fast Refresh 
 * from restarting the whole app when components change.
 */
export const ThemeContext = createContext(null);
