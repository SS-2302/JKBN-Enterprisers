import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/jkbn_footer_logo.png'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate=useNavigate()

  const handleAboutUs = () => {
    navigate('/about');
  };
  const handleServices = () => {
    navigate('/services');
  };
  const handleProjects = () => {
    navigate('/projects');
  };
  const handleContact = () => {
    navigate('/contact');
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="text-white bg-linear-to-br from-[#273a69] via-[#15203b] to-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={LogoImg} 
                alt="JKBN Enterprises" 
                className="h-10  mb-3"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              JKBN Enterprises is a professionally managed solar solutions provider with expertise in designing and installing efficient solar power systems. We offer customized and cost-effective solar energy solutions that meet customer needs and government standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 ">Quick Links</h4>
            <ul className="space-y-2.5 text-sm ">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-[#6cc93e] transition-colors text-gray-300 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={handleAboutUs}
                  className="hover:text-[#6cc93e] transition-colors text-gray-300 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={handleServices}
                  className="hover:text-[#6cc93e] transition-colors text-gray-300 cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={handleProjects}
                  className="hover:text-[#6cc93e] transition-colors text-gray-300 cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={handleContact}
                  className="hover:text-[#6cc93e] transition-colors text-gray-300 cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('news')}
                  className="hover:text-[#6cc93e] transition-colors text-gray-300 cursor-pointer"
                >
                  Latest News
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6cc93e] rounded-md flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <div className="pt-1">
                  <div className="font-semibold text-white mb-0.5">Email Us</div>
                  <a href="mailto:jkbn2019@gmail.com" className="text-gray-300 hover:text-[#6cc93e] transition-colors">
                    jkbn2019@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#fecd3f] rounded-md flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <div className="pt-1">
                  <div className="font-semibold text-white mb-0.5">Call Us</div>
                  <a href="tel:+917550055300" className="text-gray-300 hover:text-[#6cc93e] transition-colors">
                    +91 7305505705
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6cc93e] rounded-md flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <div className="pt-1">
                  <div className="font-semibold text-white mb-0.5">Location</div>
                  <span className="text-gray-300">
                    Tambaram, Chennai 600059
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2.5 text-sm text-gray-300 mb-6 w-60">
              <li>
                <span>Mon - Fri :  </span>
                <span className="text-white">10:00 AM - 10:00 PM</span>
              </li>
              <li>
                <span>Saturday : </span>
                <span className="text-white">10:00 AM - 8:00PM</span>
              </li>
              <li>
                <span>Sunday : </span>
                <span className="text-red-400 font-medium">Closed</span>
              </li>
            </ul>
            <div>
              <div className="font-semibold text-white mb-3">Follow us on</div>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6cc93e] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6cc93e] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6cc93e] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6cc93e] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-10"></div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-400">
          <p>
            © {currentYear}, JKBN Enterprises. All rights reserved. Revolutionizing solar solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
