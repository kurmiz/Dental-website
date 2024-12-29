import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Welcome to Subha Dental Care</h1>
          <div className="relative w-full h-[500px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/logoss.png"
              alt="Modern Dental Clinic"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            At Subha Dental Care, we are committed to providing you with the highest quality dental care in a comfortable and friendly environment.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="Expert Care"
            description="Our experienced team of dental professionals is dedicated to your oral health."
            imagePath="/images/care.jpg"
          />
          <FeatureCard
            title="Modern Technology"
            description="We use the latest dental technology to provide the best possible care."
            imagePath="/images/w3.webp"
          />
          <FeatureCard
            title="Comfortable Environment"
            description="Our facility is designed to make your dental visit as comfortable as possible."
            imagePath="/images/env.jpeg"
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/w2.jpeg"
                alt="Dental Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Dental Care</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span>State-of-the-art equipment</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span>Experienced dental professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span>Comfortable and relaxing environment</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span>Affordable treatment options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, imagePath }: { title: string; description: string; imagePath: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

