import './socialmedia.scss'
import { Fade } from 'react-awesome-reveal'
import { SocialMediaProps } from '../types'

const SocialMedia: React.FC<SocialMediaProps> = ({ social }: SocialMediaProps) => {
  return (
    <Fade className='social__container'>
      <Fade cascade direction='right' damping={0.3}>
        {social.map(({ name, url }) => (
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            key={url}
            className={`fa fa-${name.toLowerCase()} icon-3d`}
          />
        ))}
      </Fade>
    </Fade>
  )
}

export default SocialMedia
