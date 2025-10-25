import { NextRequest, NextResponse } from 'next/server'
import { client, serverClient } from "@/lib/mainclient";
import { mockPages } from '@/lib/mockData'

// GET - Fetch all pages
export async function GET() {
  try {
    const pages = await client.fetch(`
      *[_type == "page"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        content,
        metaTitle,
        metaDescription,
        isActive,
        _createdAt,
        _updatedAt
      }
    `)
    
    return NextResponse.json(pages)
  } catch (error) {
    console.error('Error fetching pages:', error)
    return NextResponse.json(mockPages)
  }
}

// POST - Create new page
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, content, metaTitle, metaDescription, isActive = true } = body

    const page = {
      _type: 'page',
      title,
      slug,
      content,
      metaTitle,
      metaDescription,
      isActive,
      _createdAt: new Date().toISOString(),
      _updatedAt: new Date().toISOString()
    }

    const result = await serverClient.create(page)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error creating page:', error)
    return NextResponse.json({ error: 'Failed to create page' }, { status: 500 })
  }
}

// PUT - Update page
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { _id, title, slug, content, metaTitle, metaDescription, isActive } = body

    const result = await serverClient
      .patch(_id)
      .set({
        title,
        slug,
        content,
        metaTitle,
        metaDescription,
        isActive,
        _updatedAt: new Date().toISOString()
      })
      .commit()

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error updating page:', error)
    return NextResponse.json({ error: 'Failed to update page' }, { status: 500 })
  }
}

// DELETE - Delete page
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Page ID is required' }, { status: 400 })
    }

    await serverClient.delete(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting page:', error)
    return NextResponse.json({ error: 'Failed to delete page' }, { status: 500 })
  }
}
