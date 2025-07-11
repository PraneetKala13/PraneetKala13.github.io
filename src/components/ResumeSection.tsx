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
        'Increased chatbot usage by <strong>84%</strong> and interactions by <strong>97%</strong> through product analytics and user behaviour insights.',
        'Delivered real-time dashboards (Power BI), improving task prioritisation and reducing resolution time by 18%, leading to a <strong>5.71% productivity uplift.</strong>',
        'Defined reporting architecture aligned to product KPIsa, reducing reporting cycles by <strong>30%.</strong>',
        'Presented strategic recommendations to C-level leadership, influencing a <strong>12-month digital adoption roadmap.</strong>',
        'Championed adoption initiatives across internal platforms indirectly through the thesis research, increasing active user engagement by <strong>50%</strong> within 3 months.'
      ],
      skills: 'Power BI, data visualisation, data-driven decision-making, project management, agile methodologies, Python'
    },
    {
      title: 'Team Lead/Project Manager',
      company: 'Opti-Num Solutions (Distributors of MathWorks tools)',
      location: 'Johannesburg, South Africa',
      period: 'July 2021 - July 2022',
      description: 'Led cross-functional teams while managing client relationships and delivering tailored solutions for enhanced business performance.',
      achievements: [
        'Managed 7 team members across 3 business units, delivering 4 internal digital tools that reduced manual processing time by <strong>40%.</strong>',
        'Rolled out workflow automation products cutting lead times by <strong>~30%</strong> and increasing cross-team request throughput by <strong>25%.</strong>',
        'Oversaw portfolio of <strong>15+ digital tools</strong>, executing product lifecycle strategies from concept to scale, improving time-to-value by <strong>28%</strong>.',
        'Managed customer portfolios for 12+ enterprise clients in <strong>Aerospace & Defence, Automotive and Energy</strong>, which includes SAAB, Hensoldt, Denel Dynamics, Paramount and Milkor, boosting satisfaction by <strong>25%</strong> and achieving <strong>100% portfolio retention</strong>.',
        'Instituted agile feedback frameworks that aligned cross-functional teams & improved delivery cadence by <strong>22%</strong>.',
        'Instituted agile delivery practices and stakeholder feedback loops, enhancing visibility and delivery pace.'
      ],
      skills: 'Agile methodologies, cross-functional leadership, data-driven decision-making, Project Management, customer engagement, process optimisation, MATLAB/Simulink, CRM'
    },
    {
      title: 'Senior Consultant/Project Manager',
      company: 'Opti-Num Solutions (Distributors of MathWorks tools)',
      location: 'Johannesburg, South Africa',
      period: 'July 2020 - June 2021',
      description: 'Delivered complex software solutions for Model-Based Systems Engineering while managing high-stakes defence sector projects.',
      achievements: [
        'Delivered 5 custom software platforms for defence clients (SAAB, Denel), improving data processing by <strong>20%</strong> and cutting deployment time by <strong>15%</strong>.',
        'Designed tailored architectures and led implementation across defence and R&D use cases.',
        'Defined MVP scope and backlog; achieved <strong>90%</strong> feature delivery accuracy within client-set deadlines.',
        'Embedded traceability and compliance processes that reduced documentation effort by <strong>35%</strong>.',
        'Supported budget planning and vendor cost optimisation efforts, contributing to <strong>15% savings</strong> across digital tools procurement.'

      ],
      skills: 'MATLAB, Simulink, HDL, Python, Linux, DevOps, C/C++, project management, agile, CRM'
    },
    {
      title: 'Junior Application Engineer → Consultant June 2016 - June 2020',
      company: 'Opti-Num Solutions (Distributors of MathWorks tools)',
      location: 'Johannesburg, South Africa',
      period: 'June 2016 - June 2020',
      description: 'Delivered specialised engineering consulting with tailored solutions for the education sector.',
      achievements: [
        'Built and delivered digital education solutions using MATLAB and Simulink across <strong>20+</strong> institutions.',
        'Facilitated <strong>50+</strong> technical enablement workshops and integration planning sessions.',
        'Introduced low-cost hardware (e.g., Raspberry Pi) into academic settings, fostering digital innovation.'

      ],
      skills: 'Engineering consulting, client training, modelling, simulation, control systems, estimation, software engineering'
    }
    // {
    //  title: 'Junior Application Engineer',
    //  company: 'Opti-Num Solutions',
    //  location: 'Johannesburg, South Africa',
    //  period: 'June 2016 - January 2018',
    //  description: 'Started career in application engineering, developing foundational skills in technical solution delivery.',
    //  achievements: [
    //    'Started career in application engineering, delivering low-cost hardware solutions (Raspberry Pi, Arduino) to the Education sector',
    //    'Led large-scale seminars and workshops for educational institutions'
    //  ],
    //  skills: 'Hardware solutions, Raspberry Pi, Arduino, education sector engagement, workshops, seminars'
    //}
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
                            <span
                              className="text-sm"
                              dangerouslySetInnerHTML={{ __html: achievement }}
                            />
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
