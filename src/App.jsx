import TwiterCard from './components/TwiterCard'

const App = () => {
  return (
    <main>
      <TwiterCard
        name='Miguel Ángel Durán'
        userName='midudev'
        initialIsFollowing
      />
      <TwiterCard
        name='Bill Gates'
        userName='billgates'
        initialIsFollowing
      />
      <TwiterCard initialIsFollowing={false} />
    </main>
  )
}

export default App
