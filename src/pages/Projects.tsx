
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sample extended project data
const allProjects = [
  {
    id: 1,
    title: "Smart Home Automation",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "A comprehensive home automation system designed for efficiency and convenience.",
    tags: ["IoT", "Engineering", "Electronics"]
  },
  {
    id: 2,
    title: "E-Learning Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "An interactive educational platform for remote learning and knowledge sharing.",
    tags: ["Web", "Education", "UX Design"]
  },
  {
    id: 3,
    title: "Urban Planning Model",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Sustainable urban development model with innovative space utilization.",
    tags: ["Architecture", "3D Modeling", "Sustainability"]
  },
  {
    id: 4,
    title: "Health Monitoring App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Mobile application for tracking health metrics and wellness activities.",
    tags: ["Mobile", "Healthcare", "UI Design"]
  },
  {
    id: 5,
    title: "Renewable Energy Solution",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80",
    description: "Solar and wind energy integration system for residential buildings.",
    tags: ["Energy", "Engineering", "Sustainability"]
  },
  {
    id: 6,
    title: "Supply Chain Management Tool",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Software solution for tracking and optimizing supply chain operations.",
    tags: ["Software", "Business", "Data Analytics"]
  }
];

// Extract unique categories
const categories = ["All", ...new Set(allProjects.map(project => project.category))];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      if (selectedCategory === "All") {
        setFilteredProjects(allProjects);
      } else {
        const filtered = allProjects.filter(project => project.category === selectedCategory);
        setFilteredProjects(filtered);
      }
      setIsLoading(false);
    }, 300);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(106,61,232,0.05),transparent_50%)]"></div>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hustlance-dark mb-6 opacity-0 animate-fade-in">
            Our <span className="text-hustlance-primary">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Turning Ideas into Reality
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-hustlance-primary text-white'
                    : 'bg-hustlance-muted text-hustlance-dark hover:bg-hustlance-secondary hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons
              Array(6).fill(0).map((_, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-card">
                  <div className="aspect-[4/3] loading-skeleton"></div>
                  <div className="p-6">
                    <div className="h-3 w-3/4 loading-skeleton mb-3 rounded"></div>
                    <div className="h-6 loading-skeleton mb-3 rounded"></div>
                    <div className="h-4 loading-skeleton rounded"></div>
                  </div>
                </div>
              ))
            ) : (
              filteredProjects.map(project => (
                <Link 
                  to={`/projects/${project.id}`} 
                  key={project.id}
                  className="project-card shadow-card rounded-xl overflow-hidden transform transition-all hover:shadow-hover animate-fade-in"
                  style={{ animationDelay: '100ms' }}
                >
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="project-info text-white">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="tag bg-white bg-opacity-20 text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {filteredProjects.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No projects found in this category</h3>
              <button
                className="mt-4 btn-secondary"
                onClick={() => setSelectedCategory("All")}
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
