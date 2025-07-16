export default function ContactPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary tracking-tight flex items-center gap-2">
          <span>Contact</span>
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><polygon points="0,0 32,16 0,32" fill="#ffd700" /></svg>
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Comfort Tours Pvt. Ltd.</h2>
            <p className="mb-4 text-lg">Office No. 1, 2nd Floor, Rucha Building,<br />Sr. No. 4/12, 4/13, 4/14, Punavale,<br />Pune - 411033</p>
            <p className="mb-4 text-lg">Phone: <a href="tel:+912041230000" className="text-primary hover:underline">+91-20-41230000</a>, <a href="tel:+919763704501" className="text-primary hover:underline">09763704501</a></p>
            <p className="mb-4 text-lg">Email: <a href="mailto:raj.kolpe@comfort-toursindia.com" className="text-primary hover:underline">raj.kolpe@comfort-toursindia.com</a><br /><a href="mailto:bookings@comfort-toursindia.com" className="text-primary hover:underline">bookings@comfort-toursindia.com</a></p>
          </div>
          {/* Contact Form */}
          <form className="bg-white rounded-xl shadow card p-8 flex flex-col gap-6">
            <div>
              <label className="block text-base font-medium mb-2">Name</label>
              <input type="text" className="w-full border rounded px-4 py-3" placeholder="Enter your name" required />
            </div>
            <div>
              <label className="block text-base font-medium mb-2">Email</label>
              <input type="email" className="w-full border rounded px-4 py-3" placeholder="Enter your email address" required />
            </div>
            <div>
              <label className="block text-base font-medium mb-2">Phone Number</label>
              <input type="tel" className="w-full border rounded px-4 py-3" placeholder="Enter your phone number" required />
            </div>
            <div>
              <label className="block text-base font-medium mb-2">Message</label>
              <textarea className="w-full border rounded px-4 py-3" rows={4} placeholder="Type your message here" required />
            </div>
            <button type="submit" className="btn w-full">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
} 