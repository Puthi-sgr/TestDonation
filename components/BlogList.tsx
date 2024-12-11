import Image from 'next/image'

const blogPosts = [
  {
    title: "The Importance of Urban Forests",
    excerpt: "Discover how urban forests improve air quality and mental health in cities.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "5 Fast-Growing Trees for Quick Impact",
    excerpt: "Learn about tree species that can make a difference in just a few years.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "How Trees Combat Climate Change",
    excerpt: "Explore the crucial role of trees in reducing greenhouse gases and mitigating global warming.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function BlogList() {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Latest from Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-green-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <a href="#" className="inline-block mt-4 text-green-600 hover:text-green-800 font-semibold">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

