import { createContext, useContext } from 'react'
import { useTheme } from './use-theme'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const theme = useTheme()
    
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeContext must be used within ThemeProvider')
    }
    return context
}