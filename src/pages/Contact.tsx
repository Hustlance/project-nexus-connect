
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Contact = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(106,61,232,0.05),transparent_50%)]"></div>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hustlance-dark mb-6 opacity-0 animate-fade-in">
            Let's <span className="text-hustlance-primary">Connect</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Let's Build Something Amazing Together!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1 opacity-0 animate-fade-in">
              <h2 className="text-2xl font-display font-semibold text-hustlance-dark mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-hustlance-muted rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-hustlance-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:9848681711" 
                      className="text-gray-600 hover:text-hustlance-primary transition-colors"
                    >
                      +91 9848681711
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-hustlance-muted rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-hustlance-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:hustlance@gmail.com" 
                      className="text-gray-600 hover:text-hustlance-primary transition-colors"
                    >
                      hustlance@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-hustlance-muted rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-hustlance-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-hustlance-muted flex items-center justify-center hover:bg-hustlance-primary hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-hustlance-muted flex items-center justify-center hover:bg-hustlance-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-hustlance-muted flex items-center justify-center hover:bg-hustlance-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 opacity-0 animate-fade-in animate-delay-200">
              <h2 className="text-2xl font-display font-semibold text-hustlance-dark mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-hustlance-light opacity-0 animate-fade-in animate-delay-300">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-xl overflow-hidden shadow-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.8954738584!2d78.24323104311693!3d17.41262458845396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1649499303331!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hustlance Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
