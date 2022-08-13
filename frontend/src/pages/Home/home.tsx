/* eslint-disable quotes */
import Header from '../../components/Header/header'
import Avatar from '../../components/Avatar/avatar'
import './home.scss'

export default function Home() {
  return (
    <section className='home__section'>
      <Header />
      <div className="home__container">
        <div className='title__container'>
          <h1 className='home__title'>
            Hi, my
            <br /> name is <b>Name</b>
          </h1>
          <span className='home__description'>
            Im an <b>Professional Carrer</b> from <br /> Location you are
          </span>
        </div>
        <div className='avatar__container'>
          <Avatar />
        </div>
      </div>
    </section>
  )
}
