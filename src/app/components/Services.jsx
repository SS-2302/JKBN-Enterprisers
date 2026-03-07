
import { BatteryCharging, BatteryFull, Droplets, Factory, Heater, Home, Lightbulb, Sun, ThermometerSunIcon, Wrench, Zap } from 'lucide-react';

const services = [
  {
    title: 'On Grid System',
    description: 'Connects to the electricity grid and helps reduce your power bills. Ideal for areas with reliable grid supply.',
    icon: <Zap className="w-7 h-7" />,
    color: 'bg-[#fecd3f]'
  },
  {
    title: 'Off Grid System',
    description: 'Independent solar system with battery backup. Best for remote locations without grid access.',
    icon: <BatteryFull className="w-7 h-7" />,
    color: 'bg-[#6cc93e]'
  },
  {
    title: 'Hybrid System',
    description: 'Combines grid connection and battery backup for uninterrupted and efficient power supply.',
    icon: <Sun className="w-7 h-7" />,
    color: 'bg-[#fecd3f]'
  },
  {
    title: 'MMS Fabrication',
    description: 'Robust mounting structures designed for durability and long-term solar panel support.',
    icon: <Factory className="w-7 h-7" />,
    color: 'bg-[#6cc93e]'
  },
  {
    title: 'Solar Water Heater',
    description: 'Energy-efficient solar water heating solutions for homes, apartments, and industries.',
    icon: <Heater className="w-7 h-7" />,
    color: 'bg-[#fecd3f]'
  },
  {
    title: 'Solar Pump',
    description: 'Solar-powered water pumping systems ideal for agriculture and water supply applications.',
    icon: <Droplets className="w-7 h-7" />,
    color: 'bg-[#6cc93e]'
  },
  {
    title: 'Heat Pump',
    description: 'Advanced energy-saving system for heating water using renewable energy.',
    icon: <ThermometerSunIcon className="w-7 h-7" />,
    color: 'bg-[#fecd3f]'
  },
  {
    title: 'EPC Work',
    description: 'Complete Engineering, Procurement, and Construction services for solar projects.',
    icon: <Wrench className="w-7 h-7" />,
    color: 'bg-[#6cc93e]'
  },
  {
    title: 'Street Lights',
    description: 'Energy-efficient solar street lighting for roads, campuses, and public spaces.',
    icon: <Lightbulb className="w-7 h-7" />,
    color: 'bg-[#fecd3f]'
  },
  {
    title: 'Battery (Inverters & Automobiles)',
    description: 'High-performance batteries for inverters and automotive applications.',
    icon: <BatteryCharging className="w-7 h-7" />,
    color: 'bg-[#6cc93e]'
  },
  {
    title: 'Home Inverter (Solar & Normal)',
    description: 'Reliable inverter solutions for uninterrupted power backup in homes.',
    icon: <Home className="w-7 h-7" />,
    color: 'bg-[#fecd3f]'
  },
];

export function Services() {
  return (
    <section id="solutions" className="py-20 bg-linear-to-br from-[rgba(206,206,206,0.05)] to-[rgba(129,129,129,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#333] mb-4">
            <span className="text-[#333] font-bold">Our </span>
            <span className="text-[#6cc93e] font-bold">Services</span>
          </h2>
          <p className="text-lg text-[rgba(51,51,51,0.7)] max-w-3xl mx-auto font-medium">
            Comprehensive solar energy systems tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {service.icon || (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#333] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[rgba(51,51,51,0.7)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-[#6cc93e] hover:bg-[#5ab84f] text-white font-medium rounded-lg transition-all duration-300 shadow-lg"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
