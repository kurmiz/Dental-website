import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ContactMessage from '@/app/models/ContactMessage';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const contactMessage = new ContactMessage(body);
    await contactMessage.save();
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 });
  }
}

