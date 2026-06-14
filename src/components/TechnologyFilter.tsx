"use client";

import { motion } from "framer-motion";

interface TechnologyFilterProps {
  technologies: string[];
  selectedTechnologies: Set<string>;
  onSelectTechnology: (tech: string) => void;
  onClearAll?: () => void;
}

export function TechnologyFilter({
  technologies,
  selectedTechnologies,
  onSelectTechnology,
  onClearAll,
}: TechnologyFilterProps) {
  const handleClearAll = () => {
    if (onClearAll) {
      onClearAll();
      return;
    }

    selectedTechnologies.forEach((tech) => onSelectTechnology(tech));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-zinc-900 dark:text-white">
          Technologies
        </h3>
        {selectedTechnologies.size > 0 && (
          <button
            onClick={handleClearAll}
            className="text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <motion.button
            key={tech}
            onClick={() => onSelectTechnology(tech)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
              selectedTechnologies.has(tech)
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {tech}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
