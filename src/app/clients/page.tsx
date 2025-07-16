const clients = [
  { name: "Atlas Copco", logo: "/images/client1.png" },
  { name: "birlasoft", logo: "/images/client2.png" },
  { name: "bitwise", logo: "/images/client3.png" },
  { name: "Dassault Systemes", logo: "/images/client4.png" },
  { name: "Dresser-Rand", logo: "/images/client5.png" },
  { name: "entercoms", logo: "/images/client6.png" },
  { name: "exotech", logo: "/images/client7.png" },
  { name: "HCL", logo: "/images/client8.png" },
  { name: "L&T Infotech", logo: "/images/client9.png" },
  { name: "MAXION", logo: "/images/client10.png" },
  { name: "Meritor", logo: "/images/client11.png" },
  { name: "Mitutoyo", logo: "/images/client12.png" },
  { name: "MNGL", logo: "/images/client13.png" },
  { name: "Persistent", logo: "/images/client14.png" },
  { name: "READY ROTI", logo: "/images/client15.png" },
  { name: "Sterlite Tech", logo: "/images/client16.png" },
  { name: "SEW Tech", logo: "/images/client17.png" },
];

export default function ClientsPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary tracking-tight flex items-center gap-2">
          <span>Our Clients</span>
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><polygon points="0,0 32,16 0,32" fill="#ffd700" /></svg>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl">Comfort Tours is successfully partnered with all the leading IT/BPO and manufacturing companies in Pune in managing their employee transportation requirement. Our proven expertise and credibility is an assurance for being the right business partners in a dynamic environment.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {clients.map(client => (
            <div key={client.name} className="bg-white rounded-xl shadow card p-6 flex flex-col items-center">
              <img src={client.logo} alt={client.name} className="h-14 object-contain mb-3" />
              <span className="text-base text-primary font-semibold text-center">{client.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 