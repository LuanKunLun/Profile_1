import { skillCategories } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Skill Stack
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Radar-style visual + skill cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* SVG Radar Chart */}
          <div className="flex justify-center">
            <RadarChart />
          </div>

          {/* Skill bars */}
          <div className="space-y-6">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">
                    {cat.name}
                  </span>
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    {cat.level}%
                  </span>
                </div>
                {/* Bar */}
                <div className="h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    style={{ width: `${cat.level}%`, transition: 'width 1s ease' }}
                  />
                </div>
                {/* Sub-skills */}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SVG Radar chart built from scratch */
function RadarChart() {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 110;
  const levels = 5;

  const data = [
    { label: 'Strategy', value: 0.95 },
    { label: 'Execution', value: 0.9 },
    { label: 'Analytics', value: 0.85 },
    { label: 'UX Research', value: 0.8 },
    { label: 'Leadership', value: 0.92 },
    { label: 'Technical', value: 0.75 },
  ];

  const n = data.length;
  const angleSlice = (2 * Math.PI) / n;

  const polar = (angle: number, r: number) => ({
    x: cx + r * Math.cos(angle - Math.PI / 2),
    y: cy + r * Math.sin(angle - Math.PI / 2),
  });

  // Web grid polygons
  const webPaths = Array.from({ length: levels }, (_, i) => {
    const r = (radius * (i + 1)) / levels;
    const pts = data.map((_, j) => {
      const { x, y } = polar(j * angleSlice, r);
      return `${x},${y}`;
    });
    return pts.join(' ');
  });

  // Actual data polygon
  const dataPoints = data.map((d, i) => {
    const r = d.value * radius;
    return polar(i * angleSlice, r);
  });
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + 'Z';

  return (
    <svg width={size} height={size} className="overflow-visible">
      {/* Web grid */}
      {webPaths.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-gray-300 dark:text-gray-700"
        />
      ))}

      {/* Axis lines */}
      {data.map((_, j) => {
        const { x, y } = polar(j * angleSlice, radius);
        return (
          <line
            key={j}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-300 dark:text-gray-700"
          />
        );
      })}

      {/* Data area */}
      <path
        d={dataPath}
        fill="url(#radarGrad)"
        fillOpacity="0.4"
        stroke="#6366f1"
        strokeWidth="2"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      {/* Data dots */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={4} fill="#6366f1" />
      ))}

      {/* Labels */}
      {data.map((d, j) => {
        const { x, y } = polar(j * angleSlice, radius + 24);
        return (
          <text
            key={j}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-gray-600 dark:fill-gray-400"
            fontSize="11"
            fontWeight="500"
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}
