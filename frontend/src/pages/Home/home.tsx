/* eslint-disable quotes */
import Header from '../../components/Header/header'
import Avatar from '../../components/Avatar/avatar'
import ProjectsList from '../../components/ProjectsList/projects-list'
import { Fade } from 'react-awesome-reveal'
import CONFIG from '../../config/config.json'
import './home.scss'
import SocialMedia from '../../components/SocialMedia/socialmedia'
import Form from '../../components/Form/form'
import { useEffect, useState } from 'react'
import { fetchRepositories } from '../../services/api'
import { ProjectItemProps } from '../../components/types'
import { fetchApiResponse, fetchDataProps } from '../../services/types/services'
import BackToTopButton from '../../components/BackToTop/BackTop'

export default function Home() {
  const { firstName, lastName, carrer, location, cvURL } = CONFIG.author

  const [repositories, setRepositories] = useState<ProjectItemProps[]>([])

  const fetchApi = () => {
    fetchRepositories().then((response: fetchApiResponse) => {
      if (response.ok) {
        const repositoriesOrganiced = response.data.map((repo: fetchDataProps) => {
          return {
            id: repo._id,
            name: repo.name,
            description: repo.description,
            stars: repo.stars,
            forks: repo.forks,
            language: repo.language,
            url: repo.url,
          }
        }) as ProjectItemProps[]

        setRepositories(repositoriesOrganiced)
      }
    })
  }

  useEffect(() => {
    fetchApi()
  }, [])

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
              {cvURL && (
                <a target='_blank' rel='noopener noreferrer' href={cvURL ? cvURL : '#'}>
                  Download CV
                </a>
              )}
            </Fade>
          </div>
          <div className={CONFIG.useFullName ? 'avatar__container spaced' : 'avatar__container'}>
            <Avatar />
          </div>
          <div className='home__scroll'>
            <span>Scroll Down</span>
          </div>
        </div>
      </section>
      <section id='projects' className='projects__section'>
        <div className='projects__container'>
          <Fade direction='left'>
            <div className='section__title'>
              <i className='fa fa-github' />
              <h1>Github Projects</h1>
            </div>
          </Fade>
          <ProjectsList projects={repositories} />
        </div>
      </section>
      <section className='contact__section'>
        <Fade direction='left'>
          <h1>Let&apos;s Work Together</h1>
        </Fade>
        <Form />
      </section>
      <SocialMedia social={CONFIG.social} />
      <BackToTopButton />
    </>
  )
}
