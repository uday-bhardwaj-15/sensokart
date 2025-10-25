import { NextRequest, NextResponse } from 'next/server'
import { client, serverClient } from "@/lib/mainclient";
import { mockProducts } from '@/lib/mockData'

// GET - Fetch all products
export async function GET() {
  try {
    const products = await client.fetch(`
      *[_type == "product"] | order(_createdAt desc) {
        _id,
        name,
        slug,
        description,
        category->{_id, name},
        subCategory->{_id, name},
        brand->{_id, name},
        price,
        images,
        specifications,
        features,
        isActive,
        _createdAt,
        _updatedAt
      }
    `)
    
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(mockProducts)
  }
}

// POST - Create new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      slug, 
      description, 
      category, 
      subCategory, 
      brand, 
      price, 
      images, 
      specifications, 
      features, 
      isActive = true 
    } = body

    const product = {
      _type: 'product',
      name,
      slug,
      description,
      category: { _type: 'reference', _ref: category },
      subCategory: subCategory ? { _type: 'reference', _ref: subCategory } : null,
      brand: { _type: 'reference', _ref: brand },
      price,
      images,
      specifications,
      features,
      isActive,
      _createdAt: new Date().toISOString(),
      _updatedAt: new Date().toISOString()
    }

    const result = await serverClient.create(product)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}

// PUT - Update product
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      _id, 
      name, 
      slug, 
      description, 
      category, 
      subCategory, 
      brand, 
      price, 
      images, 
      specifications, 
      features, 
      isActive 
    } = body

    const result = await serverClient
      .patch(_id)
      .set({
        name,
        slug,
        description,
        category: { _type: 'reference', _ref: category },
        subCategory: subCategory ? { _type: 'reference', _ref: subCategory } : null,
        brand: { _type: 'reference', _ref: brand },
        price,
        images,
        specifications,
        features,
        isActive,
        _updatedAt: new Date().toISOString()
      })
      .commit()

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

// DELETE - Delete product
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }

    await serverClient.delete(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}
