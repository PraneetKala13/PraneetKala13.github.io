import { Calendar, MapPin, Award, GraduationCap, Briefcase, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const experiences = [
    {
      title: 'Master Thesis Internship',
      company: 'Piab Group',
      location: 'Stockholm, Sweden',
      period: 'February 2024 - June 2024',
      description: 'Conducted comprehensive analysis of AI chatbot adoption and implementation for business optimization.',
      achievements: [
        'Conducted comprehensive analysis of AI chatbot adoption trends, identifying key drivers behind an 84% increase in usage and 97% growth in interactions',
        'Analysed complex datasets using PowerBI and advanced statistical methods, uncovering insights that boosted productivity by 1.42%',
        'Designed and implemented real-time reporting mechanisms, enabling prompt identification of bottlenecks; achieved 5.41% time savings and a 5.71% productivity increase over 16 weeks'
      ],
      skills: 'Power BI, data visualisation, data-driven decision-making, project management, agile methodologies, Python'
    },
    {
      title: 'Team Lead/Project Manager',
      company: 'Opti-Num Solutions',
      location: 'Johannesburg, South Africa',
      period: 'July 2021 - July 2022',
      description: 'Led cross-functional teams while managing client relationships and delivering tailored solutions for enhanced business performance.',
      achievements: [
        'Led a team of 7 direct and indirect reports across sales, marketing, and management to drive business objectives and enhance customer satisfaction',
        'Developed tailored solutions addressing operational inefficiencies revealed during client consultations, enabling actionable insights that improved productivity',
        'Executed strategic initiatives resulting in a 25% increase in client satisfaction ratings, maintained 100% client retention, and expanded the portfolio by 50%'
      ],
      skills: 'Agile methodologies, cross-functional leadership, data-driven decision-making, Project Management, customer engagement, process optimisation, MATLAB/Simulink, CRM'
    },
    {
      title: 'Senior Consultant/Project Manager',
      company: 'Opti-Num Solutions',
      location: 'Johannesburg, South Africa',
      period: 'July 2020 - June 2021',
      description: 'Delivered complex software solutions for Model-Based Systems Engineering while managing high-stakes defence sector projects.',
      achievements: [
        'Delivered five software projects utilising MATLAB and Simulink to enhance industry-specific workflows for key clients including Incomar, Hensoldt, and CSIR',
        'Developed a customised system architecture following comprehensive requirements analysis for a defence client, improving project timelines by 20%',
        'Crafted tailored solutions through rigorous needs assessments, resolving critical challenges during complex project implementation phases'
      ],
      skills: 'MATLAB, Simulink, HDL, Python, Linux, DevOps, C/C++, project management, agile, CRM'
    },
    {
      title: 'Consultant',
      company: 'Opti-Num Solutions',
      location: 'Johannesburg, South Africa',
      period: 'February 2018 - June 2020',
      description: 'Delivered specialised engineering consulting with tailored solutions for the education sector.',
      achievements: [
        'Delivered specialised engineering consulting with tailored solutions for the education sector',
        'Built strong client partnerships through hands-on demos, training, and workshops',
        'Resolved complex challenges in modelling, simulation, control, estimation, and software engineering'
      ],
      skills: 'Engineering consulting, client training, modelling, simulation, control systems, estimation, software engineering'
    },
    {
      title: 'Junior Application Engineer',
      company: 'Opti-Num Solutions',
      location: 'Johannesburg, South Africa',
      period: 'June 2016 - January 2018',
      description: 'Started career in application engineering, developing foundational skills in technical solution delivery.',
      achievements: [
        'Started career in application engineering, delivering low-cost hardware solutions (Raspberry Pi, Arduino) to the Education sector',
        'Led large-scale seminars and workshops for educational institutions'
      ],
      skills: 'Hardware solutions, Raspberry Pi, Arduino, education sector engagement, workshops, seminars'
    }
  ];

  const education = [
    {
      degree: 'MSc in Innovation Management and Product Development',
      school: 'KTH Royal Institute of Technology',
      location: 'Stockholm, Sweden',
      period: 'August 2022 - September 2024',
      details: 'Master of Science degree focusing on innovation management and product development methodologies'
    },
    {
      degree: 'BSc in Mechanical Engineering',
      school: 'University of the Witwatersrand',
      location: 'Johannesburg, South Africa',
      period: 'February 2010 - April 2016',
      details: 'Bachelor of Science degree in Mechanical Engineering with focus on systems and control engineering'
    }
  ];

  const certifications = [
    'Project Management - Project Planning: Putting It All Together (Google)',
    'Agentic AI and AI Agents for Leaders (Vanderbilt University)',
    'Project Management - Foundations of Project Management (Google)',
    'Agile Crash Course: Agile Project Management (Udemy)'
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
                asChild
                className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                size="lg"
              >
                <a
                  href="https://github.com/PraneetKala13/PraneetKala13.github.io/raw/main/public/Resume - Praneet Kala.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2" size={20} />
                  Download My Resume
                </a>
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
                    {exp.achievements.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {exp.skills && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-muted-foreground">
                          <span className="font-semibold">Skills:</span> {exp.skills}
                        </p>
                      </div>
                    )}
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
            <div className="grid md:grid-cols-2 gap-4">
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
