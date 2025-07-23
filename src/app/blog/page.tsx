import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Renting a Car or Bus with Comfort Tours Makes Your Trip Better",
      category: "Travel Tips",
      excerpt: "Planning a trip with friends, family, or colleagues? Renting a vehicle might be the best decision you make.",
      image: "/blog/10476.jpg",
      readTime: "4 min read",
      date: "January 15, 2025",
      content: `Planning a trip with friends, family, or colleagues? Renting a vehicle might be the best decision you make. At Comfort Tours, we offer clean, well-maintained cars and buses with trained drivers who know the roads inside out.

Whether you're attending a wedding, going on a corporate outing, or planning a local getaway, our rentals come with flexible packages that suit your timing and budget. You don't need to worry about parking, traffic, or fuel — just sit back and enjoy the ride.

Our customers often tell us how much more relaxed and enjoyable their trips become when they choose us over public transport or self-driving. From Pune to anywhere in India, we've got your ride covered!

So next time you plan a trip, remember — travel is better when Comfort Tours takes the wheel.`
    },
    {
      id: 2,
      title: "Your Dream International Trip, Handled by Comfort Tours",
      category: "International Travel",
      excerpt: "Thinking of exploring Dubai's skyscrapers, Thailand's beaches, or Europe's historic cities? We help you travel the world without stress.",
      image: "/blog/travel-concept-with-landmarks.jpg",
      readTime: "5 min read",
      date: "January 10, 2025",
      content: `Thinking of exploring Dubai's skyscrapers, Thailand's beaches, or Europe's historic cities? At Comfort Tours, we help you travel the world without stress.

From visa assistance and flight bookings to hotels and sightseeing — we plan everything for you. Whether it's your first international trip or your fifth, we make sure it's smooth, safe, and full of memories. No hidden charges, no last-minute surprises — just clear planning and 24/7 support.

We've helped hundreds of travelers enjoy unforgettable holidays, honeymoon packages, and family adventures abroad. We believe travel should be exciting, not exhausting — that's why we handle the details so you can enjoy every moment.

Let us know your budget and destination, and we'll build a custom travel plan just for you. With Comfort Tours, the world is within your reach.`
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary tracking-tight">
          Travel Blog
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          Travel insights, destination guides, and expert tips from 18+ years of travel experience
        </p>
      </section>

      {/* Blog Posts */}
      <section className="mb-20">
        <div className="grid gap-12">
          {blogPosts.map((post, idx) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg card hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      {post.content.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Comfort Tours Team</p>
                          <p className="text-sm text-gray-500">Travel Experts</p>
                        </div>
                      </div>
                      
                      <Link href="/contact" className="btn text-sm px-4 py-2">
                        Plan Your Trip
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Ready to Start Your Journey?</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto px-4">
          Whether you need a car rental for a local trip or planning an international adventure, 
          we&apos;re here to make your travel dreams come true.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn">
            Get Free Quote
          </Link>
          <Link href="/services" className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
} 