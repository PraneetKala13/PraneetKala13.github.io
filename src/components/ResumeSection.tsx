import { Calendar, MapPin, Award, GraduationCap, Briefcase, Download, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experiences, education, certifications, personalInfo } from '@/data/profileData';

const ResumeSection = () => {
  // Split experiences into before and after MSc
  const recentExperiences = experiences.slice(0, 3); // Current roles
  const previousExperiences = experiences.slice(3); // Opti-Num roles

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Resume</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              My professional journey and the experiences that have shaped my career
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              size="lg"
            >
              <a
                href={personalInfo.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2" size={20} />
                Download Full Resume
              </a>
            </Button>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary mr-3" size={32} />
              <h3 className="text-3xl font-semibold">Work Experience</h3>
            </div>

            {/* Recent Experiences */}
            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-sky-400 ml-4 hidden md:block"></div>

              {recentExperiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-emerald-500 hover:shadow-lg transition-shadow duration-300 ml-0 md:ml-10">
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
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Career Break Separator */}
              <div className="flex items-center justify-center py-6 ml-0 md:ml-10">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
                <div className="px-6 py-2 bg-emerald-100 rounded-full border border-emerald-200 flex items-center">
                  <BookOpen size={16} className="mr-2 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-800">Career break for full-time MSc studies</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
              </div>

              {/* Previous Experiences */}
              {previousExperiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-sky-500 hover:shadow-lg transition-shadow duration-300 ml-0 md:ml-10">
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
                            <div className="w-2 h-2 bg-sky-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span
                              className="text-sm"
                              dangerouslySetInnerHTML={{ __html: achievement }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {exp.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-sky-100 text-sky-800 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
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
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-emerald-200/50">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm mr-4">{edu.period}</span>
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{edu.details}</p>
                    {edu.focusAreas && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {edu.focusAreas.map((area, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs border border-emerald-200/50"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    )}
                    {edu.highlight && (
                      <div className="mt-3 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200/50">
                        <div className="flex items-center">
                          <Award size={16} className="text-amber-600 mr-2" />
                          <span className="text-sm font-medium text-amber-800">{edu.highlight}</span>
                        </div>
                      </div>
                    )}
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
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-white" size={24} />
                    </div>
                    <h4 className="text-sm font-semibold mb-2">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-emerald-600 font-medium mt-1">
                      {cert.year}
                      {cert.note && ` (${cert.note})`}
                    </p>
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
