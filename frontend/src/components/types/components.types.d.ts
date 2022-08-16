interface ProjectsListProps {
  projects: ProjectItemProps[]
}

interface ProjectItemProps {
  id: string,
  name: string
  description: string
  stars: integer
  forks: integer
  language: string
  url: string
}

export { ProjectsListProps, ProjectItemProps }
