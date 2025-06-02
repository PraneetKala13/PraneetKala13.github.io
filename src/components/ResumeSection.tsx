
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'New York, NY',
      period: '2022 - Present',
      description: 'Lead frontend development for enterprise applications, mentor junior developers, and implement modern web technologies.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented new design system'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      achievements: [
        'Built 15+ client websites',
        'Reduced load times by 30%',
        'Improved accessibility scores'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Studio',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Started career building websites and learning modern development practices in a fast-paced startup environment.',
      achievements: [
        'Contributed to 10+ projects',
        'Learned React and TypeScript',
        'Participated in code reviews'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'Boston, MA',
      period: '2015 - 2019',
      details: 'Graduated Summa Cum Laude, focused on web development and software engineering'
    },
    {
      degree: 'Web Development Bootcamp',
      school: 'Code Academy',
      location: 'Online',
      period: '2019',
      details: 'Intensive 6-month program covering full-stack development'
    }
  ];

  const certifications = [
    'AWS Certified Developer Associate',
    'Google Analytics Certified',
    'React Developer Certification',
    'Accessibility Specialist (IAAP)'
  ];

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Resume</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              My professional journey and the experiences that have shaped my career.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download PDF Resume
            </Button>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary mr-3" size={32} />
              <h3 className="text-3xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="text-primary mr-3" size={32} />
              <h3 className="text-3xl font-semibold">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm mr-4">{edu.period}</span>
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-primary mr-3" size={32} />
              <h3 className="text-3xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Award className="text-primary mx-auto mb-3" size={24} />
                    <p className="text-sm font-medium">{cert}</p>
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

export default ResumeSection;
