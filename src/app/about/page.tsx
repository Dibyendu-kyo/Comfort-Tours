export default function AboutPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight flex items-center gap-2">
          <span>About Comfort Tours</span>
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><polygon points="0,0 32,16 0,32" fill="#ffd700" /></svg>
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-3xl">The brain child of a few dedicated professionals, Comfort began its journey in a small way, catering to the transport needs of a few software companies. Over a period of time, Comfort has redefined the concept of luxury travel with a specific accent on safety and security. Comfort was the first to introduce GPS-enabled buses for the software industry in Pune.</p>
        <p className="text-xl text-gray-700 mb-6 max-w-3xl">Our own fleet of vehicles with experienced drivers enables us to provide our customer a safe, luxurious travel in a friendly environment. Our mission is to provide quality and excellence to our customers promptly and exclusively. Our clients range from quality-conscious international giants to many big names in the software, schools & colleges and manufacturing sectors too. Comfort is one of the biggest names to reckon in the field of travel industry.</p>
      </section>

      {/* Company Profile Table */}
      <section className="mb-16">
        <div className="bg-white rounded-xl shadow card p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Company Profile</h2>
          <table className="w-full text-left border-separate border-spacing-y-2">
            <tbody>
              <tr><th className="pr-4 text-gray-600 font-semibold">Company Name:</th><td>Comfort Tours Pvt. Ltd.</td></tr>
              <tr><th className="pr-4 text-gray-600 font-semibold">Registered Address:</th><td>Office No. 1, 2nd Floor, Rucha Building, Sr. No. 4/12, 4/13, 4/14, Punavale, Pune - 411033</td></tr>
              <tr><th className="pr-4 text-gray-600 font-semibold">Subsidiary Company:</th><td>Sahara Rent A Car Pvt. Ltd.</td></tr>
              <tr><th className="pr-4 text-gray-600 font-semibold">PAN No.:</th><td>AACCC7556L</td></tr>
              <tr><th className="pr-4 text-gray-600 font-semibold">Service Tax No.:</th><td>AACCC7556LS 001</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#fffbe6] rounded-xl p-8 card">
            <h2 className="text-2xl font-semibold mb-2 text-primary">Our Vision</h2>
            <p className="text-lg">To be the most trusted and innovative travel partner in India, delivering exceptional experiences for every journey.</p>
          </div>
          <div className="bg-[#fffbe6] rounded-xl p-8 card">
            <h2 className="text-2xl font-semibold mb-2 text-primary">Our Mission</h2>
            <p className="text-lg">To provide safe, comfortable, and memorable travel solutions through a modern fleet, professional staff, and a customer-first approach.</p>
          </div>
        </div>
      </section>

      {/* Milestones & Achievements */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-secondary">Milestones & Achievements</h2>
        <ul className="list-disc ml-6 mb-10 text-gray-700 text-lg">
          <li>200+ fleet vehicles serving Pune & Maharashtra</li>
          <li>1000+ happy clients including top corporates</li>
          <li>First to introduce GPS-enabled buses for software industry in Pune</li>
          <li>Recognized for safety and compliance standards</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-primary">Certifications & Compliance</h2>
        <div className="flex flex-wrap gap-8 mb-10">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/ISO_9001-2015.svg" alt="ISO 9001" className="h-16" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/ISO_14001-2015.svg" alt="ISO 14001" className="h-16" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/ISO_45001-2018.svg" alt="ISO 45001" className="h-16" />
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-secondary">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map(i => (
            <img key={i} src={`https://source.unsplash.com/400x300/?travel,car,india,${i}`} alt="Gallery" className="rounded-xl object-cover w-full h-40 shadow" />
          ))}
        </div>
      </section>
    </div>
  );
} 