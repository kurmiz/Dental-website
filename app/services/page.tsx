'use client'

import { useState } from 'react'
import Image from 'next/image'

const services = [
  {
    name: 'Dental Checkup',
    description: 'Comprehensive examination of your oral health including teeth, gums, and mouth.',
    image: '/images/machine.jpeg'
  },
  {
    name: 'Dental X-ray (RVG)',
    description: 'Digital radiographs for detailed examination of teeth and surrounding structures.',
    image: '/images/xray.jpeg'
  },
  {
    name: 'Scaling & Polishing',
    description: 'Professional cleaning to remove plaque and tartar for healthier teeth and gums.',
    image: '/images/polishing.jpeg'
  },
  {
    name: 'Dental Restoration',
    description: 'Repair of damaged or decayed teeth using various restorative procedures.',
    image: '/images/res.jpeg'
  },
  {
    name: 'Dental Extraction',
    description: 'Safe and comfortable removal of damaged or problematic teeth.',
    image: '/images/extraction.jpg'
  },
  {
    name: 'Dental Crown and Bridge',
    description: 'Custom-made caps and bridges to restore damaged teeth and replace missing ones.',
    image: '/images/crown.jpg'
  },
  {
    name: 'Removable Denture',
    description: 'Custom-fitted removable replacements for missing teeth.',
    image: '/images/dentures.jpeg'
  },
  {
    name: 'Orthodontic Treatment',
    description: 'Correction of teeth and jaw alignment using braces or clear aligners.',
    image: '/images/ortho.webp'
  },
  {
    name: 'Dental Implant',
    description: 'Permanent replacement of missing teeth with artificial roots and crowns.',
    image: '/images/implant.jpeg'
  }
]

export default function Services() {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<{ message: string; isError: boolean } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)
    setIsLoading(true)
    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingForm),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ message: 'Appointment booked successfully!', isError: false })
        setBookingForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: ''
        })
      } else {
        setSubmitStatus({ message: data.message || 'Failed to book appointment. Please try again.', isError: true })
        console.error('Error details:', data.error)
      }
    } catch (error) {
      console.error('Error booking appointment:', error)
      setSubmitStatus({ message: 'An error occurred. Please try again.', isError: true })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service) => (
          <div key={service.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
        {submitStatus && (
          <div className={`mb-4 p-2 rounded ${submitStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {submitStatus.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={bookingForm.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={bookingForm.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={bookingForm.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-gray-700 font-bold mb-2">Service</label>
            <select
              id="service"
              name="service"
              value={bookingForm.service}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={bookingForm.date}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={bookingForm.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </div>
  )
}

