import { Header } from '../components/Header'
import { Joke } from '../components/Joke'

export function JokesAPI() {
  return (
    <main className="px-6 py-12 text-center">
      <Header title="Chuck Norris Jokes" description="Free JSON API for hand curated Chuck Norris facts."/>
      <Joke />
    </main>
  )
}
