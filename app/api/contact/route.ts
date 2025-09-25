import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    const contactData = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    }

    // Read existing contacts
    const filePath = path.join(process.cwd(), 'data', 'contacts.json')
    const fileData = fs.readFileSync(filePath, 'utf8')
    const contacts = JSON.parse(fileData)

    // Add new contact
    contacts.push(contactData)

    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2))

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}