export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Sensokart.com, we specialize in precision measurement and testing solutions for industrial, laboratory, educational, and commercial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Deliver accurate and reliable instruments that help customers maintain quality, safety, and compliance.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600">
              To become India's most trusted platform for measurement and testing solutions, known for integrity, innovation, and excellence.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-600">Quality First</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-600">Customer Focus</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-600">Innovation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-600">Transparency & Trust</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Supply & Sourcing</h3>
              <p className="text-gray-600 text-sm">
                Reliable instruments for pressure, vacuum, temperature, humidity, and environmental measurement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions & Consultation</h3>
              <p className="text-gray-600 text-sm">
                Personalized guidance to match your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calibration & Verification</h3>
              <p className="text-gray-600 text-sm">
                Partnered with certified labs to ensure precision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">After-Sales Support</h3>
              <p className="text-gray-600 text-sm">
                Warranty handling, troubleshooting, and spare parts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bulk/Institutional Orders</h3>
              <p className="text-gray-600 text-sm">
                Special pricing for labs, factories, and educational institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
