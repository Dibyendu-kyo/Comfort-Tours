export default function CareerPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary tracking-tight flex items-center gap-2">
          <span>Careers</span>
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><polygon points="0,0 32,16 0,32" fill="#ffd700" /></svg>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl">Join our team! We’re always looking for talented drivers, operations staff, and travel professionals. Check back soon for job openings and opportunities.</p>
        <div className="bg-white rounded-xl shadow card p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">No Openings Currently</h2>
          <p className="text-gray-600 text-lg">We don’t have any open positions at the moment, but you can send your resume to <a href="mailto:hr@comfort-toursindia.com" className="text-primary hover:underline">hr@comfort-toursindia.com</a> for future consideration.</p>
        </div>
      </section>
    </div>
  );
} 