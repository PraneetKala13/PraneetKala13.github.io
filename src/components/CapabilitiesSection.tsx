import { Brain, Map, Workflow, BarChart3, Users, Rocket, ClipboardCheck, CheckCircle } from 'lucide-react';
import { coreCapabilities, technologyFocus } from '@/data/profileData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Map,
  Workflow,
  BarChart3,
  Users,
  Rocket,
  ClipboardCheck
};

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">What I Bring</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging business strategy and technology delivery with a consulting mindset
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Core Consulting Capabilities */}
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 border border-emerald-200/30 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-emerald-800 flex items-center">
                <ClipboardCheck className="mr-3 text-emerald-600" size={24} />
                Core Consulting Capabilities
              </h3>
              <div className="space-y-4">
                {coreCapabilities.map((capability, index) => {
                  const IconComponent = iconMap[capability.icon] || CheckCircle;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white/60 rounded-lg border border-emerald-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <IconComponent size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{capability.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technology & Delivery Focus */}
            <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl p-8 border border-sky-200/30 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-sky-800 flex items-center">
                <Rocket className="mr-3 text-sky-600" size={24} />
                Technology & Delivery Focus
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologyFocus.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/70 text-sky-800 rounded-full text-sm font-medium border border-sky-200 hover:border-sky-300 hover:shadow-sm transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-sky-200/50">
                <h4 className="text-sm font-semibold text-sky-700 mb-4 uppercase tracking-wide">Key Strengths</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">6+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">20+</div>
                    <div className="text-xs text-gray-600">Enterprise Clients</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">50+</div>
                    <div className="text-xs text-gray-600">Workshops Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">2</div>
                    <div className="text-xs text-gray-600">Degrees (MSc + BSc)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
