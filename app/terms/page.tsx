export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Information</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Product specifications may change without notice</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Images are for illustration purposes only</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Actual product may vary from images shown</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Prices may vary based on taxes and shipping</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>All prices are subject to change without notice</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Payment terms will be discussed during quotation process</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty and Support</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Warranty is as per manufacturer policy</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Customers must verify specifications before confirming orders</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Technical support provided as per manufacturer guidelines</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Processing</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>All orders are subject to availability</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Delivery times are estimates and may vary</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>We reserve the right to cancel orders due to stock unavailability</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Sensokart.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of our products or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600">
              These terms and conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of Indian courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For any questions regarding these terms and conditions, please contact us at{' '}
              <a href="mailto:sales@sensokart.com" className="text-green-600 hover:text-green-700">
                sales@sensokart.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
