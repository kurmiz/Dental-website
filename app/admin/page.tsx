'use client'

import { useState, useEffect } from 'react'

interface Appointment {
  _id: string
  name: string
  email: string
  phone: string
  service: string
  date: string
  message: string
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      const response = await fetch('/api/appointments')
      if (response.ok) {
        const data = await response.json()
        setAppointments(data)
      } else {
        console.error('Failed to fetch appointments')
      }
    } catch (error) {
      console.error('Error fetching appointments:', error)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        setAppointments(appointments.filter(app => app._id !== id))
      } else {
        console.error('Failed to delete appointment')
      }
    } catch (error) {
      console.error('Error deleting appointment:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Service</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td className="border p-2">{appointment.name}</td>
              <td className="border p-2">{appointment.email}</td>
              <td className="border p-2">{appointment.phone}</td>
              <td className="border p-2">{appointment.service}</td>
              <td className="border p-2">{new Date(appointment.date).toLocaleDateString()}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(appointment._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

