import { NextRequest, NextResponse } from 'next/server'
import { client, serverClient } from "@/lib/mainclient";
import { mockContacts } from '@/lib/mockData'

// GET - Fetch all contacts
export async function GET() {
  try {
    const contacts = await client.fetch(`
      *[_type == "contact"] | order(_createdAt desc) {
        _id,
        name,
        email,
        phone,
        company,
        subject,
        message,
        status,
        priority,
        _createdAt,
        _updatedAt
      }
    `)
    
    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(mockContacts)
  }
}

// PUT - Update contact status
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { _id, status, priority } = body

    const result = await serverClient
      .patch(_id)
      .set({
        status,
        priority,
        _updatedAt: new Date().toISOString()
      })
      .commit()

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error updating contact:', error)
    return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 })
  }
}

// DELETE - Delete contact
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Contact ID is required' }, { status: 400 })
    }

    await serverClient.delete(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting contact:', error)
    return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 })
  }
}
