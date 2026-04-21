import { useEffect, useRef } from 'react';
import { personalInfo } from '../data';
import { GitBranch, ExternalLink, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const titles = ['Product Manager', 'Problem Solver', 'Growth Driver', 'Team Leader'];
    let i = 0;
    let charIdx = 0;
    let deleting = false;
    let paused = false;

    const tick = () => {
      if (!titleRef.current) return;
      const current = titles[i % titles.length];

      if (paused) {
        paused = false;
        setTimeout(tick, 1500);
        return;
      }

      if (!deleting) {
        titleRef.current.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
          deleting = true;
          paused = true;
        }
        setTimeout(tick, 80);
      } else {
        titleRef.current.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          i++;
        }
        setTimeout(tick, 45);
      }
    };
    tick();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to new opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4">
          <span className="text-white">{personalInfo.name}</span>
        </h1>

        {/* Typewriter title */}
        <div className="text-2xl sm:text-3xl font-medium text-indigo-300 mb-6 h-10">
          <span ref={titleRef} />
          <span className="animate-pulse">|</span>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm mb-10">
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-600/40 text-gray-300 hover:text-white transition-all"
            aria-label="LinkedIn"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-600/40 text-gray-300 hover:text-white transition-all"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-600/40 text-gray-300 hover:text-white transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
