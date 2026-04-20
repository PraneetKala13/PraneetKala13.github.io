import { Calendar, MapPin, Award, GraduationCap, Briefcase, Download, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experiences, education, certifications, personalInfo } from '@/data/profileData';

// Index after which the MSc career break separator is inserted
const BREAK_AFTER = 2;

const ExperienceCard = ({ exp }: { exp: typeof experiences[0] }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300 border-emerald-200/60 bg-white">
    <CardContent className="p-5">
      <h4 className="text-base font-semibold text-foreground leading-tight">{exp.title}</h4>
      <p className="text-primary font-medium text-sm mt-0.5">{exp.company}</p>
      <div className="flex items-center gap-3 mt-1.5 mb-3 text-muted-foreground">
        <span className="flex items-center gap-1 text-xs">
          <Calendar size={12} />
          {exp.period}
        </span>
        <span className="flex items-center gap-1 text-xs">
          <MapPin size={12} />
          {exp.location}
        </span>
      </div>
      <ul className="space-y-1.5">
        {exp.achievements.slice(0, 2).map((a, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: a }} />
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Resume</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and the experiences that have shaped my career
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center mb-10">
              <Briefcase className="text-primary mr-3" size={28} />
              <h3 className="text-3xl font-semibold">Work Experience</h3>
            </div>

            {/* ── Desktop zigzag timeline ── */}
            <div className="hidden md:block relative">
              {/* Vertical centre line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-sky-400 to-emerald-400" />

              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const showBreak = index === BREAK_AFTER + 1;

                return (
                  <div key={index}>
                    {/* MSc career break separator */}
                    {showBreak && (
                      <div className="relative flex justify-center items-center my-4 z-10">
                        <div className="px-5 py-2 bg-emerald-50 border border-emerald-200 rounded-full flex items-center gap-2 shadow-sm">
                          <BookOpen size={14} className="text-emerald-600" />
                          <span className="text-xs font-medium text-emerald-800">
                            Career break — full-time MSc studies (Aug 2022 – Aug 2024)
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="relative flex items-start mb-8">
                      {/* Left slot */}
                      <div className="w-[calc(50%-24px)] pr-8">
                        {isLeft && <ExperienceCard exp={exp} />}
                      </div>

                      {/* Centre dot */}
                      <div className="w-12 flex-shrink-0 flex flex-col items-center pt-5 z-10">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-md" />
                      </div>

                      {/* Right slot */}
                      <div className="w-[calc(50%-24px)] pl-8">
                        {!isLeft && <ExperienceCard exp={exp} />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Mobile single-column timeline ── */}
            <div className="md:hidden relative pl-6">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 to-sky-400" />
              {experiences.map((exp, index) => {
                const showBreak = index === BREAK_AFTER + 1;
                return (
                  <div key={index}>
                    {showBreak && (
                      <div className="relative flex items-center my-4">
                        <div className="absolute -left-6 w-4 h-4 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center">
                          <BookOpen size={8} className="text-emerald-600" />
                        </div>
                        <div className="ml-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
                          <span className="text-[11px] font-medium text-emerald-800">MSc studies break</span>
                        </div>
                      </div>
                    )}
                    <div className="relative mb-6">
                      <div className="absolute -left-[18px] top-5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow" />
                      <ExperienceCard exp={exp} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download button below timeline */}
            <div className="text-center mt-10">
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                size="lg"
              >
                <a href={personalInfo.resumeUrl} download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" size={18} />
                  Download Full Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="text-primary mr-3" size={28} />
              <h3 className="text-3xl font-semibold">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-emerald-200/50">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Calendar size={14} className="mr-2" />
                      <span className="text-sm mr-4">{edu.period}</span>
                      <MapPin size={14} className="mr-2" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{edu.details}</p>
                    {edu.focusAreas && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {edu.focusAreas.map((area, idx) => (
                          <span key={idx} className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs border border-emerald-200/50">
                            {area}
                          </span>
                        ))}
                      </div>
                    )}
                    {edu.highlight && (
                      <div className="mt-3 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200/50">
                        <div className="flex items-center">
                          <Award size={14} className="text-amber-600 mr-2 flex-shrink-0" />
                          <span className="text-sm font-medium text-amber-800">{edu.highlight}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-primary mr-3" size={28} />
              <h3 className="text-3xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-white" size={22} />
                    </div>
                    <h4 className="text-sm font-semibold mb-2">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-emerald-600 font-medium mt-1">{cert.year}</p>
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
