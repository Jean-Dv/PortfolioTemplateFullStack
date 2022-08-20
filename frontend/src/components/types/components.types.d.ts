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

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}

export { ProjectsListProps, ProjectItemProps, SocialMediaItemProps, SocialMediaProps, InputProps }
