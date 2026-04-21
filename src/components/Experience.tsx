import { experiences } from '../data';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const companyTextColors: Record<string, string> = {
  Airbnb: 'text-rose-600 dark:text-rose-400',
  Uber: 'text-gray-700 dark:text-gray-300',
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            Career
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative sm:pl-20">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full items-center justify-center shadow-lg bg-gradient-to-br border-2 border-white dark:border-gray-950 bg-indigo-600">
                  <Briefcase size={18} className="text-white" />
                </div>

                {/* Card */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className={`font-semibold text-base mt-0.5 ${companyTextColors[exp.company] ?? 'text-indigo-600 dark:text-indigo-400'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{exp.location}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 dark:bg-gray-700 my-4" />

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
