import { useState, useEffect } from 'react'

export function useTheme() {
    const [isLightMode, setIsLightMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved ? JSON.parse(saved) : false
    })

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isLightMode))
        
        if (isLightMode) {
            document.body.classList.add('light-mode')
            document.body.classList.remove('dark-mode')
        } else {
            document.body.classList.add('dark-mode')
            document.body.classList.remove('light-mode')
        }
    }, [isLightMode])

    const toggleTheme = () => {
        setIsLightMode(prev => !prev)
    }

    return {
        isLightMode,
        toggleTheme,
        setTheme: setIsLightMode
    }
}