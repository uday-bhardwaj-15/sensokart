// 'use client'

// import { useState, useEffect } from 'react'
// import { X, Save } from 'lucide-react'

// interface ProductModalProps {
//   isOpen: boolean
//   onClose: () => void
//   onSave: (data: any) => void
//   editingItem?: any
//   categories: any[]
//   brands: any[]
// }

// export default function ProductModal({ isOpen, onClose, onSave, editingItem, categories, brands }: ProductModalProps) {
//   const [formData, setFormData] = useState({
//     name: '',
//     slug: '',
//     description: '',
//     category: '',
//     subCategory: '',
//     brand: '',
//     price: '',
//     images: '',
//     specifications: '',
//     features: '',
//     isActive: true
//   })

//   useEffect(() => {
//     if (editingItem) {
//       setFormData({
//         name: editingItem.name || '',
//         slug: editingItem.slug || '',
//         description: editingItem.description || '',
//         category: editingItem.category?._id || '',
//         subCategory: editingItem.subCategory?._id || '',
//         brand: editingItem.brand?._id || '',
//         price: editingItem.price?.toString() || '',
//         images: editingItem.images?.join('\n') || '',
//         specifications: editingItem.specifications ? JSON.stringify(editingItem.specifications, null, 2) : '',
//         features: editingItem.features?.join('\n') || '',
//         isActive: editingItem.isActive ?? true
//       })
//     } else {
//       setFormData({
//         name: '',
//         slug: '',
//         description: '',
//         category: '',
//         subCategory: '',
//         brand: '',
//         price: '',
//         images: '',
//         specifications: '',
//         features: '',
//         isActive: true
//       })
//     }
//   }, [editingItem])

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const submitData = {
//       ...formData,
//       price: formData.price ? parseFloat(formData.price) : undefined,
//       images: formData.images ? formData.images.split('\n').filter(img => img.trim()) : [],
//       specifications: formData.specifications ? JSON.parse(formData.specifications) : [],
//       features: formData.features ? formData.features.split('\n').filter(feature => feature.trim()) : []
//     }
//     onSave(submitData)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
//     }))
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between p-6 border-b">
//           <h3 className="text-lg font-semibold text-gray-900">
//             {editingItem ? 'Edit Product' : 'Add Product'}
//           </h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X className="w-6 h-6" />
//           </button>
//         </div>
        
//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
//               <input
//                 type="text"
//                 name="slug"
//                 value={formData.slug}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows={3}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             />
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               >
//                 <option value="">Select Category</option>
//                 {categories.map(category => (
//                   <option key={category._id} value={category._id}>{category.name}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Sub Category</label>
//               <select
//                 name="subCategory"
//                 value={formData.subCategory}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               >
//                 <option value="">Select Sub Category</option>
//                 {categories.filter(cat => cat.parentCategory === formData.category).map(category => (
//                   <option key={category._id} value={category._id}>{category.name}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Brand *</label>
//               <select
//                 name="brand"
//                 value={formData.brand}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               >
//                 <option value="">Select Brand</option>
//                 {brands.map(brand => (
//                   <option key={brand._id} value={brand._id}>{brand.name}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
//             <input
//               type="number"
//               step="0.01"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Images (one per line)</label>
//             <textarea
//               name="images"
//               value={formData.images}
//               onChange={handleChange}
//               rows={3}
//               placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Features (one per line)</label>
//             <textarea
//               name="features"
//               value={formData.features}
//               onChange={handleChange}
//               rows={3}
//               placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Specifications (JSON format)</label>
//             <textarea
//               name="specifications"
//               value={formData.specifications}
//               onChange={handleChange}
//               rows={5}
//               placeholder='[{"name": "Specification 1", "value": "Value 1"}, {"name": "Specification 2", "value": "Value 2"}]'
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
//             />
//           </div>
          
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="isActive"
//               checked={formData.isActive}
//               onChange={handleChange}
//               className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//             />
//             <label className="ml-2 block text-sm text-gray-700">Active</label>
//           </div>
          
//           <div className="flex justify-end space-x-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//             >
//               <Save className="w-4 h-4 mr-2" />
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// components/ProductModal.tsx
'use client'

import { useState, useEffect } from 'react'
import { X, Save } from 'lucide-react'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: any) => void
  editingItem?: any
  categories: any[]
  brands: any[]
}

export default function ProductModal({
  isOpen,
  onClose,
  onSave,
  editingItem,
  categories,
  brands
}: ProductModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    category: '',
    subCategory: '',
    brand: '',
    price: '',
    images: '', // preserves URL lines if user wants to paste URLs
    specifications: '',
    features: '',
    isActive: true
  })

  // files selected by user to upload
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (editingItem) {
      setFormData({
        name: editingItem.name || '',
        slug: editingItem.slug || '',
        description: editingItem.description || '',
        category: editingItem.category?._id || editingItem.category?._ref || '',
        subCategory: editingItem.subCategory?._id || editingItem.subCategory?._ref || '',
        brand: editingItem.brand?._id || editingItem.brand?._ref || '',
        price: editingItem.price?.toString() || '',
        // If editingItem.images are refs or objects, convert to newline list of urls if available
        images: (editingItem.images && Array.isArray(editingItem.images))
          ? editingItem.images.map((img: any) => img.asset?.url || '').filter(Boolean).join('\n')
          : '',
        specifications: editingItem.specifications ? JSON.stringify(editingItem.specifications, null, 2) : '',
        features: editingItem.features?.join('\n') || '',
        isActive: editingItem.isActive ?? true
      })
      setImageFiles([]) // reset selected files when editing
    } else {
      setFormData({
        name: '',
        slug: '',
        description: '',
        category: '',
        subCategory: '',
        brand: '',
        price: '',
        images: '',
        specifications: '',
        features: '',
        isActive: true
      })
      setImageFiles([])
    }
  }, [editingItem])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    // checkbox handled separately in the form element (it will be input element)
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    setImageFiles(Array.from(files))
  }

  const uploadFilesToServer = async (files: File[]) => {
    if (!files.length) return []

    const fd = new FormData()
    files.forEach((f) => fd.append('files', f))

    const res = await fetch('/api/sanity/upload', {
      method: 'POST',
      body: fd
    })

    if (!res.ok) {
      const text = await res.text()
      throw new Error('Image upload failed: ' + text)
    }

    const json = await res.json()
    // expected: { assets: [{ _id: 'image-xxx-xxx', url: '...' }, ...] }
    return json.assets || []
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      // 1) Upload image files (if any) and map to Sanity image reference objects
      let imageRefs: any[] = []

      if (imageFiles.length > 0) {
        const assets = await uploadFilesToServer(imageFiles)
        // convert to Sanity image ref objects that your product schema expects
        imageRefs = assets.map((a: any) => ({
          _type: 'image',
          asset: { _type: 'reference', _ref: a._id }
        }))
      }

      // 2) Also accept image URLs that user pasted in the textarea
      // If the user pasted direct image URLs, create image objects with "asset" as an object with url.
      // Note: Sanity documents typically reference uploaded assets; if you store plain URLs you'll need to handle that downstream.
      const pastedUrls = formData.images
        ? formData.images.split('\n').map(s => s.trim()).filter(Boolean)
        : []

      // For pasted URLs, create image objects with `asset` containing `url` (sanity will not automatically host them).
      const urlImages = pastedUrls.map(url => ({
        _type: 'image',
        asset: { _type: 'url', url } // note: for consistency you may want to upload these too; here we keep as URL objects
      }))

      // 3) parse specifications safely
      let specs: any = []
      try {
        specs = formData.specifications ? JSON.parse(formData.specifications) : []
      } catch (err) {
        // If JSON parse fails, show console error and keep specs empty
        console.error('Invalid specifications JSON', err)
        alert('Specifications JSON is invalid. Please fix it before saving.')
        setUploading(false)
        return
      }

      // 4) build features array
      const features = formData.features
        ? formData.features.split('\n').map(f => f.trim()).filter(Boolean)
        : []

      // 5) prepare final product payload
      const submitData: any = {
        ...formData,
        price: formData.price ? parseFloat(formData.price) : undefined,
        // combine uploaded refs + pasted url objects
        images: [...imageRefs, ...urlImages],
        specifications: specs,
        features,
        isActive: !!formData.isActive
      }

      // If editingItem exists and has _id, include it so your backend knows to PUT instead of POST
      if (editingItem && editingItem._id) {
        submitData._id = editingItem._id
      }

      // call parent's onSave - it can POST or PUT to your products API route
      await onSave(submitData)

      // close after save (parent may also do that)
      onClose()
    } catch (error) {
      console.error('Failed saving product:', error)
      alert('Failed to save product. See console for details.')
    } finally {
      setUploading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            {editingItem ? 'Edit Product' : 'Add Product'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sub Category</label>
              <select
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Sub Category</option>
                {categories.filter(cat => cat.parentCategory === formData.category).map(category => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand *</label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Brand</option>
                {brands.map(brand => (
                  <option key={brand._id} value={brand._id}>{brand.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100"
            />
            {imageFiles.length > 0 && (
              <p className="text-sm text-gray-600 mt-2">{imageFiles.length} image(s) selected</p>
            )}
            <p className="text-sm text-gray-500 mt-1">Or paste image URLs below (one per line).</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Images (one per line)</label>
            <textarea
              name="images"
              value={formData.images}
              onChange={handleChange}
              rows={3}
              placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Features (one per line)</label>
            <textarea
              name="features"
              value={formData.features}
              onChange={handleChange}
              rows={3}
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specifications (JSON format)</label>
            <textarea
              name="specifications"
              value={formData.specifications}
              onChange={handleChange}
              rows={5}
              placeholder='[{"name": "Specification 1", "value": "Value 1"}, {"name": "Specification 2", "value": "Value 2"}]'
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Active</label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              disabled={uploading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              disabled={uploading}
            >
              <Save className="w-4 h-4 mr-2" />
              {uploading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
