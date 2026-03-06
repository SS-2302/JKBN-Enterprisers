import { Home, Building2, EyeIcon,ShieldCheck, Users, TrendingUp, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function About() {

  const navigate=useNavigate()

  const handleAboutUs = () => {
    navigate('/about');
  };

  return (
    <section id="about" className="py-20 bg-linear-to-br from-[#273a69] via-[#15203b] to-[#060a12]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            <span className="text-[#fecd3f] font-bold">About</span>{' '}
            <span className="text-[#6cc93e] font-bold">JKBN</span>
          </h2>

          {/* Who We Are */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Who We Are</h3>
            <p className="text-lg text-white leading-relaxed max-w-6xl">
              JKBN Enterprisers is a professionally managed solar solutions provider with expertise in designing 
              and installing efficient solar power systems. We are committed to delivering reliable renewable energy 
              solutions that meet customer needs and government standards.
            </p>
          </div>

                    {/* What We Do */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
            <p className="text-lg text-white mb-4">
              We design, supply, install, and maintain solar power systems for:
            </p>
            <ul className="text-lg text-white space-y-2 ml-6">
              <li className="flex items-center gap-3">
                <Home className="w-5 h-5 text-[#fecd3f]" />
                Homes
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#fecd3f]" />
                Commercial buildings
              </li>
              <li className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-[#fecd3f]" />
                Industrial facilities
              </li>
            </ul>
            <p className="text-lg text-white mt-4">
              From planning and system design to installation and long-term maintenance, we handle everything under one roof.
            </p>
          </div>
        </div>

        {/* 4 Quality Cards */}
                  
          {/* Left: 4 Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Our Vision */}
            <div className="bg-[#fafafa] rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#6cc93e] rounded-full mx-auto mb-4 flex items-center justify-center">
                <EyeIcon className="w-5 h-5 text-[#333333]" />
              </div>
              <h4 className="text-xl font-semibold text-[#333] mb-3">Our Vision</h4>
              <p className="text-[rgba(51,51,51,0.7)]">
                To be a trusted solar solutions provider across India.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-[#fafafa] rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#fecd3f] rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#333333]" />
              </div>
              <h4 className="text-xl font-semibold text-[#333] mb-3">Our Mission</h4>
              <p className="text-[rgba(51,51,51,0.7)]">
                Empower communities with clean, affordable solar energy
              </p>
            </div>

            {/* Our Quality */}
            <div className="bg-[#fafafa] rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#fecd3f] rounded-full mx-auto mb-4 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#333333]" />
              </div>
              <h4 className="text-xl font-semibold text-[#333] mb-3">Our Quality</h4>
              <p className="text-[rgba(51,51,51,0.7)]">
                Premium components with industry certifications
              </p>
            </div>

            {/* Our Team */}
            <div className="bg-[#fafafa] rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#6cc93e] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#333333]" />
              </div>
              <h4 className="text-xl font-semibold text-[#333] mb-3">Our Team</h4>
              <p className="text-[rgba(51,51,51,0.7)]">
                Experienced engineers and certified technicians
              </p>
            </div>
            
          </div>

          
        {/* View More Button */}
        <div className="mt-12 text-center">
          <button 
          onClick={handleAboutUs}
          className="px-12 py-4 bg-[#fecd3f] hover:bg-[#fdd835] text-black font-bold rounded-lg transition-all duration-300 shadow-lg cursor-pointer">
            View More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
