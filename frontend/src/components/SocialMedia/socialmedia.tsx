import CONFIG from '../../config/config.json'
import './socialmedia.scss'
import { Fade } from 'react-awesome-reveal'

export default function SocialMedia() {
  const { social } = CONFIG

  return (
    <Fade className='social__container'>
      <Fade cascade direction='right' damping={0.3}>
        {social.map(({ name, url }) => (
          <i key={url} className={`fa fa-${name.toLowerCase()} icon-3d`} />
        ))}
      </Fade>
    </Fade>
  )
}
