"use client";

import { motion } from "framer-motion";

interface ExperienceTimelineProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export function ExperienceTimeline({
  company,
  position,
  startDate,
  endDate,
  description,
  highlights,
  technologies = [],
}: ExperienceTimelineProps) {
  const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    return new Date(Number(year), Number(month) - 1).toLocaleDateString(
      "en-US",
      { year: "numeric", month: "short" }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative border-l-2 border-zinc-200 py-8 pl-8 dark:border-zinc-800"
    >
      <div className="absolute left-[-9px] top-9 h-4 w-4 rounded-full bg-zinc-900 dark:bg-white" />

      <div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              {position}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {company}
            </p>
          </div>
          <p className="shrink-0 whitespace-nowrap text-sm font-medium text-zinc-500 dark:text-zinc-500">
            {formatDate(startDate)}
            {endDate ? ` - ${formatDate(endDate)}` : " - Present"}
          </p>
        </div>

        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start">
                <span className="mr-2 text-zinc-400 dark:text-zinc-600">-</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="inline-block rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
