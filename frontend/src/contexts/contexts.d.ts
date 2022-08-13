interface ThemeProviderProps {
  children: React.ReactNode
}

interface ThemeContextProps {
  theme: string
  UpdateTheme: (theme: string) => void
}

export { ThemeProviderProps, ThemeContextProps }
