import { PersonStanding, Zap, Users, Workflow } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { interests } from '@/data/profileData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PersonStanding,
  Zap,
  Users,
  Workflow
};

const InterestsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 via-sky-50 to-lime-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Beyond Work</h3>
            <p className="text-muted-foreground">What keeps me energized and inspired</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest) => {
              const IconComponent = iconMap[interest.icon] || Zap;
              return (
                <Card
                  key={interest.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-emerald-200/50 bg-white/70 backdrop-blur-sm"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{interest.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
