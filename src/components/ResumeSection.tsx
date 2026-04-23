import { Calendar, MapPin, Award, Download, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experiences, education, certifications, personalInfo } from '@/data/profileData';

// ─── Colour system ────────────────────────────────────────────────────────────
// violet  → current role   (#071739 navy)
// emerald → work experience (#4B6382 steel blue)
// amber   → education       (#A68868 warm tan)
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
    dot:        'bg-[#071739]',
    ring:       'ring-4 ring-[#071739]/20',
    topBorder:  'border-t-4 border-t-[#071739]',
    cardBg:     'bg-[#071739]/[0.04]',
    cardBorder: 'border-[#071739]/30',
    bullet:     'bg-[#071739]',
    subtitle:   'text-[#071739]',
    badge:      'bg-[#071739] text-white',
  },
  emerald: {
    dot:        'bg-[#4B6382]',
    ring:       'ring-4 ring-[#CDD5DB]',
    topBorder:  'border-t-2 border-t-[#4B6382]',
    cardBg:     'bg-white',
    cardBorder: 'border-[#4B6382]/20',
    bullet:     'bg-[#4B6382]',
    subtitle:   'text-[#4B6382]',
    badge:      'bg-[#4B6382]/10 text-[#4B6382]',
  },
  amber: {
    dot:        'bg-[#A68868]',
    ring:       'ring-4 ring-[#CDD5DB]',
    topBorder:  'border-t-2 border-t-[#A68868]',
    cardBg:     'bg-white',
    cardBorder: 'border-[#A68868]/35',
    bullet:     'bg-[#A68868]',
    subtitle:   'text-[#A68868]',
    badge:      'bg-[#A68868]/15 text-[#A68868]',
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
  logo?: string;
}

// ─── Card component ───────────────────────────────────────────────────────────
const TimelineCard = ({ colorKey, title, subtitle, period, location, bullets, badge, logo }: TimelineEntry) => {
  const c = colorMap[colorKey];
  return (
    <Card className={`transition-shadow duration-300 ${c.cardBorder} ${c.cardBg} ${c.topBorder} ${colorKey === 'violet' ? 'shadow-md hover:shadow-xl' : 'hover:shadow-lg'}`}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2 mb-0.5">
          <h4 className="text-base font-semibold text-foreground leading-snug">{title}</h4>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${c.badge}`}>
            {badge}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {logo && (
            <img src={logo} alt={subtitle} className="h-5 w-auto object-contain flex-shrink-0" />
          )}
          <p className={`text-sm font-medium ${c.subtitle}`}>{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1.5 mb-3 text-[#A68868]">
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
    logo: '/SoiQet.png',
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
    title: experiences[2].title,
    subtitle: experiences[2].company,
    period: experiences[2].period,
    location: experiences[2].location,
    bullets: experiences[2].achievements.slice(0, 2),
    badge: 'Work',
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Resume</h2>
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
                  <span className="w-2.5 h-2.5 rounded-full bg-[#071739] flex-shrink-0" />
                  Current role
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4B6382] flex-shrink-0" />
                  Work experience
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A68868] flex-shrink-0" />
                  Education
                </span>
              </div>
            </div>

            {/* ── Desktop zigzag ── */}
            <div className="hidden md:block relative">
              {/* Centre line — navy → steel blue → warm tan */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #071739, #4B6382, #A68868)' }}
              />

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
              <div
                className="absolute left-2.5 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #071739, #4B6382, #A68868)' }}
              />
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
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
              {certifications.map((cert) => (
                <Card key={cert.name} className="text-center hover:shadow-lg transition-shadow duration-300 border-border bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-white" size={22} />
                    </div>
                    <h4 className="text-sm font-semibold mb-2">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-[#A68868] font-medium mt-1">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
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
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default ResumeSection;
