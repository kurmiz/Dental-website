import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/app/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token }, { status: 201 });
  } catch (error) {
    console.error('Error in signup:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

