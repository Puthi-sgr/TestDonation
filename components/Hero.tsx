import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Forest landscape"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black to-green-900 opacity-60"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Plant a Tree, Plant Hope</h1>
        <p className="text-xl mb-8">Join our mission to reforest the world, one tree at a time.</p>
        <a href="#donate" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Donate Now
        </a>
      </div>
    </section>
  )
}

