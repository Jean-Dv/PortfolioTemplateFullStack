import React, { createContext, useState, useContext, useEffect } from 'react'
import { ThemeContextProps, ThemeProviderProps } from './contexts'

const initialState = {
  theme: 'light',
  UpdateTheme: () => {
    return
  },
}

const ThemeContext = createContext<ThemeContextProps>(initialState)

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light')

  useEffect(() => {
    initializeTheme()
  }, [theme])

  const initializeTheme = () => {
    const existTheme = localStorage.getItem('theme')

    if (existTheme) {
      setTheme(existTheme)
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }

    document.documentElement.className = ''
    document.documentElement.classList.add(`${theme}Mode`)
  }

  const UpdateTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        UpdateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider')
  }

  return context
}

export { useTheme, ThemeContext, ThemeProvider }
