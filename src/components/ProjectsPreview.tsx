
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Smart Home Automation",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "A comprehensive home automation system designed for efficiency and convenience."
  },
  {
    id: 2,
    title: "E-Learning Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "An interactive educational platform for remote learning and knowledge sharing."
  },
  {
    id: 3,
    title: "Urban Planning Model",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Sustainable urban development model with innovative space utilization."
  }
];

const ProjectsPreview = () => {
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-heading ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            Featured Projects
          </h2>
          <p className={`section-subheading ${isVisible ? 'opacity-100 animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            Explore some of our recent work and discover how we've helped students bring their visions to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id}
              className={`project-card shadow-card rounded-xl overflow-hidden transform transition-all ${
                isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="project-info text-white">
                  <span className="tag mb-2">{project.category}</span>
                  <h3 className="text-xl font-display font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={`text-center ${isVisible ? 'opacity-100 animate-fade-in animate-delay-400' : 'opacity-0'}`}>
          <Link to="/projects">
            <button className="btn-primary flex items-center gap-2 mx-auto">
              View All Projects <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
