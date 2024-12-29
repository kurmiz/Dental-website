'use client'

import { useState } from 'react'

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })

      if (response.ok) {
        setSubmitStatus('Message sent successfully!')
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        const data = await response.json()
        setSubmitStatus(data.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('An error occurred. Please try again.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          {submitStatus && (
            <div className={`mb-4 p-2 rounded ${submitStatus.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {submitStatus}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
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
                value={contactForm.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactForm.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            <strong>Address:</strong> Buddha chowk,Bhairahawa
          </p>
          <p className="mb-4">
            <strong>Mobile:</strong> +977 9864467519
          </p>
          <p className="mb-4">
            <strong>Email:</strong> info@subhadentalcare.com
          </p>
          <p className="mb-4">
            <strong>Hours:</strong> Sunday - Saturday, 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  )
}

