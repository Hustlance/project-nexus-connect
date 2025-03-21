
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hustlance-dark text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and Intro */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold text-white inline-block mb-4">
              Hustlance
            </Link>
            <p className="text-gray-300 max-w-md mb-6">
              Helping students bring their project ideas to life with expert guidance and hands-on collaboration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-hustlance-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-hustlance-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-hustlance-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-hustlance-primary" />
                <a href="tel:9848681711" className="text-gray-300 hover:text-white transition-colors">
                  +91 9848681711
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-hustlance-primary" />
                <a href="mailto:hustlance@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  hustlance@gmail.com
                </a>
              </li>
              <li className="mt-6">
                <Link to="/contact" className="inline-flex items-center space-x-2 text-hustlance-primary hover:text-hustlance-secondary transition-colors">
                  <span>Request a Consultation</span>
                  <ExternalLink size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Hustlance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
