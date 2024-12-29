export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Subha Dental Care</h3>
            <p className="text-gray-300">Your trusted partner for dental health</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Address: Buddha chowk, Bhairahawa</p>
            <p className="text-gray-300">Mobile: +977 9864467519</p>
            <p className="text-gray-300">Tel-No: 071-574519</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <p className="text-gray-300">Sunday - Saturday</p>
            <p className="text-gray-300">9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="w-full max-w-[300px] mx-auto">
            <iframe
              className="w-full h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226507.48060288833!2d83.27408575574174!3d27.494796104873526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969b007d6b3759%3A0x32ace7dc571894b3!2sKurmi%20Niwas!5e0!3m2!1sen!2snp!4v1735411054495!5m2!1sen!2snp"
              style={{ border: "0" }}  // Correct JSX style syntax
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Subha Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
