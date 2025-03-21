
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Engineering Student",
    quote: "Hustlance transformed my project from a basic concept to a fully functional prototype. Their guidance was instrumental in helping me win the engineering showcase.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Computer Science Student",
    quote: "Working with Hustlance on my final year project was the best decision I made. Their expertise in software development helped me create an application that stood out.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Architecture Student",
    quote: "The team at Hustlance went above and beyond to help me realize my design vision. Their attention to detail and creative insights elevated my project significantly.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-hero relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(106,61,232,0.05),transparent_70%)]"></div>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-heading ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            What Our Students Say
          </h2>
          <p className={`section-subheading ${isVisible ? 'opacity-100 animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            Hear from students who have successfully completed their projects with our guidance.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto ${isVisible ? 'opacity-100 animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="absolute top-6 left-6 text-hustlance-primary opacity-30">
              <Quote size={48} />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-lg md:text-xl text-gray-700 italic mb-6 relative z-10">
                  "{currentTestimonial.quote}"
                </p>
                <h4 className="text-hustlance-dark font-display font-semibold text-xl">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-500">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-hustlance-primary hover:bg-hustlance-primary hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-hustlance-primary w-4'
                      : 'bg-gray-300 hover:bg-hustlance-secondary'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-hustlance-primary hover:bg-hustlance-primary hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
