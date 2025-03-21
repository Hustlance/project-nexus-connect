
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Calendar, CheckCircle2, Code2, Cpu, Lightbulb } from "lucide-react";

// Sample project detailed data
const projectsData = [
  {
    id: 1,
    title: "Smart Home Automation",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "A comprehensive home automation system designed for efficiency and convenience. This project integrates various smart devices to create a unified control system for lighting, climate, security, and entertainment.",
    tags: ["IoT", "Engineering", "Electronics"],
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "Node.js", "React"],
    client: "Final Year Engineering Student",
    duration: "3 months",
    completion: "May 2023",
    challenges: [
      "Integrating multiple device protocols into a unified system",
      "Creating a responsive and intuitive user interface",
      "Implementing robust security measures to protect the system"
    ],
    solutions: [
      "Developed a middleware layer to handle communication between different protocols",
      "Designed a mobile-first interface with user testing feedback",
      "Implemented end-to-end encryption and regular security audits"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1583779791512-eecbcf370bc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1551651653-c5186a1fbba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    ]
  },
  {
    id: 2,
    title: "E-Learning Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "An interactive educational platform for remote learning and knowledge sharing. The platform features course creation tools, student engagement analytics, and integrated assessment capabilities.",
    tags: ["Web", "Education", "UX Design"],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    client: "Education Technology Startup",
    duration: "4 months",
    completion: "August 2023",
    challenges: [
      "Creating a scalable architecture for handling thousands of concurrent users",
      "Implementing real-time video conferencing with minimal latency",
      "Designing an intuitive interface for both educators and students"
    ],
    solutions: [
      "Implemented a microservices architecture with auto-scaling capabilities",
      "Optimized WebRTC connections and implemented regional server deployment",
      "Conducted extensive user research and iterative design process"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
      "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    ]
  },
  {
    id: 3,
    title: "Urban Planning Model",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Sustainable urban development model with innovative space utilization. This project presents a comprehensive approach to urban design that prioritizes sustainability, community engagement, and efficient use of resources.",
    tags: ["Architecture", "3D Modeling", "Sustainability"],
    technologies: ["AutoCAD", "SketchUp", "Revit", "Blender", "GIS Mapping"],
    client: "Urban Studies Graduate Student",
    duration: "5 months",
    completion: "December 2022",
    challenges: [
      "Balancing density requirements with quality of life considerations",
      "Integrating renewable energy systems into the urban landscape",
      "Creating accurate simulation models for traffic and resource usage"
    ],
    solutions: [
      "Developed a parametric design approach that optimized multiple variables",
      "Created innovative building designs with integrated solar and wind systems",
      "Implemented advanced traffic simulation using machine learning models"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2641&q=80"
    ]
  },
  {
    id: 4,
    title: "Health Monitoring App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Mobile application for tracking health metrics and wellness activities. The app integrates with wearable devices and provides personalized insights and recommendations based on user data.",
    tags: ["Mobile", "Healthcare", "UI Design"],
    technologies: ["React Native", "Firebase", "TensorFlow", "Bluetooth LE", "Health Kit API"],
    client: "Medical Technology Student Team",
    duration: "3 months",
    completion: "March 2023",
    challenges: [
      "Ensuring data privacy while providing personalized insights",
      "Creating reliable synchronization with various wearable devices",
      "Developing accurate health prediction models"
    ],
    solutions: [
      "Implemented end-to-end encryption and local data processing where possible",
      "Created a unified device communication protocol with extensive testing",
      "Collaborated with healthcare professionals to develop and validate models"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1551649884-affbe0d6b558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1631555166940-ed4c6c147595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    ]
  },
  {
    id: 5,
    title: "Renewable Energy Solution",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80",
    description: "Solar and wind energy integration system for residential buildings. This project developed an efficient hybrid energy system that optimizes between solar and wind sources based on environmental conditions.",
    tags: ["Energy", "Engineering", "Sustainability"],
    technologies: ["Solar PV", "Wind Turbines", "Energy Storage", "Microcontrollers", "Machine Learning"],
    client: "Renewable Energy Research Group",
    duration: "6 months",
    completion: "October 2023",
    challenges: [
      "Balancing energy production between solar and wind sources",
      "Creating an efficient energy storage and distribution system",
      "Developing predictive models for optimal energy usage"
    ],
    solutions: [
      "Implemented advanced switching algorithms based on real-time conditions",
      "Designed a modular battery system with intelligent charge management",
      "Created an AI-based prediction system for optimal energy harvesting"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    ]
  },
  {
    id: 6,
    title: "Supply Chain Management Tool",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Software solution for tracking and optimizing supply chain operations. This tool provides end-to-end visibility into the supply chain, with advanced analytics and optimization capabilities.",
    tags: ["Software", "Business", "Data Analytics"],
    technologies: ["Python", "Django", "React", "PostgreSQL", "Docker", "Kubernetes"],
    client: "Business Management Graduate Student",
    duration: "4 months",
    completion: "July 2023",
    challenges: [
      "Creating a flexible system that adapts to different supply chain models",
      "Developing accurate forecasting algorithms for inventory management",
      "Building a scalable architecture for handling large datasets"
    ],
    solutions: [
      "Implemented a modular design with customizable components",
      "Integrated multiple forecasting models with automatic selection",
      "Used microservices architecture with containerization for scalability"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch project data
  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === Number(id));
      setProject(foundProject);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <div className="loading-skeleton h-10 w-1/3 mb-4 rounded"></div>
            <div className="loading-skeleton h-96 mb-8 rounded-lg"></div>
            <div className="loading-skeleton h-6 mb-2 rounded"></div>
            <div className="loading-skeleton h-6 mb-2 rounded"></div>
            <div className="loading-skeleton h-6 w-2/3 rounded mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="loading-skeleton h-8 w-1/2 mb-4 rounded"></div>
                <div className="loading-skeleton h-4 mb-2 rounded"></div>
                <div className="loading-skeleton h-4 mb-2 rounded"></div>
                <div className="loading-skeleton h-4 w-3/4 rounded mb-8"></div>
              </div>
              <div>
                <div className="loading-skeleton h-8 w-1/2 mb-4 rounded"></div>
                <div className="loading-skeleton h-4 mb-2 rounded"></div>
                <div className="loading-skeleton h-4 mb-2 rounded"></div>
                <div className="loading-skeleton h-4 w-3/4 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-display font-bold text-hustlance-dark mb-6">
              Project Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/projects">
              <button className="btn-primary">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <Link to="/projects" className="inline-flex items-center text-hustlance-primary hover:text-hustlance-secondary transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hustlance-dark mb-6 opacity-0 animate-fade-in">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8 opacity-0 animate-fade-in animate-delay-100">
            {project.tags.map((tag: string) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Project Gallery */}
          <div className="mb-12 opacity-0 animate-fade-in animate-delay-200">
            <div className="glass-card rounded-xl overflow-hidden shadow-lg">
              <img 
                src={project.gallery[activeImageIndex]} 
                alt={project.title}
                className="w-full h-auto max-h-[600px] object-cover object-center"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4">
              {project.gallery.map((image: string, index: number) => (
                <button 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 h-20 overflow-hidden rounded-lg transition-all ${
                    activeImageIndex === index 
                      ? 'ring-4 ring-hustlance-primary' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="opacity-0 animate-fade-in animate-delay-300">
            <h2 className="text-2xl font-display font-semibold text-hustlance-dark mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-12 opacity-0 animate-fade-in animate-delay-400">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-display font-semibold text-hustlance-dark mb-4 flex items-center">
                  <Cpu size={20} className="mr-2 text-hustlance-primary" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-hustlance-muted text-hustlance-dark rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-display font-semibold text-hustlance-dark mb-4 flex items-center">
                  <Calendar size={20} className="mr-2 text-hustlance-primary" />
                  Project Details
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-medium">Client:</span> {project.client}</li>
                  <li><span className="font-medium">Duration:</span> {project.duration}</li>
                  <li><span className="font-medium">Completed:</span> {project.completion}</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-xl font-display font-semibold text-hustlance-dark mb-4 flex items-center">
                  <Lightbulb size={20} className="mr-2 text-hustlance-primary" />
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-hustlance-primary mr-2 mt-1 flex-shrink-0">
                        <CheckCircle2 size={16} />
                      </span>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-hustlance-dark mb-4 flex items-center">
                  <Code2 size={20} className="mr-2 text-hustlance-primary" />
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-hustlance-primary mr-2 mt-1 flex-shrink-0">
                        <CheckCircle2 size={16} />
                      </span>
                      <span className="text-gray-600">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 border-t border-gray-100 opacity-0 animate-fade-in animate-delay-500">
            <h3 className="text-xl font-display font-semibold text-hustlance-dark mb-4">
              Interested in a similar project?
            </h3>
            <Link to="/contact">
              <button className="btn-primary">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
