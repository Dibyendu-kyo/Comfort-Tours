import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">
          Get In Touch
        </h1>
        <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Ready to plan your next journey? We&apos;re here to help make your travel dreams come true.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 text-center card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our travel experts</p>
            <div className="space-y-2">
              <Link href="tel:+912041230000" className="block text-primary hover:text-secondary font-semibold transition-colors">
                +91-20-41230000
              </Link>
              <Link href="tel:+919763704501" className="block text-primary hover:text-secondary font-semibold transition-colors">
                +91-97637-04501
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 text-center card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your travel requirements</p>
            <div className="space-y-2">
              <Link href="mailto:raj.kolpe@comfort-toursindia.com" className="block text-primary hover:text-secondary font-semibold transition-colors text-sm">
                raj.kolpe@comfort-toursindia.com
              </Link>
              <Link href="mailto:bookings@comfort-toursindia.com" className="block text-primary hover:text-secondary font-semibold transition-colors text-sm">
                bookings@comfort-toursindia.com
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 text-center card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Come to our office for personalized service</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Office No. 1, 2nd Floor<br />
              Rucha Building, Punavale<br />
              Pune - 411033
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg card p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            
            <form className="space-y-6" action="mailto:raj.kolpe@comfort-toursindia.com" method="post" encType="text/plain">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors" 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors" 
                    placeholder="Enter your phone number" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors" 
                  placeholder="Enter your email address" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                <select name="service" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors">
                  <option value="">Select a service</option>
                  <option value="car-rental">Car Rental</option>
                  <option value="tour-package">Tour Package</option>
                  <option value="corporate-travel">Corporate Travel</option>
                  <option value="event-transport">Event Transportation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea 
                  name="message"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors" 
                  rows={5} 
                  placeholder="Tell us about your travel requirements..." 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <button type="submit" className="btn w-full text-lg py-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Office Info & Map */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 card">
              <h3 className="text-2xl font-bold text-primary mb-6">Office Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Comfort Tours Pvt. Ltd.</h4>
                    <p className="text-gray-700">Office No. 1, 2nd Floor, Rucha Building<br />Sr. No. 4/12, 4/13, 4/14, Punavale<br />Pune - 411033, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Business Hours</h4>
                    <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM<br />Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Quick Response</h4>
                    <p className="text-gray-700">We respond to all inquiries within 2-4 hours during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-lg card p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Find Us</h3>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.7749!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPunavale%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1642678901234!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Comfort Tours Office Location"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>📍 Office Location:</strong> Office No. 1, 2nd Floor, Rucha Building, Punavale, Pune - 411033
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Click on the map to get directions or use your preferred navigation app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 