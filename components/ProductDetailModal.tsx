'use client'

import React, { useState } from 'react'
import { X, Plus, Minus } from 'lucide-react'

interface Product {
  id: string
  name: string
  description?: string
  price?: number
  image?: string
  brand?: string
  category?: string
  specifications?: string[]
  // add other fields you use
}

interface Props {
  product: Product
  isOpen: boolean
  onClose: () => void
  onEnquiry?: (p: Product) => void
  onWhatsApp?: (p: Product) => void
  onEmail?: (p: Product) => void
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onEnquiry,
  onWhatsApp,
  onEmail
}: Props) {
  const [qty, setQty] = useState(1)
  const [selectedOption, setSelectedOption] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/40 p-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left - images */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full bg-gray-100 rounded border p-6 flex items-center justify-center">
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={product.image} alt={product.name} className="object-contain max-h-[420px] w-full" />
              ) : (
                <div className="text-6xl">🔧</div>
              )}
            </div>

            {/* thumbnails (optional) */}
            <div className="mt-4 flex gap-3">
              {/* Add thumbnails if available */}
            </div>

            <p className="mt-4 text-sm text-gray-500">Roll over image to zoom in</p>
          </div>

          {/* Right - details */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">{product.brand || '-'}</div>
              <div className="text-sm text-gray-500">Product ID: {product.id}</div>
            </div>

            <div className="text-3xl font-bold text-green-600">₹{Number(product.price || 0).toLocaleString()}</div>

            <p className="text-gray-700">{product.description}</p>

            {/* variant select (if you have variants) */}
            <div className='text-gray-600'>
              <label className="block text-sm text-gray-600 mb-2">Select Option</label>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="px-3 py-2 border rounded-md w-48"
              >
                <option value="">Default</option>
                <option value="opt1">0 to 10 mm. WC</option>
                <option value="opt2">10 to 50 mm. WC</option>
              </select>
              <div className="text-xs text-red-500 mt-1">Select an option if required</div>
            </div>

            {/* quantity + add to cart / request quote */}
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQty(prev => Math.max(1, prev - 1))}
                  className="px-3 py-2"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-4 py-2">{qty}</div>
                <button
                  onClick={() => setQty(prev => prev + 1)}
                  className="px-3 py-2"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  // placeholder add to cart behavior
                  alert(`Added ${qty} x ${product.name} to cart`)
                }}
                className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
              >
                Add to cart
              </button>

              <button
                onClick={() => onEnquiry?.(product)}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
              >
                Request a Quote
              </button>
            </div>

            {/* contact buttons */}
            <div className="flex gap-3 mt-2 text-gray-600">
              <button
                onClick={() => onWhatsApp?.(product)}
                className="flex items-center gap-2 px-4 py-2 border rounded text-sm"
              >
                WhatsApp
              </button>
              <button
                onClick={() => onEmail?.(product)}
                className="flex items-center gap-2 px-4 py-2 border rounded text-sm"
              >
                Email
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="flex items-center gap-2 px-3 py-2 border rounded text-sm"
              >
                Copy Link
              </button>
            </div>

            {/* specs */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Specifications</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {(product.specifications || []).length === 0 && <li>-</li>}
                {(product.specifications || []).map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-600 mt-2"></div>
                    <div>{s}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t p-4 text-right">
          <button onClick={onClose} className="px-4 py-2 rounded border">Close</button>
        </div>
      </div>
    </div>
  )
}
