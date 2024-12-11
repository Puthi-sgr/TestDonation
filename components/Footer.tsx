export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">TreePlant Blog</h3>
            <p className="text-green-200">Dedicated to reforesting our planet, one tree at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white">Home</a></li>
              <li><a href="#blog" className="text-green-200 hover:text-white">Blog</a></li>
              <li><a href="#donate" className="text-green-200 hover:text-white">Donate</a></li>
              <li><a href="#donors" className="text-green-200 hover:text-white">Our Donors</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-green-200">Email: info@treeplantblog.com</p>
            <p className="text-green-200">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; 2023 TreePlant Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

