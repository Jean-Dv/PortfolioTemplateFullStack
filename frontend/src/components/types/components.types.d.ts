interface ProjectsListProps {
  projects: ProjectItemProps[]
}

interface ProjectItemProps {
  id: string
  name: string
  description: string
  stars: integer
  forks: integer
  language: string
  url: string
}

interface SocialMediaProps {
  social: SocialMediaItemProps[]
}

interface SocialMediaItemProps {
  url: string
  name: string
}

export { ProjectsListProps, ProjectItemProps, SocialMediaItemProps, SocialMediaProps }
