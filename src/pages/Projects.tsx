import { ExternalLink, FileText, TrendingUp, Car, Cpu, Brain, Rocket, GraduationCap, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects, publication } from '@/data/profileData';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp,
  Car,
  Cpu,
  Brain,
  Rocket,
  GraduationCap
};

const Projects = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-lime-50">
      <Navigation />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">

          {/* Back button + header */}
          <div className="mb-12">
            <Button
              variant="ghost"
              className="mb-6 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-100 -ml-2"
              onClick={() => navigate('/#projects')}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">All Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A full overview of my work spanning AI/ML, product development, systems engineering, and digital transformation.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-emerald-800">Featured Work</h2>
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
                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
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
                      <h3 className="text-xl font-semibold text-emerald-800 mb-1">{project.title}</h3>
                      <p className="text-sm text-emerald-600 mb-3 font-medium">{project.category} • {project.period}</p>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium border border-emerald-200">
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

          {/* Additional Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-emerald-800">Additional Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => {
                const IconComponent = iconMap[project.icon] || Rocket;
                return (
                  <Card
                    key={project.title}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-emerald-200/50 bg-white/70 backdrop-blur-sm"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center shadow-md">
                          <IconComponent size={18} className="text-white" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'In Development'
                          ? 'bg-sky-500 text-white'
                          : 'bg-emerald-600 text-white'
                          }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-emerald-800 leading-tight">{project.title}</h3>
                        {project.liveUrl !== '#' && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-emerald-600 hover:text-emerald-800 flex-shrink-0 ml-2"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink size={15} />
                          </Button>
                        )}
                      </div>
                      <p className="text-xs text-emerald-600 mb-3 font-medium">{project.category} • {project.period}</p>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs border border-emerald-200/50">
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

          {/* Publication */}
          <div className="relative rounded-xl p-8 border border-emerald-200/30 shadow-sm overflow-hidden mb-16">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url("/Screenshot 2025-09-22 083100.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Research Publication</h2>
                <p className="text-muted-foreground">Peer-reviewed academic contribution to the field</p>
              </div>
              <Card className="border-emerald-200/50 bg-gradient-to-r from-emerald-50/90 to-sky-50/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <FileText size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-emerald-800 mb-2">{publication.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Authors:</strong> {publication.authors}</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>Publisher:</strong> {publication.publisher} • <strong>Date:</strong> {publication.date}
                      </p>
                      <a href={publication.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                          <FileText size={16} className="mr-2" />
                          View Publication
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
