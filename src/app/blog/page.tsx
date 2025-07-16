export default function BlogPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary tracking-tight flex items-center gap-2">
          <span>Comfort Tours Blog</span>
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><polygon points="0,0 32,16 0,32" fill="#ffd700" /></svg>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl">Travel tips, destination guides, and company news. Check back soon for updates!</p>
        <div className="bg-white rounded-xl shadow card p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">No Blog Posts Yet</h2>
          <p className="text-gray-600 text-lg">Our blog is coming soon. Stay tuned for travel inspiration and company updates!</p>
        </div>
      </section>
    </div>
  );
} 