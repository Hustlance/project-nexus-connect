
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'py-3 bg-white bg-opacity-80 backdrop-blur-lg shadow-sm'
      : 'py-5 bg-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-hustlance-primary font-display text-2xl font-bold transition-transform hover:scale-105"
        >
          Hustlance
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/projects" className="nav-link">Our Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <Link to="/contact" className="hidden md:block">
          <button className="btn-primary">Get in Touch</button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-hustlance-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6 items-center">
          <Link to="/" className="nav-link text-xl">Home</Link>
          <Link to="/about" className="nav-link text-xl">About Us</Link>
          <Link to="/projects" className="nav-link text-xl">Our Projects</Link>
          <Link to="/contact" className="nav-link text-xl">Contact</Link>
          <Link to="/contact">
            <button className="btn-primary mt-4 w-full">Get in Touch</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
