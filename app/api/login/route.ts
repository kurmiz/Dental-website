import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/app/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error('Error in login:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

