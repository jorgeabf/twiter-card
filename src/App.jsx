import TwiterCard from './components/TwiterCard'
import { users } from './users'

const App = () => {
  return (
    <main>
      <section className='twiter-cards'>
        {users.map(({ userName, name, isFollowing }) => (
          <TwiterCard
            key={userName}
            name={name}
            userName={userName}
            initialIsFollowing={isFollowing}
          />
        ))}
      </section>
    </main>
  )
}

export default App
