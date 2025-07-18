import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const upcomingPosts = [
    {
      title: "Top 10 Must-Visit Temples in Maharashtra",
      category: "Travel Guide",
      description: "Discover the spiritual heritage of Maharashtra with our comprehensive temple tour guide.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=250&fit=crop",
      readTime: "5 min read",
      comingSoon: true
    },
    {
      title: "Corporate Travel Best Practices",
      category: "Business Travel",
      description: "Essential tips for managing corporate transportation and ensuring employee safety.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      readTime: "7 min read",
      comingSoon: true
    },
    {
      title: "Konkan Coast: Hidden Gems",
      category: "Destination",
      description: "Explore the pristine beaches and coastal towns of Maharashtra's Konkan region.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      readTime: "6 min read",
      comingSoon: true
    },
    {
      title: "Golden Triangle Travel Guide",
      category: "Tour Package",
      description: "Everything you need to know about Delhi, Agra, and Jaipur in one comprehensive guide.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop",
      readTime: "8 min read",
      comingSoon: true
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">
          Travel Blog
        </h1>
        <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Travel insights, destination guides, and expert tips from 18+ years of travel experience
        </p>
      </section>

      {/* Coming Soon Notice */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 text-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-primary">Blog Coming Soon!</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We&apos;re working on bringing you amazing travel content, destination guides, and insider tips. 
            Stay tuned for expert advice from our travel professionals!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn">
              Get Travel Tips Now
            </Link>
            <Link href="/services" className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Content Preview */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">What's Coming</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get a sneak peek at the exciting travel content we&apos;re preparing for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg card hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    Coming Soon
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <div className="flex items-center text-primary">
                    <span className="text-sm font-medium mr-2">Notify Me</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white rounded-2xl shadow-lg card p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Stay Updated</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Be the first to know when we publish new travel guides, tips, and destination insights.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            />
            <button className="btn px-6">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            We&apos;ll only send you valuable travel content. No spam, ever.
          </p>
        </div>
      </section>
    </div>
  );
} 