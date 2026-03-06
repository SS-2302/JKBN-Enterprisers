import { Phone, Mail, Home, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Contact() {

  const navigate=useNavigate()

  const handleGetConsultation = () => {
    navigate('/consultation');
  };
  const handleContact = () => {
    navigate('/contact');
  };
  
  const handleWhatsApp = () => {
    window.open('https://wa.me/7305505705', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+917305505705';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:jkbn2019@gmail.com';
  };

  return (
    <section id="contact" className="py-20 bg-linear-to-br from-white via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#333] mb-4">
            <span className="text-[#333333] font-bold">Let's Build a Sustainable </span>
            <span className="text-[#fecd3f] font-bold">Solar Future </span>
            <span className="text-[#6cc93e] font-bold">Together</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            Transform your home or business with reliable solar energy solutions. 
            Our expert team is ready to design, install, and support your solar journey.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Contact Options */}
          <div className="bg-[#292929] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Start Your Solar Project</h3>
            <p className="text-white mb-8">
              Ready to reduce electricity bills and switch to clean energy? We're here to help.
            </p>

            {/* Email */}
            <button
              onClick={handleEmail}
              className="w-full bg-[#484848] hover:bg-[#555] rounded-lg p-6 mb-4 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#6cc93e] rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#333333]" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold mb-1">Email US</div>
                  <div className="text-sm text-gray-300 cursor-pointer">jkbn2019@gmail.com</div>
                </div>
              </div>
            </button>

            {/* Phone */}
            <button
              onClick={handleCall}
              className="w-full bg-[#484848] hover:bg-[#555] rounded-lg p-6 mb-4 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#fecd3f] rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#333333]" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold mb-1">Call US</div>
                  <div className="text-sm text-gray-300 cursor-pointer">+91 7305505705</div>
                </div>
              </div>
            </button>

            {/* WhatsApp Section */}
            <div className="mt-8">
              <p className="text-white font-bold mb-2">Prefer to Chat?</p>
              <p className="text-sm text-gray-300 mb-4">
                Connect with us instantly on WhatsApp for consultation.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#1ca04d] hover:bg-[#158a40] rounded-lg p-4 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                {/* <img src={imgWhatsApp} alt="WhatsApp" className="w-7 h-7" /> */}
                <span className="text-white font-bold text-lg">WhatsApp Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column - Schedule a Call Form */}
          <div className="bg-[#292929] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#fecd3f] rounded-2xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-[#333333]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Schedule a Call</h3>
                <p className="text-gray-300">Free 30-minute consultation</p>
              </div>
            </div>

            <p className="text-white mb-6 leading-relaxed">
              Prefer to talk? Schedule a free 30-minute consultation call with our solar experts 
              to discuss your energy requirements and receive personalized solar solutions.
            </p>

            <p className="text-white mb-30">
              Book a convenient time to speak with our solar experts
            </p>

            <div className="space-y-4">
              <button
                onClick={handleContact}
                className="w-full mb-15 bg-[#6cc93e] hover:bg-[#5ab84f] text-black font-semibold py-4 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={handleGetConsultation}
                className="w-full bg-[#fecd3f] hover:bg-[#fdd835] text-black font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Schedule a Call
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-[#292929] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#6cc93e] mb-2">24/7</div>
            <div className="text-xl text-white mb-2">Support Available</div>
            <div className="text-sm text-gray-400">Emergency support when you need it</div>
          </div>

          <div className="bg-[#292929] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#6cc93e] mb-2">&lt;2 hrs</div>
            <div className="text-xl text-white mb-2">Response Time</div>
            <div className="text-sm text-gray-400">Quick responses to your inquiries</div>
          </div>

          <div className="bg-[#292929] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#6cc93e] mb-2">100+</div>
            <div className="text-xl text-white mb-2">Projects Delivered</div>
            <div className="text-sm text-gray-400">Successful installations across sectors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
