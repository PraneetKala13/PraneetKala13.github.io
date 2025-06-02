import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Firebase', 'Vuetify'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and beautiful data visualizations.',
      image: '/placeholder.svg',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.',
      image: '/placeholder.svg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for bloggers with markdown support, SEO optimization, and social sharing capabilities.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'MDX', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Mobile App UI',
      description: 'A beautiful mobile application interface design with micro-interactions and modern UI patterns.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Expo', 'Styled Components'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-warm-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">My Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my favorite projects that showcase my skills and passion for development.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/30 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <ExternalLink size={24} className="text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm">Project Screenshot</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github size={16} />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/5 text-primary rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
