import Image from 'next/image';

const clients = [
  { name: 'Tech Mahindra', logo: '/public/tech-mahindra-logo.png' },
  { name: 'Hermax', logo: '/public/hermax-logo.png' },
  { name: 'ZS', logo: '/public/zs-logo.png' },
];

const events = [
  'Sporting challenges, motivational games, problem solving activities, group initiatives and leadership exercises that are designed to challenge and stimulate both the mind and the body.'
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-72 flex-shrink-0 mb-8 md:mb-0">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center mb-6">
        <Image src="/globe.svg" alt="Comfort Tours Logo" width={100} height={100} className="mb-2" />
        <h2 className="text-xl font-bold text-blue-700 mb-2">Comfort Tours</h2>
      </div>
      <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl shadow p-4 flex flex-col items-center mb-6">
        <Image src="/window.svg" alt="24 Hours Cab Service" width={120} height={80} className="mb-2" />
        <span className="text-lg font-semibold text-blue-900">24 Hours Cab Service</span>
      </div>
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <h3 className="text-base font-bold text-blue-700 mb-2">Our Clients</h3>
        <div className="flex flex-col gap-2 items-center">
          {clients.map(client => (
            <div key={client.name} className="bg-gray-50 rounded p-2 w-full flex items-center justify-center">
              <span className="text-gray-700 text-sm font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-yellow-100 rounded-xl shadow p-4">
        <h3 className="text-base font-bold text-yellow-700 mb-2">Events</h3>
        <ul className="text-gray-700 text-sm list-disc pl-4">
          {events.map((event, idx) => (
            <li key={idx}>{event}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 