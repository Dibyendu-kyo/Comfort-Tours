import Image from "next/image";

const clients = [
  { name: "Atlas Copco", logo: "/logo/Atlas-Copco-Logo.svg.png" },
  { name: "BirlaSoft", logo: "/logo/BirlaSoft.png" },
  { name: "BitWise Solutions", logo: "/logo/BitWiseSolutions.png" },
  { name: "Dassault Systèmes", logo: "/logo/dassault-systmes.png" },
  { name: "Dresser-Rand", logo: "/logo/DresserRand.png" },
  { name: "Entercoms", logo: "/logo/entercoms.png" },
  { name: "Exotech", logo: "/logo/exotech-logo.png" },
  { name: "HCL Technologies", logo: "/logo/HCL.png" },
  { name: "L&T Infotech", logo: "/logo/LnT.png" },
  { name: "Maxion Wheels", logo: "/logo/MaxionWheels.png" },
  { name: "Metito", logo: "/logo/Metito.png" },
  { name: "Mitutoyo", logo: "/logo/Mitutoyo.png" },
  { name: "MNGL", logo: "/logo/mngl.jpg" },
  { name: "Persistent Systems", logo: "/logo/Persistent.png" },
  { name: "Ready Roti", logo: "/logo/ReadyRoti.png" },
  { name: "SEW Eurodrive", logo: "/logo/sew.png" },
  { name: "Sterlite Technologies", logo: "/logo/Sterlite.png" },
  { name: "Sydler", logo: "/logo/Sydler.png" },
  { name: "Tech Mahindra", logo: "/logo/TechMahindra.png" },
  { name: "Thermax", logo: "/logo/Thermax.png" },
  { name: "VOSS Automotive", logo: "/logo/voss-automotive.png" },
  { name: "Wipro", logo: "/logo/Wipro.png" },
  { name: "ZS Associates", logo: "/logo/ZS_Associates_Logo.png" },
  { name: "KPIT", logo: "/logo/17.png" },
  { name: "XPO Logistics", logo: "/logo/8.png" }
];

export default function ClientsPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-primary tracking-tight flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Our Trusted Clients</span>
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 32 32">
            <polygon points="0,0 32,16 0,32" fill="#ffd700" />
          </svg>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Comfort Tours is successfully partnered with all the leading IT/BPO and manufacturing companies in Pune in managing their employee transportation requirements. Our proven expertise and credibility is an assurance for being the right business partners in a dynamic environment.
        </p>
      </section>



      {/* All Clients Grid */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center text-primary">Complete Client Portfolio</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div 
              key={client.name} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary/20 p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
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
      </section>

      {/* Stats Section */}
      <section className="mt-20 rounded-2xl p-12 text-center" style={{ background: 'linear-gradient(135deg, #e67817 0%, #007dc0 100%)' }}>
        <h2 className="text-2xl font-bold mb-8 text-white">Partnership Excellence</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-white mb-2">23+</span>
            <span className="text-lg font-medium text-white/90">Major Corporate Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-white mb-2">18+</span>
            <span className="text-lg font-medium text-white/90">Years of Partnership</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-white mb-2">100%</span>
            <span className="text-lg font-medium text-white/90">Client Satisfaction</span>
          </div>
        </div>
      </section>


    </div>
  );
} 