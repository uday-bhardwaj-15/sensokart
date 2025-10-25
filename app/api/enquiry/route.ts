import { NextRequest, NextResponse } from 'next/server'
import { serverClient } from '@/lib/mainclient'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, product, country,productName, quantity, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create enquiry in Sanity
    const enquiry = await serverClient.create({
      _type: 'enquiry',
      name,
      email,
      phone: phone || '',
      company: company || '',
      productName: productName || '',
      quantity: quantity || 1,
      message,
      country,
      status: 'new',
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, enquiry }, { status: 201 })
  } catch (error) {
    console.error('Error creating enquiry:', error)
    return NextResponse.json(
      { error: 'Failed to create enquiry' },
      { status: 500 }
    )
  }
}
