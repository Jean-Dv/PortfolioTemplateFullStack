/* eslint-disable quotes */
import Header from '../../components/Header/header'
import Avatar from '../../components/Avatar/avatar'
import ProjectsList from '../../components/ProjectsList/projects-list'
import { Fade } from 'react-awesome-reveal'
import CONFIG from '../../config/config.json'
import './home.scss'
import SocialMedia from '../../components/SocialMedia/socialmedia'
import Form from '../../components/Form/form'

const Projects = [
  {
    id: '1',
    name: 'Portfolio FullStack',
    description:
      'My dotfiles repo, here you can find all my window manager configs as well as documentation and a guide on how to make your own desktop environment.',
    stars: 300,
    forks: 120,
    language: 'TypeScript',
    url: 'https://codest.vercel.app',
  },
  {
    id: '2',
    name: 'Portfolio Frontend',
    description:
      'My dotfiles repo, here you can find all my window manager configs as well as documentation and a guide on how to make your own desktop environment.',
    stars: 300,
    forks: 120,
    language: 'TypeScript',
    url: 'https://codest.vercel.app',
  },
]

export default function Home() {
  const { firstName, lastName, carrer, location } = CONFIG.author

  return (
    <>
      <section className='home__section'>
        <Header />
        <div className='home__container'>
          <div className='title__container'>
            <Fade direction='left' cascade={true} damping={0.3}>
              <h1 className='home__title'>
                Hi, my name is <br />
                <b>{CONFIG.useFullName ? `${firstName} ${lastName}` : firstName}</b>
              </h1>
              <span className='home__description'>
                Im an <b>{carrer}</b> from <br /> {location}
              </span>
            </Fade>
          </div>
          <div className={CONFIG.useFullName ? 'avatar__container spaced' : 'avatar__container'}>
            <Avatar />
          </div>
        </div>
      </section>
      <section className='projects__section'>
        <div className='projects__container'>
          <Fade direction='left'>
            <div className='section__title'>
              <i className='fa fa-github' />
              <h1>Github Projects</h1>
            </div>
          </Fade>
          <ProjectsList projects={Projects} />
        </div>
      </section>
      <section className='contact__section'>
        <h1>Let&apos;s Work Together</h1>
        <Form />
      </section>
      <SocialMedia social={CONFIG.social} />
    </>
  )
}
