import Link from 'next/link'
import Counter from './components/counter'

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Counter></Counter>
      <Link href="/about">About</Link>
    </div>
  )
}