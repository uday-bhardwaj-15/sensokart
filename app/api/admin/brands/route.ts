import { NextRequest, NextResponse } from 'next/server'
import { client, serverClient } from "@/lib/mainclient";
import { mockBrands } from '@/lib/mockData'

// GET - Fetch all brands
export async function GET() {
  try {
    const brands = await client.fetch(`
      *[_type == "brand"] | order(_createdAt desc) {
        _id,
        name,
        slug,
        description,
        logo,
        website,
        isActive,
        _createdAt,
        _updatedAt
      }
    `)
    
    return NextResponse.json(brands)
  } catch (error) {
    console.error('Error fetching brands:', error)
    return NextResponse.json(mockBrands)
  }
}

// POST - Create new brand
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, slug, description, logo, website, isActive = true } = body

    const brand = {
      _type: 'brand',
      name,
      slug,
      description,
      logo,
      website,
      isActive,
      _createdAt: new Date().toISOString(),
      _updatedAt: new Date().toISOString()
    }

    const result = await serverClient.create(brand)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error creating brand:', error)
    return NextResponse.json({ error: 'Failed to create brand' }, { status: 500 })
  }
}

// PUT - Update brand
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { _id, name, slug, description, logo, website, isActive } = body

    const result = await serverClient
      .patch(_id)
      .set({
        name,
        slug,
        description,
        logo,
        website,
        isActive,
        _updatedAt: new Date().toISOString()
      })
      .commit()

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error updating brand:', error)
    return NextResponse.json({ error: 'Failed to update brand' }, { status: 500 })
  }
}

// DELETE - Delete brand
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Brand ID is required' }, { status: 400 })
    }

    await serverClient.delete(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting brand:', error)
    return NextResponse.json({ error: 'Failed to delete brand' }, { status: 500 })
  }
}
