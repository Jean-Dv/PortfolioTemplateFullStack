import Logo from '../../assets/images/triangle.png'
import Icon from '../../assets/images/chat.png'
import Moon from '../../assets/images/moon.png'
import Sun from '../../assets/images/day.png'
import { useTheme } from '../../contexts/ThemeContext'
import { Fade } from 'react-awesome-reveal'
import CONFIG from '../../config/config.json'
import './header.scss'

export default function Header() {
  const { UpdateTheme, theme } = useTheme()
  const { email } = CONFIG.author

  return (
    <Fade direction='down' className='header__container'>
      <header className='header__container'>
        <div className='left__content'>
          <img src={Logo} className='header__logo' alt='logo' />
          <a href='#projects'>View Projects</a>
        </div>
        <div className='right__content'>
          <div className='settings__buttons'>
            <img
              className='header__icon'
              src={theme === 'light' ? Moon : Sun}
              alt='icon'
              onClick={() => {
                UpdateTheme(theme === 'light' ? 'dark' : 'light')
              }}
            />
          </div>
          <div className='hireme__button'>
            <img src={Icon} className='header__icon' alt='icon' />
            <a href={`mailto:${email}`}>HIRE ME</a>
          </div>
        </div>
      </header>
    </Fade>
  )
}
