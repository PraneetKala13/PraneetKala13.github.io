import { ExternalLink, TrendingUp, Car, Cpu, Brain, Rocket, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/profileData';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
          <div className="mb-12">
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

          {/* Explore More CTA */}
          <div className="text-center">
            <Button
              onClick={() => navigate('/projects')}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white hover:from-emerald-600 hover:to-sky-600 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
            >
              Explore More Projects
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
