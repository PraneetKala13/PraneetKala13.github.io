import { useState } from 'react';
import { Brain, Map, Workflow, BarChart3, Users, Rocket, ClipboardCheck, CheckCircle, Download, ArrowDown, Link2, Zap, Wrench, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, coreCapabilities, aiDataSystems, deliveryTools } from '@/data/profileData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain, Map, Workflow, BarChart3, Users, Rocket, ClipboardCheck, Link2, Zap, Wrench, Layers,
};

type Tab = 'about' | 'bring' | 'focus' | 'tools';

const tabs: { id: Tab; label: string }[] = [
  { id: 'about',  label: 'About'        },
  { id: 'bring',  label: 'What I Bring' },
  { id: 'focus',  label: 'AI & Data Systems'          },
  { id: 'tools',  label: 'Delivery & Product Execution' },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging engineering discipline and innovation mindset to deliver measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-stretch">

            {/* ── Left: photo ── */}
            <div className="md:col-span-2 flex flex-col">
              <div className="bg-background rounded-2xl p-3 shadow-lg border border-border overflow-hidden flex-1">
                <img
                  src="/DSC_4972_enhanced_2.JPG"
                  alt="Praneet Jayant Kala"
                  className="w-full h-full rounded-xl shadow-md object-cover object-top"
                />
              </div>
            </div>

            {/* ── Right: tabbed content ── */}
            <div className="md:col-span-3 flex flex-col">

              {/* Tab bar */}
              <div className="flex gap-1 p-1 bg-background/60 rounded-xl border border-border mb-5 flex-shrink-0">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2.5 px-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-[#4B6382] text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content — relative wrapper locks the frame; panels fill it absolutely */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-border shadow-sm flex-1 relative overflow-hidden min-h-[480px]">

                {/* About */}
                <div className={`absolute inset-0 p-6 overflow-y-auto transition-opacity duration-200 ${activeTab === 'about' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  <h3 className="text-base font-semibold text-foreground mb-3">My Journey</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    I started as a mechanical engineer but quickly realised my sharpest edge was making
                    complex systems — and teams — work together. After six years delivering enterprise
                    technology across aerospace, defence and automotive at Opti-Num Solutions, I earned
                    a Swedish Institute scholarship to study Innovation Management at KTH in Stockholm,
                    where I found the language for what I'd always been doing: turning ambiguity into delivery.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    Graduating didn't slow things down — it sharpened the hunger. I invested in AI and
                    product certifications, started showing up at tech events to build real connections,
                    and threw myself into hackathons. A few wins along the way reminded me what's possible
                    when focused execution meets a sharp idea. One of those ideas refused to stay theoretical.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    That idea became SoiQet — an AI-enabled platform I'm now building from the ground up,
                    accepted into Peachscore's Cohort 30 startup programme and applying everything I've
                    learned about delivery, product and AI to make it real.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white shadow-md"
                  >
                    <a href={personalInfo.resumeUrl} download target="_blank" rel="noopener noreferrer">
                      <Download size={14} className="mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                {/* What I Bring — high-level capabilities framed as business outcomes */}
                <div className={`absolute inset-0 p-6 overflow-y-auto transition-opacity duration-200 ${activeTab === 'bring' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  <div className="space-y-2">
                    {coreCapabilities.map((cap) => {
                      const Icon = iconMap[cap.icon] || CheckCircle;
                      return (
                        <div
                          key={cap.title}
                          className="flex items-center p-2.5 bg-white rounded-lg border border-border hover:border-[#4B6382]/40 hover:shadow-sm transition-all duration-200"
                        >
                          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <Icon size={14} className="text-white" />
                          </div>
                          <span className="text-foreground font-medium text-sm">{cap.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* AI & Data Systems */}
                <div className={`absolute inset-0 p-6 overflow-y-auto transition-opacity duration-200 ${activeTab === 'focus' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  <div className="space-y-4">
                    {Object.entries(aiDataSystems).map(([category, items]) => (
                      <div key={category}>
                        <p className="text-[11px] font-semibold text-[#4B6382] uppercase tracking-widest mb-2">{category}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 bg-[#4B6382] text-white rounded-full text-xs font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery & Product Execution */}
                <div className={`absolute inset-0 p-6 overflow-y-auto transition-opacity duration-200 ${activeTab === 'tools' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  <div className="space-y-4">
                    {Object.entries(deliveryTools).map(([category, items]) => (
                      <div key={category}>
                        <p className="text-[11px] font-semibold text-[#4B6382] uppercase tracking-widest mb-2">{category}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 bg-[#4B6382] text-white rounded-full text-xs font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
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
      <div className="flex justify-center pb-8 pt-8">
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
