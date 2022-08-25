import './backtop.scss'
import { useState, useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    const { scrollY } = window
    setIsVisible(scrollY > 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Fade direction='right' className={`backtop__container ${isVisible ? 'isVisible' : ''}`}>
      <i onClick={scrollToTop} className='fa fa-arrow-up icon-3d' />
    </Fade>
  )
}

export default BackToTopButton
