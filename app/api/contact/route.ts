import { NextRequest, NextResponse } from 'next/server'
import {  serverClient } from "@/lib/mainclient";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create contact enquiry in Sanity
    const contact = await serverClient.create({
      _type: 'contact',
      name,
      email,
      phone: phone || '',
      company: company || '',
      subject: subject || '',
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, contact }, { status: 201 })
  } catch (error) {
    console.error('Error creating contact enquiry:', error)
    return NextResponse.json(
      { error: 'Failed to create contact enquiry' },
      { status: 500 }
    )
  }
}
