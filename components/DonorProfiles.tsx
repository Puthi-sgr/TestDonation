import Image from 'next/image'

const donors = [
  { name: "Jane Doe", amount: "$500", image: "/placeholder.svg?height=100&width=100" },
  { name: "John Smith", amount: "$350", image: "/placeholder.svg?height=100&width=100" },
  { name: "Alice Johnson", amount: "$250", image: "/placeholder.svg?height=100&width=100" },
  { name: "Bob Williams", amount: "$200", image: "/placeholder.svg?height=100&width=100" },
]

export default function DonorProfiles() {
  return (
    <section id="donors" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Our Generous Donors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {donors.map((donor, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={donor.image} alt={donor.name} width={100} height={100} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-green-700">{donor.name}</h3>
              <p className="text-gray-600">Donated {donor.amount}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-4">Join these amazing donors and make a difference today!</p>
          <a href="#donate" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Become a Donor
          </a>
        </div>
      </div>
    </section>
  )
}

