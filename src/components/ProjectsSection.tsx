import { ExternalLink, FileText, TrendingUp, Car, Cpu, Brain, Rocket, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects, publication } from '@/data/profileData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp,
  Car,
  Cpu,
  Brain,
  Rocket,
  GraduationCap
};

const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-lime-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">My Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work spanning AI/ML, product development, systems engineering, and digital transformation.
              Each project demonstrates innovative problem-solving and measurable impact.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-emerald-800">Featured Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => {
                const IconComponent = iconMap[project.icon] || Rocket;
                return (
                  <Card
                    key={project.title}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-emerald-200/50"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                          <IconComponent size={20} className="text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'In Development'
                          ? 'bg-sky-500 text-white'
                          : 'bg-emerald-600 text-white'
                          }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {project.liveUrl !== '#' && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white text-primary hover:bg-white/90"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink size={16} className="mr-2" />
                            View Project
                          </Button>
                        )}
                        {project.githubUrl !== '#' && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white text-primary hover:bg-white/90"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-emerald-800">{project.title}</h4>
                      </div>
                      <p className="text-sm text-emerald-600 mb-2 font-medium">{project.category} • {project.period}</p>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium border border-emerald-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-emerald-800">Additional Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => {
                const IconComponent = iconMap[project.icon] || Rocket;
                return (
                  <Card
                    key={project.title}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-emerald-200/50 bg-white/70 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center shadow-md">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div className="flex space-x-2">
                          {project.liveUrl !== '#' && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-emerald-600 hover:text-emerald-800"
                              onClick={() => window.open(project.liveUrl, '_blank')}
                            >
                              <ExternalLink size={16} />
                            </Button>
                          )}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-emerald-800">{project.title}</h4>
                      <p className="text-xs text-emerald-600 mb-2 font-medium">{project.category}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${project.status === 'In Development'
                        ? 'bg-sky-100 text-sky-800'
                        : 'bg-emerald-100 text-emerald-800'
                        }`}>
                        {project.status}
                      </span>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs border border-emerald-200/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs border border-emerald-200/50">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Publication Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-emerald-200/30 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Research Publication</h3>
              <p className="text-muted-foreground">Peer-reviewed academic contribution to the field</p>
            </div>
            <Card className="border-emerald-200/50 bg-gradient-to-r from-emerald-50 to-sky-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-emerald-800 mb-2">{publication.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Authors:</strong> {publication.authors}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Publisher:</strong> {publication.publisher} • <strong>Date:</strong> {publication.date}
                    </p>
                    <a href={publication.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                      >
                        <FileText size={16} className="mr-2" />
                        View Publication
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-500 to-sky-500 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, innovative projects, and potential collaborations.
                Let's connect and explore how we can work together.
              </p>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
