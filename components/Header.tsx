import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">TreePlant Blog</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="#blog" className="hover:underline">Blog</Link></li>
            <li><Link href="#donate" className="hover:underline">Donate</Link></li>
            <li><Link href="#donors" className="hover:underline">Our Donors</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

