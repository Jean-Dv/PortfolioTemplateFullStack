import './projects-list.scss'
import ProjectItem from '../ProjectItem/project-item'
import { ProjectsListProps } from '../types'
import { Fade } from 'react-awesome-reveal'

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }: ProjectsListProps) => {
  return (
    <div className='projects__list'>
      {projects.map(({ id, name, url, stars, forks, language, description }) => (
        <Fade key={id} direction='left' cascade>
          <ProjectItem
            id={id}
            name={name}
            language={language}
            stars={stars}
            forks={forks}
            description={description}
            url={url}
          />
        </Fade>
      ))}
    </div>
  )
}

export default ProjectsList
