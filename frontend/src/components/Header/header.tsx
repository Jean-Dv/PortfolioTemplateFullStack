import Logo from '../../assets/images/triangle.png'
import Icon from '../../assets/images/chat.png'
import { useTheme } from '../../contexts/ThemeContext'
import './header.scss'

export default function Header() {
  const { UpdateTheme, theme } = useTheme()

  return (
    <header className='header__container'>
      <div className='left__content'>
        <img
          src={Logo}
          className={`header__logo ${theme === 'light' ? 'light' : 'dark'}`}
          alt='logo'
          onClick={() => {
            UpdateTheme(theme === 'light' ? 'dark' : 'light')
          }}
        />
        <button type='button'>
          <span>Menu</span>
        </button>
      </div>
      <div className='right__content'>
        <img src={Icon} className='header__icon' alt='icon' />
        <a href='mailto:davinsontc@outlook.com'>HIRE ME</a>
      </div>
    </header>
  )
}
