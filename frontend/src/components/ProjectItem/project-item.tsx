import './project-item.scss'
import { ProjectItemProps } from '../types'
import React from 'react'
import Tilt from 'react-parallax-tilt'

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  stars,
  forks,
  language,
  description,
  url,
}: ProjectItemProps) => {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={500}>
      <a href={url} target='_blank' rel='noopener noreferrer' className='project__item'>
        <h1 className='name'>{name}</h1>
        <div className='statics'>
          <span>
            <i className='fa fa-star' />
            {stars}
          </span>
          <span>
            <i className='fa fa-code-fork' />
            {forks}
          </span>
        </div>
        <div className='language'>
          <span>Language:</span>
          <span>{language ? language : 'No Language'}</span>
        </div>
        <div className='description'>
          <p>{description}</p>
        </div>
      </a>
    </Tilt>
  )
}

export default ProjectItem
