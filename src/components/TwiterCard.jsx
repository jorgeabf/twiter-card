import { useState } from 'react'

const TwiterCard = ({
  name = 'unknown',
  userName = 'unknown',
  initialIsFollowing
}) => {
  const [isFollowing, setIsFollowing] = useState(
    initialIsFollowing
  )
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  const text = isFollowing ? 'Seguir' : 'Siguiendo'
  const buttonClassName = isFollowing
    ? 'twiter-card-button'
    : 'twiter-card-button siguiendo'

  return (
    <article className='twiter-card'>
      <picture className='twiter-card-usuario'>
        <img
          src={`https://unavatar.io/${userName}`}
          alt='User Img'
          className='twiter-card-img'
        />
        <div className='twiter-card-textos'>
          <h3 className='twiter-card-nombre'>{name}</h3>
          <div className='twiter-card-info'>
            <span className='twiter-card-email'>
              @{userName}
            </span>
            <small className='twiter-card-badge'>
              {isFollowing ? 'Te sigue' : 'No te sigue'}
            </small>
          </div>
        </div>
      </picture>
      <button
        className={buttonClassName}
        onClick={handleClick}>
        <span className='visible'>{text}</span>
        <span className='hidden'>Dejar de seguir</span>
      </button>
    </article>
  )
}

export default TwiterCard
