
import { Users, Lightbulb, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const AboutPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const features = [
    {
      icon: Users,
      title: "Students Just Like You",
      description: "Founded by students who understand your academic challenges and project needs."
    },
    {
      icon: Lightbulb,
      title: "Expert Guidance",
      description: "Benefit from our experience and mentorship to elevate your projects to professional standards."
    },
    {
      icon: Briefcase,
      title: "Hands-On Experience",
      description: "Gain practical skills through our collaborative approach to project development."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-hustlance-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(106,61,232,0.03),transparent_70%)]"></div>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-heading ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            Who We Are
          </h2>
          <p className={`section-subheading ${isVisible ? 'opacity-100 animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            Hustlance is a team of passionate students dedicated to helping peers transform their ideas into exceptional projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`glass-card p-8 rounded-xl transition-all hover:shadow-hover ${
                isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-hustlance-muted rounded-lg flex items-center justify-center mb-6">
                <feature.icon size={28} className="text-hustlance-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-hustlance-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center ${isVisible ? 'opacity-100 animate-fade-in animate-delay-400' : 'opacity-0'}`}>
          <Link to="/about">
            <button className="btn-secondary">
              Learn More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
