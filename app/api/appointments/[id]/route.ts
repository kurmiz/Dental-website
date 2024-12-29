import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { db } = await connectToDatabase()

    const result = await db.collection('appointments').deleteOne({ _id: new ObjectId(params.id) })

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: 'Appointment deleted successfully' })
    } else {
      return NextResponse.json({ message: 'Appointment not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('Error deleting appointment:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}

