import { Calendar, MapPin, Award, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experiences, education, certifications, personalInfo } from '@/data/profileData';

// ─── Colour system ────────────────────────────────────────────────────────────
type ColorKey = 'violet' | 'emerald' | 'amber';

const colorMap: Record<ColorKey, {
  dot: string;
  ring: string;
  topBorder: string;
  cardBg: string;
  cardBorder: string;
  bullet: string;
  subtitle: string;
  badge: string;
}> = {
  violet: {
    dot:        'bg-violet-500',
    ring:       'ring-4 ring-violet-100',
    topBorder:  'border-t-2 border-t-violet-400',
    cardBg:     'bg-gradient-to-br from-violet-50/60 to-white',
    cardBorder: 'border-violet-200/70',
    bullet:     'bg-violet-500',
    subtitle:   'text-violet-600',
    badge:      'bg-violet-100 text-violet-700',
  },
  emerald: {
    dot:        'bg-emerald-500',
    ring:       'ring-4 ring-emerald-100',
    topBorder:  'border-t-2 border-t-emerald-400',
    cardBg:     'bg-white',
    cardBorder: 'border-emerald-200/60',
    bullet:     'bg-emerald-500',
    subtitle:   'text-emerald-600',
    badge:      'bg-emerald-100 text-emerald-700',
  },
  amber: {
    dot:        'bg-amber-500',
    ring:       'ring-4 ring-amber-100',
    topBorder:  'border-t-2 border-t-amber-400',
    cardBg:     'bg-gradient-to-br from-amber-50/60 to-white',
    cardBorder: 'border-amber-200/70',
    bullet:     'bg-amber-500',
    subtitle:   'text-amber-700',
    badge:      'bg-amber-100 text-amber-700',
  },
};

// ─── Unified timeline entry type ─────────────────────────────────────────────
interface TimelineEntry {
  colorKey: ColorKey;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  bullets: string[];
  badge: string;
}

// ─── Card component ───────────────────────────────────────────────────────────
const TimelineCard = ({ colorKey, title, subtitle, period, location, bullets, badge }: TimelineEntry) => {
  const c = colorMap[colorKey];
  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${c.cardBorder} ${c.cardBg} ${c.topBorder}`}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2 mb-0.5">
          <h4 className="text-base font-semibold text-foreground leading-snug">{title}</h4>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${c.badge}`}>
            {badge}
          </span>
        </div>
        <p className={`text-sm font-medium ${c.subtitle}`}>{subtitle}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1.5 mb-3 text-muted-foreground">
          <span className="flex items-center gap-1 text-xs">
            <Calendar size={11} />
            {period}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <MapPin size={11} />
            {location}
          </span>
        </div>
        <ul className="space-y-1.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.bullet}`} />
              <span dangerouslySetInnerHTML={{ __html: b }} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// ─── Timeline items (newest → oldest) ────────────────────────────────────────
const buildTimeline = (): TimelineEntry[] => [
  {
    colorKey: 'violet',
    title: experiences[0].title,
    subtitle: experiences[0].company,
    period: experiences[0].period,
    location: experiences[0].location,
    bullets: experiences[0].achievements.slice(0, 2),
    badge: 'Current',
  },
  {
    colorKey: 'emerald',
    title: experiences[1].title,
    subtitle: experiences[1].company,
    period: experiences[1].period,
    location: experiences[1].location,
    bullets: experiences[1].achievements.slice(0, 2),
    badge: 'Work',
  },
  {
    colorKey: 'emerald',
    title: experiences[2].title,
    subtitle: experiences[2].company,
    period: experiences[2].period,
    location: experiences[2].location,
    bullets: experiences[2].achievements.slice(0, 2),
    badge: 'Work',
  },
  // MSc sits exactly where the career break used to be
  {
    colorKey: 'amber',
    title: education[0].degree,
    subtitle: education[0].school,
    period: education[0].period,
    location: education[0].location,
    bullets: [
      education[0].highlight!,
      `Focus: ${education[0].focusAreas.slice(0, 3).join(' · ')}`,
    ],
    badge: 'Education',
  },
  {
    colorKey: 'emerald',
    title: experiences[3].title,
    subtitle: experiences[3].company,
    period: experiences[3].period,
    location: experiences[3].location,
    bullets: experiences[3].achievements.slice(0, 2),
    badge: 'Work',
  },
  {
    colorKey: 'emerald',
    title: experiences[4].title,
    subtitle: experiences[4].company,
    period: experiences[4].period,
    location: experiences[4].location,
    bullets: experiences[4].achievements.slice(0, 2),
    badge: 'Work',
  },
  {
    colorKey: 'emerald',
    title: experiences[5].title,
    subtitle: experiences[5].company,
    period: experiences[5].period,
    location: experiences[5].location,
    bullets: experiences[5].achievements.slice(0, 2),
    badge: 'Work',
  },
  {
    colorKey: 'emerald',
    title: experiences[6].title,
    subtitle: experiences[6].company,
    period: experiences[6].period,
    location: experiences[6].location,
    bullets: experiences[6].achievements.slice(0, 2),
    badge: 'Work',
  },
  // BSc anchors the bottom
  {
    colorKey: 'amber',
    title: education[1].degree,
    subtitle: education[1].school,
    period: education[1].period,
    location: education[1].location,
    bullets: [
      education[1].details,
      'IEEE Publication: Nonlinear control of quadrotor UAV using Takagi-Sugeno fuzzy logic (2015)',
    ],
    badge: 'Education',
  },
];

// ─── Main section ─────────────────────────────────────────────────────────────
const ResumeSection = () => {
  const timeline = buildTimeline();

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

          {/* Career Timeline */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <h3 className="text-3xl font-semibold">Career Timeline</h3>
              {/* Legend */}
              <div className="flex items-center gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500 flex-shrink-0" />
                  Current role
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  Work experience
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                  Education
                </span>
              </div>
            </div>

            {/* ── Desktop zigzag ── */}
            <div className="hidden md:block relative">
              {/* Gradient centre line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400 via-emerald-400 to-amber-400" />

              {timeline.map((entry, index) => {
                const isLeft = index % 2 === 0;
                const c = colorMap[entry.colorKey];
                return (
                  <div key={index} className="relative flex items-start mb-8">
                    {/* Left slot */}
                    <div className="w-[calc(50%-24px)] pr-8">
                      {isLeft && <TimelineCard {...entry} />}
                    </div>

                    {/* Centre dot */}
                    <div className="w-12 flex-shrink-0 flex justify-center pt-5 z-10">
                      <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md ${c.dot} ${c.ring}`} />
                    </div>

                    {/* Right slot */}
                    <div className="w-[calc(50%-24px)] pl-8">
                      {!isLeft && <TimelineCard {...entry} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Mobile left-rail ── */}
            <div className="md:hidden relative pl-7">
              <div className="absolute left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400 via-emerald-400 to-amber-400" />
              {timeline.map((entry, index) => {
                const c = colorMap[entry.colorKey];
                return (
                  <div key={index} className="relative mb-6">
                    <div className={`absolute -left-[19px] top-5 w-3 h-3 rounded-full border-2 border-white shadow ${c.dot}`} />
                    <TimelineCard {...entry} />
                  </div>
                );
              })}
            </div>

            {/* Download CTA */}
            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <a href={personalInfo.resumeUrl} download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" size={18} />
                  Download Full Resume
                </a>
              </Button>
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
