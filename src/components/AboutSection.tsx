import { Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MetricsHighlight from './MetricsHighlight';
import { personalInfo, toolsAndTech } from '@/data/profileData';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-lime-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A blend of engineering discipline and innovation mindset, dedicated to creating meaningful impact through technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-emerald-100 via-sky-100 to-lime-100 rounded-2xl p-4 shadow-lg border border-emerald-200/50 overflow-hidden">
                <img
                  src="/DSC_4972_enhanced_2.JPG"
                  alt="Praneet Jayant Kala"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-200/30 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-800">My Journey</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm Praneet Jayant Kala, a consultant and product strategist blending functionality with innovation.
                  My journey began with a BSc in Mechanical Engineering from the University of the Witwatersrand,
                  where I developed a strong foundation in systems thinking and analytical problem-solving.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Opti-Num Solutions, I progressed from Application Engineer to Team Lead, managing enterprise
                  clients in Aerospace & Defence, Automotive and Energy sectors. I delivered digital enablement
                  initiatives across 20+ institutions and facilitated 50+ workshops.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I then moved to Sweden to complete my MSc in Innovation Management at KTH Royal Institute of Technology
                  as a Swedish Institute Scholar. During my thesis at Piab Group, I drove an 84% increase in AI chatbot
                  adoption and 97% growth in feature interactions through data-driven insights and strategic recommendations.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-200/30 shadow-sm">
                <h4 className="text-lg font-semibold mb-4 text-emerald-800">What Drives Me</h4>
                <p className="text-gray-700 leading-relaxed">
                  I thrive at the intersection of strategy and execution, turning complex ideas into actionable plans.
                  Whether it's facilitating stakeholder workshops, building AI-enabled prototypes, or leading
                  cross-functional teams, I bring a collaborative leadership style focused on clarity and impact.
                </p>
              </div>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                size="lg"
              >
                <a
                  href={personalInfo.resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2" size={20} />
                  Download My Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Key Impact Metrics */}
          <div className="mb-16">
            <MetricsHighlight />
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-emerald-800">Tools & Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(toolsAndTech).map(([category, tools]) => (
                <Card
                  key={category}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-emerald-200/50 hover:border-emerald-300/70 bg-white/70 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4 text-emerald-800">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-sky-100 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200/50 hover:shadow-sm transition-shadow duration-200"
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

export default AboutSection;
