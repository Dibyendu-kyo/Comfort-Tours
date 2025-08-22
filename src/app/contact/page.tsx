'use client'

import Link from "next/link";
import { useState } from "react";
import { submitContactForm } from "../actions/contact";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitStatus({ type: 'success', message: result.message || 'Message sent successfully!' });
      // Reset form
      const form = document.getElementById('contact-form') as HTMLFormElement;
      form?.reset();
    } else {
      setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' });
    }

    setIsSubmitting(false);
  };
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary tracking-tight">
          Get in Touch
        </h1>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed px-4">
            We&apos;re here to provide safe, reliable, and professional transport solutions for your business and personal travel needs.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
            Whether you&apos;re looking for corporate employee transport, intercity rentals, or event logistics, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 text-center card hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our travel experts for quick assistance</p>
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
            <p className="text-gray-600 mb-4">Send us your requirements and receive a response within a few hours</p>
            <div className="space-y-2">
              <Link href="mailto:info@comfort-tours.com" className="block text-primary hover:text-secondary font-semibold transition-colors text-sm">
                info@comfort-tours.com
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
            <p className="text-gray-600 mb-4">Comfort Tours Pvt. Ltd.</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Office No. 1, 2nd Floor, Rucha Building<br />
              Punavale, Pune – 411033, Maharashtra
            </p>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="text-sm font-semibold text-primary">Business Hours: 24*7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg card px-8 pt-6 pb-10 self-start">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">Fill in the form below, and our team will get back to you within 2–4 business hours.</p>

            {/* Status Messages */}
            <div className="mb-6 min-h-[1px]">
              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                  <div className="flex items-center">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {submitStatus.type === 'success' ? 'Thank you! Our team will contact you shortly.' : submitStatus.message}
                  </div>
                </div>
              )}
            </div>

            <form id="contact-form" className="space-y-5" action={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                    required
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                <select
                  name="service"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  <option value="corporate-travel">Corporate Travel</option>
                  <option value="employee-transport">Employee Transport</option>
                  <option value="event-transportation">Event Transportation</option>
                  <option value="airport-transfer">Airport Transfer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
                  rows={5}
                  placeholder="Tell us about your travel requirements..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="btn w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
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
                    <p className="text-gray-700">24*7 Service Available</p>
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
              <h3 className="text-2xl font-bold text-primary mb-4">Find Us on Map</h3>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121046.33902250009!2d73.7418492!3d18.542540300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b75f842bf51f%3A0x67b5cf581f2f8f00!2sComfort%20Tours%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1753879333753!5m2!1sen!2sin"
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
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/JwPKqYe1mC8D1bzU9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-sm px-4 py-2 text-white"
                >
                  Get Directions
                </a>
              </div>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Office Location:</strong> Office No. 1, 2nd Floor, Rucha Building, Punavale, Pune – 411033
                </p>
                <p className="text-sm text-gray-600">
                  Easily get directions via Google Maps or your preferred navigation app.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/contact" className="btn text-white text-center py-3">
                Request a Quote
              </Link>
              <Link href="/contact" className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-center py-3">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 