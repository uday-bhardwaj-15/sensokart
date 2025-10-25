// 'use client'

// import { useState } from 'react'
// import { Search, Filter, Share2, MessageCircle, Mail } from 'lucide-react'
// import ProductEnquiryModal from '@/components/ProductEnquiryModal'

// export default function ProductsPage() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState('')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

//   // Mock products data - in production, this would come from Sanity CMS
//   const products = [
//     {
//       id: 1,
//       name: "Digital Pressure Gauge",
//       description: "High-precision digital pressure gauge for industrial applications",
//       price: 25000,
//       image: "/api/placeholder/300/200",
//       category: "Pressure Instruments",
//       brand: "Fluke",
//       specifications: ["Range: 0-1000 PSI", "Accuracy: ±0.1%", "Display: Digital LCD"]
//     },
//     {
//       id: 2,
//       name: "Flow Meter",
//       description: "Ultrasonic flow meter for liquid measurement",
//       price: 45000,
//       image: "/api/placeholder/300/200", 
//       category: "Flow Meters",
//       brand: "Siemens",
//       specifications: ["Range: 0.1-10 m/s", "Accuracy: ±1%", "Output: 4-20mA"]
//     },
//     {
//       id: 3,
//       name: "Temperature Sensor",
//       description: "RTD temperature sensor with high accuracy",
//       price: 15000,
//       image: "/api/placeholder/300/200",
//       category: "Temperature Sensors", 
//       brand: "Honeywell",
//       specifications: ["Range: -200°C to 600°C", "Accuracy: ±0.1°C", "Type: PT100"]
//     },
//     {
//       id: 4,
//       name: "Level Transmitter",
//       description: "Radar level transmitter for tank level measurement",
//       price: 75000,
//       image: "/api/placeholder/300/200",
//       category: "Level Measurement",
//       brand: "Vega",
//       specifications: ["Range: 0-20m", "Accuracy: ±2mm", "Frequency: 26GHz"]
//     }
//   ]

//   const categories = ["All", "Pressure Instruments", "Flow Meters", "Temperature Sensors", "Level Measurement"]

//   const handleEnquiry = (product: any) => {
//     const message = `Hi, I'm interested in ${product.name}. Please provide more details and pricing.`
//     const whatsappUrl = `https://wa.me/9494122101?text=${encodeURIComponent(message)}`
//     window.open(whatsappUrl, '_blank')
//   }

//   const handleEmailEnquiry = (product: any) => {
//     const subject = `Enquiry for ${product.name}`
//     const body = `Hi,\n\nI'm interested in ${product.name}.\n\nProduct Details:\n${product.description}\n\nPlease provide more information and pricing.\n\nThank you.`
//     const emailUrl = `mailto:sales@sensokart.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
//     window.open(emailUrl)
//   }

//   const handleShare = (product: any) => {
//     if (navigator.share) {
//       navigator.share({
//         title: product.name,
//         text: product.description,
//         url: window.location.href
//       })
//     } else {
//       // Fallback to copying to clipboard
//       navigator.clipboard.writeText(`${product.name} - ${window.location.href}`)
//       alert('Product link copied to clipboard!')
//     }
//   }

//   const handleEnquiryClick = (product: any) => {
//     setSelectedProduct(product)
//     setIsEnquiryModalOpen(true)
//   }

//   const filteredProducts = products.filter(product => {
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          product.description.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesCategory = selectedCategory === '' || product.category === selectedCategory
//     return matchesSearch && matchesCategory
//   })

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover our range of precision instruments and measurement solutions.
//           </p>
//         </div>

//         {/* Search and Filter */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row gap-4 mb-6">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <Filter className="w-5 h-5 text-gray-400" />
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               >
//                 {categories.map(category => (
//                   <option key={category} value={category === 'All' ? '' : category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="h-48 bg-gray-200 flex items-center justify-center">
//                 <span className="text-4xl">🔧</span>
//               </div>
              
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//                   <span className="text-sm text-gray-500">{product.brand}</span>
//                 </div>
                
//                 <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
//                 <div className="mb-4">
//                   <h4 className="text-sm font-medium text-gray-900 mb-2">Key Specifications:</h4>
//                   <ul className="text-xs text-gray-600 space-y-1">
//                     {product.specifications.map((spec, index) => (
//                       <li key={index} className="flex items-center">
//                         <div className="w-1 h-1 bg-green-600 rounded-full mr-2"></div>
//                         {spec}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-2xl font-bold text-green-600">₹{product.price.toLocaleString()}</span>
//                   <span className="text-sm text-gray-500">{product.category}</span>
//                 </div>
                
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleEnquiryClick(product)}
//                     className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
//                   >
//                     Enquiry
//                   </button>
                  
//                   <button
//                     onClick={() => handleEnquiry(product)}
//                     className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-sm font-medium flex items-center justify-center"
//                   >
//                     <MessageCircle className="w-4 h-4 mr-1" />
//                     WhatsApp
//                   </button>
                  
//                   <button
//                     onClick={() => handleEmailEnquiry(product)}
//                     className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
//                   >
//                     <Mail className="w-4 h-4 mr-1" />
//                     Email
//                   </button>
                  
//                   <button
//                     onClick={() => handleShare(product)}
//                     className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center"
//                   >
//                     <Share2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredProducts.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
//           </div>
//         )}
//       </div>

//       {/* Product Enquiry Modal */}
//       {selectedProduct && (
//         <ProductEnquiryModal
//           isOpen={isEnquiryModalOpen}
//           onClose={() => {
//             setIsEnquiryModalOpen(false)
//             setSelectedProduct(null)
//           }}
//           product={selectedProduct}
//         />
//       )}
//     </div>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, Share2, MessageCircle, Mail } from 'lucide-react'
import ProductEnquiryModal from '@/components/ProductEnquiryModal'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)
  const [products, setProducts] = useState<any[]>([]) // combined (sample + fetched)
  const [loading, setLoading] = useState(false)

  // --- Sample products (these remain first) ---
  const sampleProducts = [
    {
      id: 'sample-1',
      name: "Digital Pressure Gauge",
      description: "High-precision digital pressure gauge for industrial applications",
      price: 25000,
      image: "/api/placeholder/300/200",
      category: "Pressure Instruments",
      brand: "Fluke",
      specifications: ["Range: 0-1000 PSI", "Accuracy: ±0.1%", "Display: Digital LCD"]
    },
    {
      id: 'sample-2',
      name: "Flow Meter",
      description: "Ultrasonic flow meter for liquid measurement",
      price: 45000,
      image: "/api/placeholder/300/200",
      category: "Flow Meters",
      brand: "Siemens",
      specifications: ["Range: 0.1-10 m/s", "Accuracy: ±1%", "Output: 4-20mA"]
    },
    {
      id: 'sample-3',
      name: "Temperature Sensor",
      description: "RTD temperature sensor with high accuracy",
      price: 15000,
      image: "/api/placeholder/300/200",
      category: "Temperature Sensors",
      brand: "Honeywell",
      specifications: ["Range: -200°C to 600°C", "Accuracy: ±0.1°C", "Type: PT100"]
    },
    {
      id: 'sample-4',
      name: "Level Transmitter",
      description: "Radar level transmitter for tank level measurement",
      price: 75000,
      image: "/api/placeholder/300/200",
      category: "Level Measurement",
      brand: "Vega",
      specifications: ["Range: 0-20m", "Accuracy: ±2mm", "Frequency: 26GHz"]
    }
  ]

  // categories list (you can also build from fetched products)
  const categories = ["All", "Pressure Instruments", "Flow Meters", "Temperature Sensors", "Level Measurement"]

  // fetch products from your API and append after the sample list
  useEffect(() => {
    // initialize with the sample products first
    setProducts(sampleProducts)

    const fetchProducts = async () => {
      setLoading(true)
      // try typical endpoints in order (pick the one that exists in your app)
      const candidateUrls = [
                  // common path
        '/api/admin/products',    // admin namespace (if you exposed it)
              // fallback guess — add more if needed
      ]

      let fetched: any[] = []
      for (const url of candidateUrls) {
        try {
          const res = await fetch(url)
          if (!res.ok) {
            // try next url
            continue
          }
          const data = await res.json()

          // if your API returns { success: true, data: [...] } handle that too
          if (Array.isArray(data)) {
            fetched = data
          } else if (data?.data && Array.isArray(data.data)) {
            fetched = data.data
          } else {
            // attempt to find array in response body
            const arr = Object.values(data).find(v => Array.isArray(v))
            if (Array.isArray(arr)) fetched = arr as any[]
          }

          // stop after first successful fetch
          if (fetched.length) break
        } catch (err) {
          // ignore and try next url
          // console.warn('fetch product failed for', url, err)
          continue
        }
      }

      if (fetched.length) {
        // normalize backend product format to the same shape used by sample items
        const normalized = fetched.map((p: any, idx: number) => {
          // product may come with _id, name, description, price, images (array), category->{name}, brand->{name}
          const name = p.name || p.title || `Product ${idx + 1}`
          const id = p._id || p.id || `server-${idx}`
          const description = p.description || p.summary || ''
          const price = p.price ?? p.cost ?? 0
          // get first image url if available (string URL), otherwise leave undefined
          let imageUrl = undefined
          if (Array.isArray(p.images) && p.images.length) {
            // images could be objects or strings; handle common cases:
            const first = p.images[0]
            if (typeof first === 'string') imageUrl = first
            else if (first?.asset?._ref) {
              // can't reliably construct full Sanity CDN url here in client without helper;
              // fallback to placeholder — you can adjust to use urlFor if you add the helper
              imageUrl = '/api/placeholder/300/200'
            } else if (first?.asset?._id) {
              imageUrl = '/api/placeholder/300/200'
            }
          } else if (p.image) {
            imageUrl = typeof p.image === 'string' ? p.image : '/api/placeholder/300/200'
          }

          const categoryName = (p.category && (p.category.name || p.category)) || (p.category?._ref ? '' : '') // best effort
          const brandName = (p.brand && (p.brand.name || p.brand)) || ''

          const specifications = Array.isArray(p.specifications) ? p.specifications : (p.specs ? p.specs : [])

          return {
            id,
            name,
            description,
            price,
            image: imageUrl || '/api/placeholder/300/200',
            category: categoryName,
            brand: brandName,
            specifications
          }
        })

        // remove duplicates by name (keep sample first), then append server ones
        const sampleNames = new Set(sampleProducts.map(s => s.name))
        const toAppend = normalized.filter((p: any) => !sampleNames.has(p.name))
        setProducts(prev => {
          // prev already contains sampleProducts; ensure final order = sampleProducts then appended
          const base = sampleProducts.slice()
          return [...base, ...toAppend]
        })
      } else {
        // no server products found — keep only sample products
        setProducts(sampleProducts)
      }

      setLoading(false)
    }

    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // helpers (same UI actions as before)
  const handleEnquiry = (product: any) => {
    const message = `Hi, I'm interested in ${product.name}. Please provide more details and pricing.`
    const whatsappUrl = `https://wa.me/9494122101?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailEnquiry = (product: any) => {
    const subject = `Enquiry for ${product.name}`
    const body = `Hi,\n\nI'm interested in ${product.name}.\n\nProduct Details:\n${product.description}\n\nPlease provide more information and pricing.\n\nThank you.`
    const emailUrl = `mailto:sales@sensokart.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(emailUrl)
  }

  const handleShare = (product: any) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(`${product.name} - ${window.location.href}`)
      alert('Product link copied to clipboard!')
    }
  }

  const handleEnquiryClick = (product: any) => {
    setSelectedProduct(product)
    setIsEnquiryModalOpen(true)
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = String(product.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
                         String(product.description).toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of precision instruments and measurement solutions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative text-gray-600">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category === 'All' ? '' : category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {product.image ? (
                    // caution: product.image may be a URL or a placeholder route
                    // If using Sanity images and want exact URLs, consider adding urlFor helper.
                    // For now, we safely try to render an img tag when it's a string URL.
                    typeof product.image === 'string' ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={product.image} alt={product.name} className="object-cover w-full h-48" />
                    ) : (
                      <span className="text-4xl">🔧</span>
                    )
                  ) : (
                    <span className="text-4xl">🔧</span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <span className="text-sm text-gray-500">{product.brand}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Specifications:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {(product.specifications || []).map((spec: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-green-600 rounded-full mr-2"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">₹{Number(product.price || 0).toLocaleString()}</span>
                    <span className="text-sm text-gray-500">{product.category || '-'}</span>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEnquiryClick(product)}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Enquiry
                    </button>

                    <button
                      onClick={() => handleEnquiry(product)}
                      className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-sm font-medium flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </button>

                    <button
                      onClick={() => handleEmailEnquiry(product)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </button>

                    <button
                      onClick={() => handleShare(product)}
                      className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {(!loading && filteredProducts.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Product Enquiry Modal */}
      {selectedProduct && (
        <ProductEnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={() => {
            setIsEnquiryModalOpen(false)
            setSelectedProduct(null)
          }}
          product={selectedProduct}
        />
      )}
    </div>
  )
}
