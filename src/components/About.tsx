import { personalInfo, education } from '../data';
import { GraduationCap, Award, MapPin, Mail, Phone } from 'lucide-react';

const certifications = [
  'Certified Scrum Product Owner (CSPO)',
  'Product Management Certification — Product School',
  'Advanced Data Analytics Certification — UC Berkeley Extension',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            About Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Who I Am
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Summary + contact */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {personalInfo.summary}
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, label: personalInfo.location },
                { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: personalInfo.phone },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
                    <Icon size={16} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  {href ? (
                    <a href={href} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-indigo-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education cards */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white leading-snug">{edu.school}</h4>
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">GPA: {edu.gpa}</p>
                  {edu.details && edu.details.length > 0 && (
                    <ul className="space-y-1">
                      {edu.details.map((d) => (
                        <li key={d} className="text-xs text-gray-500 dark:text-gray-500 flex items-start gap-1.5">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
