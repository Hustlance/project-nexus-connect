
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(106,61,232,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(65,199,199,0.2),transparent_50%)]"></div>
      </div>
      
      <div 
        className="container mx-auto grid md:grid-cols-2 gap-10 items-center z-10"
      >
        <div className="text-left opacity-0 animate-fade-in">
          <div className="tag mb-6 opacity-0 animate-fade-in animate-delay-100">Your Ultimate Project Partner</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hustlance-dark leading-tight mb-6 opacity-0 animate-fade-in animate-delay-200">
            Welcome to <span className="text-hustlance-primary">Hustlance</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg opacity-0 animate-fade-in animate-delay-300">
            Let us turn your ideas into reality. We guide students through their projects with expert mentorship and hands-on experience.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-400">
            <Link to="/contact">
              <button className="btn-primary flex items-center gap-2">
                Start Your Project <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/about">
              <button className="btn-secondary">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="relative md:h-[500px] opacity-0 animate-fade-in animate-delay-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-hustlance-secondary opacity-10 rounded-full filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-hustlance-accent opacity-10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
          
          <div className="glass-card w-full h-full rounded-2xl overflow-hidden shadow-card">
            <img 
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
              alt="Innovation and Creativity" 
              className="w-full h-full object-cover rounded-2xl transition-transform hover:scale-105 duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
