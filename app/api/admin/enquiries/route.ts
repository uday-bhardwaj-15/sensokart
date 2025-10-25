import { NextRequest, NextResponse } from 'next/server'
import { client, serverClient } from "@/lib/mainclient";
import { mockEnquiries } from '@/lib/mockData'

// GET - Fetch all enquiries
export async function GET() {
  try {
    const enquiries = await client.fetch(`
      *[_type == "enquiry"] | order(_createdAt desc) {
        _id,
        name,
        email,
        phone,
        company,
        productName,
        message,
        status,
        category,
        priority,
        _createdAt,
        _updatedAt
      }
    `)
    
    return NextResponse.json(enquiries)
  } catch (error) {
    console.error('Error fetching enquiries:', error)
    return NextResponse.json(mockEnquiries)
  }
}

// PUT - Update enquiry status
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { _id, status, category, priority } = body

    const result = await serverClient
      .patch(_id)
      .set({
        status,
        category,
        priority,
        _updatedAt: new Date().toISOString()
      })
      .commit()

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error updating enquiry:', error)
    return NextResponse.json({ error: 'Failed to update enquiry' }, { status: 500 })
  }
}

// DELETE - Delete enquiry
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Enquiry ID is required' }, { status: 400 })
    }

    await serverClient.delete(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting enquiry:', error)
    return NextResponse.json({ error: 'Failed to delete enquiry' }, { status: 500 })
  }
}
