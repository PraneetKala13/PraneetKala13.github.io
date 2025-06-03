
import {  Cog, Clipboard, Shuffle, Users, BarChart, Download, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const skills = [
    {
      icon: 'Cog',
      title: 'Systems Engineering',
      description: 'Designing and managing complex systems over their life cycles',
      technologies: ['MATLAB', 'Simulink', 'Python', 'C/C++', 'Git', 'Docker', 'VMWare', 'DevOps', 'CI/CD']
    },
    {
      icon: 'Clipboard',
      title: 'Project Management',
      description: 'Planning, executing, and closing projects to achieve specific goals',
      technologies: ['Python', 'SQL', 'Microsoft Suite', 'PowerBI', 'Git', 'CI/CD']
    },
    {
      icon: 'Shuffle',
      title: 'Agile Methodologies',
      description: 'Focusing on iterative development with evolving requirements',
      technologies: ['Python', 'Bash', 'Git', 'Docker', 'DevOps', 'CI/CD']
    },
    {
      icon: 'Users',
      title: 'Customer Relationship Management (CRM)',
      description: 'Managing relationships and interactions with potential and current customers',
      technologies: ['Python', 'SQL', 'HTML', 'Microsoft Suite', 'PowerBI', 'Git']
    },
    {
      icon: 'BarChart',
      title: 'Data Processing and Visualization',
      description: 'Collecting, manipulating, and graphically representing data to produce meaningful insights',
      technologies: ['Python', 'R', 'SQL', 'Pandas', 'Numpy', 'Scikit', 'PowerBI', 'Shiny']
    }
  ];

  const handleDownloadResume = () => {
    // For now, this will alert the user. Once you provide the resume, we can implement actual download
    alert('Resume download will be available once you provide the resume file. Please share your resume so I can integrate it properly!');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer and creative problem solver dedicated to crafting exceptional digital experiences 
              that make a meaningful impact in people's lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 rounded-2xl p-8 h-96 flex items-center justify-center shadow-lg border border-orange-200/50">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                    <User size={48} className="text-white" />
                  </div>
                  <p className="text-muted-foreground font-medium">Professional Photo</p>
                  <p className="text-sm text-muted-foreground mt-1">Upload your photo to replace this placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-orange-800">My Journey</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hello! I'm Praneet Jayant Kala, a passionate developer with a deep love for creating digital 
                  experiences that seamlessly blend functionality with beautiful design. My journey in web 
                  development began with curiosity and has evolved into a dedicated pursuit of excellence 
                  in crafting solutions that truly matter.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With expertise spanning modern frontend technologies and a keen eye for user experience, 
                  I specialize in transforming complex ideas into intuitive, accessible, and performant web 
                  applications. Every project is an opportunity to push boundaries and deliver something extraordinary.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not immersed in code, you'll find me exploring emerging technologies, contributing 
                  to open source projects, and constantly learning new ways to solve problems creatively. 
                  I believe in the power of continuous growth and staying at the forefront of industry innovation.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-orange-800">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['MATLAB', 'Simulink', 'VHDL', 'Power BI', 'Python', 'GIT', 'Docker', 'PostgreSQL'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200/50 hover:shadow-sm transition-shadow duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleDownloadResume}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                size="lg"
              >
                <Download className="mr-2" size={20} />
                Download My Resume
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-200/50 hover:border-orange-300/70 bg-white/70 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <skill.icon size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-orange-800">{skill.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                  <div className="space-y-1">
                    {skill.technologies.map((tech) => (
                      <div 
                        key={tech}
                        className="text-xs text-orange-700 bg-orange-100/70 px-2 py-1 rounded inline-block mr-1 mb-1 border border-orange-200/50"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
