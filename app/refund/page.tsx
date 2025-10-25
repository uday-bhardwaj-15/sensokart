export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund & Cancellation Policy</h1>
          <p className="text-xl text-gray-600">
            Our policy on cancellations and refunds for your peace of mind.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Cancel orders within 24 hours of confirmation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>No cancellation charges for orders cancelled within 24 hours</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Orders in production or shipped cannot be cancelled</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Refunds are processed within 7–10 business days</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Returns accepted only for defective or wrong items</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Products must be in original condition with all accessories</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <span>Return shipping costs are borne by the customer</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Process</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Us</h3>
                  <p className="text-gray-600">Email us at sales@sensokart.com with your order details and reason for return</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Get Approval</h3>
                  <p className="text-gray-600">We will review your request and provide return authorization if approved</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ship Product</h3>
                  <p className="text-gray-600">Ship the product back to us in original packaging with all accessories</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Receive Refund</h3>
                  <p className="text-gray-600">Once we receive and inspect the product, we will process your refund</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></div>
                <span>Customized or specially ordered products</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></div>
                <span>Products damaged by misuse or negligence</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></div>
                <span>Products returned after 30 days of delivery</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></div>
                <span>Products without original packaging or accessories</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Returns</h2>
            <p className="text-gray-600 mb-4">
              For any questions about returns or refunds, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600">
                <strong>Email:</strong> sales@sensokart.com<br/>
                <strong>Phone:</strong> 9494122101<br/>
                <strong>Subject:</strong> Return Request - [Order Number]
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
