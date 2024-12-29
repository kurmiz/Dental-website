import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Appointment from '@/app/models/Appointment';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    console.log('Received appointment data:', body);

    const appointment = new Appointment(body);
    const savedAppointment = await appointment.save();
    console.log('Appointment saved:', savedAppointment);

    return NextResponse.json({ message: 'Appointment booked successfully!', appointment: savedAppointment }, { status: 201 });
  } catch (error) {
    console.error('Error booking appointment:', error);
    return NextResponse.json({ message: 'Error booking appointment', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

