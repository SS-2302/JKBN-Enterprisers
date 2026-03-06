import LogoImg from '../../assets/jkbn_logo.png'
import { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/Services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (href) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first then scroll
      navigate('/' + href);
    }
    setIsMenuOpen(false);
  };

  const handleGetQuote = () => {
    navigate('/consultation');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/50 backdrop-blur-sm drop-shadow-2xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
          <img 
            src={LogoImg} 
            alt="JKBN Logo" 
            className='h-7'
            />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHomePage ? link.href : '' + link.href}
                onClick={() => !isHomePage && handleNavClick(link.href)}
                className="text-blue-950 font-semibold hover:text-[#6cc93e] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleGetQuote}
              className="px-6 py-2 bg-[#facc15] text-[#0f172a] rounded-lg hover:bg-[#fde047] transition-colors duration-200 font-semibold cursor-pointer"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-blue p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHomePage ? link.href : '' + link.href}
                onClick={() => handleNavClick(link.href)}
                className="block py-3 text-blue-950 hover:text-[#6cc93e] transition-colors duration-200 font-semibold text-center"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleGetQuote}
              className="block w-full mt-4 px-6 py-3 bg-[#facc15] text-[#0f172a] rounded-lg text-center hover:bg-[#fde047] transition-colors duration-200 font-semibold"
            >
              Get Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}