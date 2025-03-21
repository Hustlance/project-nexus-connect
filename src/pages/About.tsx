
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

// Team member data
const teamMembers = [
  {
    name: "Aditya Sharma",
    role: "Founder & Lead Project Manager",
    bio: "Engineering student with a passion for innovation and technology. Aditya started Hustlance to help fellow students bring their project ideas to reality.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    name: "Neha Patel",
    role: "Technology Lead",
    bio: "Computer Science expert specializing in software development and AI applications. Neha brings technical expertise to every project she supervises.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80"
  },
  {
    name: "Ravi Khanna",
    role: "Design & Architecture Specialist",
    bio: "Architecture student with an eye for detail and creative design solutions. Ravi helps students develop aesthetically pleasing and functional prototypes.",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80"
  },
  {
    name: "Priya Reddy",
    role: "Project Coordinator",
    bio: "Organized and detail-oriented management student. Priya ensures smooth communication between team members and helps students stay on track with their project timelines.",
    image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  }
];

// Approach steps
const approachSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a thorough discussion of your project idea, goals, and requirements.",
    icon: "👋"
  },
  {
    title: "Project Planning",
    description: "Our team creates a detailed roadmap with milestones, resources needed, and timeline.",
    icon: "📝"
  },
  {
    title: "Hands-on Development",
    description: "Work alongside our experts to bring your project to life with regular guidance.",
    icon: "🛠️"
  },
  {
    title: "Testing & Refinement",
    description: "Rigorous testing to ensure your project meets all requirements and functions perfectly.",
    icon: "🔍"
  },
  {
    title: "Final Review & Documentation",
    description: "Complete documentation and final presentation preparation to showcase your project.",
    icon: "📊"
  }
];

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const [teamVisible, setTeamVisible] = useState(false);
  const [approachVisible, setApproachVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const teamObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTeamVisible(true);
        teamObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const approachObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setApproachVisible(true);
        approachObserver.unobserve(entry.target);
      }
    }, observerOptions);

    if (teamRef.current) teamObserver.observe(teamRef.current);
    if (approachRef.current) approachObserver.observe(approachRef.current);

    return () => {
      if (teamRef.current) teamObserver.unobserve(teamRef.current);
      if (approachRef.current) approachObserver.unobserve(approachRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(106,61,232,0.05),transparent_50%)]"></div>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hustlance-dark mb-6 opacity-0 animate-fade-in">
            About <span className="text-hustlance-primary">Hustlance</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Helping You Build Your Dreams
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in">
              <h2 className="section-heading text-left">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Hustlance was born from a simple observation: many students have brilliant project ideas but lack the guidance, resources, or technical expertise to bring them to life.
              </p>
              <p className="text-gray-600 mb-6">
                Founded by a group of passionate students who faced similar challenges, we created Hustlance to bridge this gap. Our founders combined their diverse skills in engineering, design, and project management to create a platform where students can receive mentorship and practical assistance.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped dozens of students complete outstanding projects across various disciplines—from engineering prototypes to software applications and design portfolios.
              </p>
            </div>
            <div className="relative h-[400px] opacity-0 animate-fade-in animate-delay-200">
              <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-hustlance-secondary opacity-10 rounded-full filter blur-3xl"></div>
              <div className="glass-card w-full h-full rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" 
                  alt="Hustlance team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 px-4 bg-hustlance-light">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`section-heading ${teamVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
              Meet Our Team
            </h2>
            <p className={`section-subheading ${teamVisible ? 'opacity-100 animate-fade-in animate-delay-100' : 'opacity-0'}`}>
              A dedicated group of students passionate about helping peers succeed with their projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`glass-card p-6 rounded-xl text-center transition-all hover:shadow-hover ${
                  teamVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-semibold mb-1 text-hustlance-dark">
                  {member.name}
                </h3>
                <p className="text-hustlance-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={approachRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`section-heading ${approachVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
              The Hustlance Approach
            </h2>
            <p className={`section-subheading ${approachVisible ? 'opacity-100 animate-fade-in animate-delay-100' : 'opacity-0'}`}>
              Our systematic method ensures your project is completed to the highest standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {approachSteps.map((step, index) => (
              <div 
                key={step.title}
                className={`flex gap-6 mb-8 ${
                  approachVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-hustlance-muted flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-hustlance-dark">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
