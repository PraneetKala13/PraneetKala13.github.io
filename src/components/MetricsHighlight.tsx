import { TrendingUp, Users, Zap, Target } from 'lucide-react';
import { keyMetrics } from '@/data/profileData';

const iconMap = [TrendingUp, Zap, Users, Target];

const MetricsHighlight = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-2xl p-8 shadow-xl">
      <h3 className="text-xl font-semibold text-white text-center mb-8">
        Measurable Impact
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const IconComponent = iconMap[index % iconMap.length];
          return (
            <div
              key={index}
              className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconComponent size={20} className="text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-emerald-100 font-medium">
                {metric.label}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-center text-emerald-100/80 text-sm mt-6">
        Results achieved during internship and consulting engagements
      </p>
    </div>
  );
};

export default MetricsHighlight;
