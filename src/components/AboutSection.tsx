import { useState } from 'react';
import { Brain, Map, Workflow, BarChart3, Users, Rocket, ClipboardCheck, CheckCircle, Download, MapPin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, coreCapabilities, technologyFocus } from '@/data/profileData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain, Map, Workflow, BarChart3, Users, Rocket, ClipboardCheck,
};

type Tab = 'about' | 'bring' | 'focus';

const tabs: { id: Tab; label: string }[] = [
  { id: 'about',  label: 'About'        },
  { id: 'bring',  label: 'What I Bring' },
  { id: 'focus',  label: 'Focus Areas'  },
];

const stats = [
  { value: '6+',    label: 'Years Experience'   },
  { value: '12+',   label: 'Enterprise Clients'  },
  { value: 'R1.6m+', label: 'Portfolio Managed' },
  { value: '2',     label: 'Degrees (MSc + BSc)' },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-lime-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging engineering discipline and innovation mindset to deliver measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* ── Left: photo + meta ── */}
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-emerald-100 via-sky-100 to-lime-100 rounded-2xl p-3 shadow-lg border border-emerald-200/50 overflow-hidden">
                <img
                  src="/DSC_4972_enhanced_2.JPG"
                  alt="Praneet Jayant Kala"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/70 rounded-full text-sm text-gray-600 border border-emerald-200/50">
                  <MapPin size={13} className="text-emerald-600" />
                  South Africa
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 rounded-full text-sm text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  Open to relocation
                </span>
              </div>
            </div>

            {/* ── Right: tabbed content ── */}
            <div className="md:col-span-3 flex flex-col">

              {/* Tab bar */}
              <div className="flex gap-1 p-1 bg-white/60 rounded-xl border border-emerald-200/30 mb-5">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content panel */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-200/30 shadow-sm flex-1">

                {/* About */}
                <div className={activeTab === 'about' ? 'block' : 'hidden'}>
                  <h3 className="text-base font-semibold text-emerald-800 mb-3">My Journey</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    I'm Praneet Jayant Kala — a Technical Project Manager blending engineering discipline
                    with an innovation mindset. My career began with a BSc in Mechanical Engineering from
                    the University of the Witwatersrand, progressed through enterprise IT delivery at
                    Opti-Num Solutions across aerospace, defence and automotive sectors, and deepened
                    at KTH Royal Institute of Technology as a Swedish Institute Scholar.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    I thrive at the intersection of strategy and execution — turning complex requirements
                    into structured delivery plans, aligning cross-functional teams, and driving
                    measurable outcomes across regulated industries.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white shadow-md"
                  >
                    <a href={personalInfo.resumeUrl} download target="_blank" rel="noopener noreferrer">
                      <Download size={14} className="mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                {/* What I Bring */}
                <div className={activeTab === 'bring' ? 'block' : 'hidden'}>
                  <div className="space-y-2">
                    {coreCapabilities.map((cap, i) => {
                      const Icon = iconMap[cap.icon] || CheckCircle;
                      return (
                        <div
                          key={i}
                          className="flex items-center p-2.5 bg-white/70 rounded-lg border border-emerald-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-200"
                        >
                          <div className="w-7 h-7 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <Icon size={14} className="text-white" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{cap.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Focus Areas */}
                <div className={activeTab === 'focus' ? 'block' : 'hidden'}>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {technologyFocus.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/70 text-sky-800 rounded-full text-sm font-medium border border-sky-200 hover:border-sky-300 transition-colors duration-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {stats.map((s, i) => (
                      <div key={i} className="text-center p-3 bg-white/60 rounded-lg border border-emerald-100">
                        <div className="text-xl font-bold text-emerald-600">{s.value}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll to next section */}
      <div className="flex justify-center pb-8">
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce hover:bg-primary/10 transition-colors duration-300"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
