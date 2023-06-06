import { Header } from '../components/Header'
import { Counter } from '../components/Counter'

export function WordCounter() {
  return (
    <main className="px-6 py-12 text-center">
      <Header title="Word Counter" description="Free online character and word count tool" />
      <Counter />
    </main>
  )
}
