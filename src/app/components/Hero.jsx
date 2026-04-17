import { Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  const handleGetConsultation = () => {
    navigate('/consultation');
  };

  const handleCallNow = () => {
    href = 'tel:+9876543210';
  };

  return (
    <section className="relative min-h-160 flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-">
        <img 
          src={"https://images.unsplash.com/photo-1658298775754-5839ffd434cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Solar panels background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
          <span className="text-[#333] font-bold">Revolutionizing </span>
          <span className="text-[#6cc93e] font-bold">Solar Solutions</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#555] mb-10 max-w-2xl mx-auto font-medium">
          Harness the solar today for clean energy, lasting savings, and a brighter, 
          greener future for both you and the planet.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-20 mb-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#253865] mb-1">100+</div>
            <div className="text-sm text-[#333] font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#253865] mb-1">100%</div>
            <div className="text-sm text-[#333] font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#253865] mb-1">24/7</div>
            <div className="text-sm text-[#333] font-medium">Support Available</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGetConsultation}
            className="px-8 py-3 bg-[#6cc93e] hover:bg-[#5ab84f] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Get Free Consultation
          </button>
          <button
            onClick={handleCallNow}
            className="px-8 py-3 bg-[#fecd3f] hover:bg-[#fdd835] text-black font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            Call Now
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}