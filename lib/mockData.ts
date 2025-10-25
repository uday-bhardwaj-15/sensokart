// Mock data for when Sanity is not available
export const mockCategories = [
  {
    _id: 'mock-1',
    name: 'Pressure Instruments',
    slug: 'pressure-instruments',
    description: 'High-precision pressure measurement solutions',
    parentCategory: null,
    isActive: true,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  },
  {
    _id: 'mock-2',
    name: 'Flow Meters',
    slug: 'flow-meters',
    description: 'Accurate flow measurement instruments',
    parentCategory: null,
    isActive: true,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  }
]

export const mockBrands = [
  {
    _id: 'mock-brand-1',
    name: 'Sample Brand',
    slug: 'sample-brand',
    description: 'A sample brand for demonstration',
    logo: '',
    website: 'https://example.com',
    isActive: true,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  }
]

export const mockProducts = [
  {
    _id: 'mock-product-1',
    name: 'Sample Product',
    slug: 'sample-product',
    description: 'A sample product for demonstration',
    category: { _id: 'mock-1', name: 'Pressure Instruments' },
    subCategory: null,
    brand: { _id: 'mock-brand-1', name: 'Sample Brand' },
    price: 100,
    images: [],
    specifications: [],
    features: [],
    isActive: true,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  }
]

export const mockEnquiries = [
  {
    _id: 'mock-enquiry-1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    company: 'Sample Company',
    productName: 'Sample Product',
    message: 'I am interested in this product',
    status: 'new',
    category: '',
    priority: 'medium',
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  }
]

export const mockContacts = [
  {
    _id: 'mock-contact-1',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1234567890',
    company: 'Sample Company',
    subject: 'General Inquiry',
    message: 'I have a general question about your services',
    status: 'new',
    priority: 'low',
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  }
]

export const mockPages = [
  {
    _id: 'mock-page-1',
    title: 'Homepage',
    slug: 'homepage',
    content: 'Welcome to our website',
    metaTitle: 'Homepage - SENSOKART',
    metaDescription: 'Welcome to SENSOKART',
    isActive: true,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  }
]
