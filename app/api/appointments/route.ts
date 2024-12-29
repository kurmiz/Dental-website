import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export async function GET() {
  try {
    const { db } = await connectToDatabase()

    const appointments = await db.collection('appointments').find().toArray()

    return NextResponse.json(appointments)
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}

