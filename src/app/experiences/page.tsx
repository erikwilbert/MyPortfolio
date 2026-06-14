"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SearchBar } from "@/components/SearchBar";
import { SectionTitle } from "@/components/SectionTitle";
import { TechnologyFilter } from "@/components/TechnologyFilter";

export default function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<Set<string>>(
    new Set()
  );

  const allTechnologies = useMemo(() => {
    const technologies = new Set<string>();
    experiences.forEach((experience) => {
      experience.technologies.forEach((technology) => technologies.add(technology));
    });
    return Array.from(technologies).sort();
  }, []);

  const filteredExperiences = useMemo(() => {
    const normalizedSearch = searchQuery.toLowerCase();

    return experiences.filter((experience) => {
      const matchesSearch =
        experience.company.toLowerCase().includes(normalizedSearch) ||
        experience.position.toLowerCase().includes(normalizedSearch) ||
        experience.description.toLowerCase().includes(normalizedSearch) ||
        experience.highlights.some((highlight) =>
          highlight.toLowerCase().includes(normalizedSearch)
        ) ||
        experience.technologies.some((technology) =>
          technology.toLowerCase().includes(normalizedSearch)
        );
      const matchesTechnology =
        selectedTechnologies.size === 0 ||
        experience.technologies.some((technology) =>
          selectedTechnologies.has(technology)
        );

      return matchesSearch && matchesTechnology;
    });
  }, [searchQuery, selectedTechnologies]);

  const handleTechnologySelect = (technology: string) => {
    const nextSelectedTechnologies = new Set(selectedTechnologies);
    if (nextSelectedTechnologies.has(technology)) {
      nextSelectedTechnologies.delete(technology);
    } else {
      nextSelectedTechnologies.add(technology);
    }
    setSelectedTechnologies(nextSelectedTechnologies);
  };

  return (
    <div className="flex flex-col">
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionTitle
            title="Experiences"
            subtitle="Roles, responsibilities, highlights, and the tools used along the way"
          />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <SearchBar
                  onSearch={setSearchQuery}
                  placeholder="Search experiences..."
                />
                <TechnologyFilter
                  technologies={allTechnologies}
                  selectedTechnologies={selectedTechnologies}
                  onSelectTechnology={handleTechnologySelect}
                  onClearAll={() => setSelectedTechnologies(new Set())}
                />
              </div>
            </aside>

            <div className="lg:col-span-3">
              {filteredExperiences.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
                  <p className="text-center text-zinc-600 dark:text-zinc-400">
                    No experiences found. Try adjusting your filters.
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Showing {filteredExperiences.length} experience
                    {filteredExperiences.length !== 1 ? "s" : ""}
                  </p>
                  <div className="space-y-4">
                    {filteredExperiences.map((experience) => (
                      <ExperienceTimeline key={experience.id} {...experience} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
