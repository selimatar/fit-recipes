import Link from 'next/link'
import Navigation from './navigation'

export default async function Header () {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">
            Logo
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  )
}