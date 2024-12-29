import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Service from '@/app/models/Service';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const service = await Service.findById(params.id);
    if (!service) {
      return NextResponse.json({ message: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json({ message: 'Error fetching service' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const body = await request.json();
    const service = await Service.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    if (!service) {
      return NextResponse.json({ message: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Service updated successfully', service });
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ message: 'Error updating service' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const service = await Service.findByIdAndDelete(params.id);
    if (!service) {
      return NextResponse.json({ message: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json({ message: 'Error deleting service' }, { status: 500 });
  }
}

