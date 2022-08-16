/* eslint-disable quotes */
import Header from '../../components/Header/header'
import Avatar from '../../components/Avatar/avatar'
import ProjectsList from '../../components/ProjectsList/projects-list'
import { Fade } from 'react-awesome-reveal'
import './home.scss'

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
  return (
    <>
      <section className='home__section'>
        <Header />
        <div className='home__container'>
          <div className='title__container'>
            <Fade direction='left' cascade={true} damping={0.3}>
              <h1 className='home__title'>
                Hi, my
                <br /> name is <b>Name</b>
              </h1>
              <span className='home__description'>
                Im an <b>Professional Carrer</b> from <br /> Location you are
              </span>
            </Fade>
          </div>
          <div className='avatar__container'>
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
    </>
  )
}
