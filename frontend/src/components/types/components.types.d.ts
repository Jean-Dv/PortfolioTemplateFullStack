import { InputHTMLAttributes } from 'react'

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
}

interface FormDataProps {
  fullname: string
  email: string
  message: string
}

export {
  ProjectsListProps,
  ProjectItemProps,
  SocialMediaItemProps,
  SocialMediaProps,
  InputProps,
  FormDataProps,
}
