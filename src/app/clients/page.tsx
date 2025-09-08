import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Comfort Tours - Trusted by 75+ Companies",
  description: "Comfort Tours is the trusted employee transport partner for 75+ leading IT, BPO, and manufacturing companies in Pune. With 2,000+ vehicles and 18+ years of expertise, we deliver reliable, safe, and professional corporate travel solutions.",
};

const clientCategories = {
  "IT & Technology": [
    { name: "Wipro", logo: "/logo/Wipro.png" },
    { name: "Tech Mahindra", logo: "/logo/TechMahindra.png" },
    { name: "HCL Technologies", logo: "/logo/HCL.png" },
    { name: "L&T Infotech", logo: "/logo/LnT.png" },
    { name: "Persistent Systems", logo: "/logo/Persistent.png" },
    { name: "BirlaSoft", logo: "/logo/BirlaSoft.png" },
    { name: "ZS Associates", logo: "/logo/ZS_Associates_Logo.png" },
    { name: "KPIT", logo: "/logo/17.PNG" },
    { name: "BitWise Solutions", logo: "/logo/BitWiseSolutions.png" }
  ],
  "Manufacturing & Engineering": [
    { name: "Atlas Copco", logo: "/logo/Atlas-Copco-Logo.svg.png" },
    { name: "Dassault Systèmes", logo: "/logo/dassault-systmes.png" },
    { name: "Dresser-Rand", logo: "/logo/DresserRand.png" },
    { name: "Maxion Wheels", logo: "/logo/MaxionWheels.png" },
    { name: "Mitutoyo", logo: "/logo/Mitutoyo.png" },
    { name: "VOSS Automotive", logo: "/logo/voss-automotive.png" },
    { name: "Exotech", logo: "/logo/exotech-logo.png" },
    { name: "Entercoms", logo: "/logo/entercoms.png" }
  ],
  "Energy & Infrastructure": [
    { name: "MNGL", logo: "/logo/mngl.jpg" },
    { name: "Sterlite Technologies", logo: "/logo/Sterlite.png" },
    { name: "Thermax", logo: "/logo/Thermax.png" },
    { name: "SEW Eurodrive", logo: "/logo/sew.png" },
    { name: "Metito", logo: "/logo/Metito.png" }
  ],
  "FMCG & Others": [
    { name: "Ready Roti", logo: "/logo/ReadyRoti.png" },
    { name: "Sydler", logo: "/logo/Sydler.png" },
    { name: "XPO Logistics", logo: "/logo/8.PNG" }
  ]
};

export default function ClientsPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-primary tracking-tight">
          Our Trusted Clients
        </h1>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4">
            At Comfort Tours, we are proud to be the preferred transportation partner for some of India&apos;s leading IT, BPO, and manufacturing companies.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4">
            For over 18+ years, we&apos;ve successfully managed employee transportation for organizations of all sizes — ensuring safety, reliability, and cost-efficiency in a dynamic business environment.
          </p>
        </div>
      </section>

      {/* Client Portfolio by Category */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-primary">Client Portfolio</h2>

        {Object.entries(clientCategories).map(([category, clients]) => (
          <div key={category} className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-primary border-b-2 border-primary/20 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary/20 p-6 flex flex-col items-center transition-all duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-16 mb-4 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="object-contain h-full w-auto transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                  <span className="text-sm text-primary font-semibold text-center leading-tight">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Link href="/contact" className="btn text-white px-8 py-3 text-lg">
            View Complete Client Portfolio
          </Link>
        </div>
      </section>

      {/* Partnership Excellence Stats */}
      <section className="mb-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-primary">Partnership Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-4xl font-extrabold text-primary mb-2 block">75+</span>
            <span className="text-lg font-medium text-gray-700">Major Corporate Clients</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-4xl font-extrabold text-primary mb-2 block">18+</span>
            <span className="text-lg font-medium text-gray-700">Years of Long-Term Partnerships</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <span className="text-4xl font-extrabold text-primary mb-2 block">100%</span>
            <span className="text-lg font-medium text-gray-700">Client Satisfaction Rate</span>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-primary">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src="/testimonials/priya-nair.jpeg"
                  alt="Priya Nair"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;Comfort Tours has been a trusted partner in managing our employee transportation for over a decade. Their professionalism and reliability make them stand out.&rdquo;
                </p>
                <div>
                  <p className="text-primary font-semibold">Priya Nair</p>
                  <p className="text-gray-600 text-sm">Transport Desk Head, IT MNC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-secondary">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src="/testimonials/rohit-deshmukh.jpeg"
                  alt="Rohit Deshmukh"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;With Comfort Tours, we don&apos;t worry about transport delays anymore. Their fleet and team are always dependable.&rdquo;
                </p>
                <div>
                  <p className="text-primary font-semibold">Rohit Deshmukh</p>
                  <p className="text-gray-600 text-sm">Admin Manager, Manufacturing Firm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src="/testimonials/vijay-kulkarni.jpeg"
                  alt="Vijay Kulkarni"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;Their GPS-enabled buses and professional drivers give us complete peace of mind for our employees&apos; daily commute.&rdquo;
                </p>
                <div>
                  <p className="text-primary font-semibold">Vijay Kulkarni</p>
                  <p className="text-gray-600 text-sm">HR Director, Tech Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn text-white px-8 py-3 text-lg">
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="mb-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #e67817 0%, #007dc0 100%)' }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-3">
            <p className="text-lg font-semibold">Comfort Tours Pvt. Ltd.</p>
            <p className="text-base">Office No. 1, 2nd Floor, Rucha Building, Punavale, Pune – 411033</p>
            <p className="text-base">Phone: +91-20-41230000</p>
            <p className="text-base">Email: info@comfort-toursindia.com</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Request a Corporate Proposal
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ backgroundColor: '#e67817' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 