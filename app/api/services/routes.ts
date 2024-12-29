import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Service from '@/app/models/Service';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const service = new Service(body);
    await service.save();
    return NextResponse.json({ message: 'Service created successfully!', service }, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ message: 'Error creating service' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const services = await Service.find().sort({ name: 1 });
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ message: 'Error fetching services' }, { status: 500 });
  }
}

