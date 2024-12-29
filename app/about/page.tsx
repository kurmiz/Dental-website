import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Subha Dental Care</h1>

      {/* Clinic Image */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/images/alogo.jpg"
          alt="Subha Dental Care Clinic"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to improve the oral health of our community by providing comprehensive, personalized, and compassionate dental care. We strive to educate our patients about the importance of oral hygiene and empower them to make informed decisions about their dental health.
          </p>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/images/about_logo.jpg"
            alt="Dental Care Mission"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-700">{service}</p>
          </div>
        ))}
      </div>

      {/* Team Section with Placeholder */}
      <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <TeamMember
          name="Dr.Binay Chaudhary"
          role="Senior Dentist"
          imagePath="/images/w.png"
        />
              {/* Team Section with Placeholder 
        
        <TeamMember
          name="Mrs.Uma Kurmi"
          role="Receptionist"
          imagePath="/images/Receptionaist.jpg"
        />
        <TeamMember
          name="Upload Your Photo"
          role="Your Role"
          imagePath="/images/placeholder.jpg"
          isPlaceholder
        />
        */}
      </div>
    </div>
  )
}

const services = [
  'Dental Checkup',
  'Dental X-ray (RVG)',
  'Scaling & Polishing',
  'Dental Restoration',
  'Dental Extraction',
  'Dental Crown and Bridge',
  'Removable Denture',
  'Orthodontic Treatment',
  'Dental Implant'
]

function TeamMember({ name, role, imagePath, isPlaceholder = false }: {
  name: string;
  role: string;
  imagePath: string;
  isPlaceholder?: boolean;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image
          src={'/images/w.png'}
          alt={name}
          fill
          className="object-cover"
        />
        {isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white text-center">
              Click to upload your photo
            </span>
          </div>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  )
}

