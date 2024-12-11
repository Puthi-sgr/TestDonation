
export default function DonationSection() {
  return (
    <section id="donate" className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Support Our Cause</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Why Donate?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Every dollar plants a new tree</li>
              <li>Help combat climate change</li>
              <li>Restore habitats for wildlife</li>
              <li>Improve air and water quality</li>
            </ul>
            <p className="mt-4 text-gray-700">Your contribution makes a real difference in our fight against deforestation and climate change.</p>
          </div>
          <div className="md:w-1/3 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center text-green-700">Scan to Donate</h3>
            <div className="bg-gray-200 w-48 h-48 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">QR Code Placeholder</span>
            </div>
            <p className="text-center text-gray-600 mb-4">Or donate via our secure online form</p>
            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

