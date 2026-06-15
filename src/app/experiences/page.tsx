"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  experiences,
  sortExperiencesByLatest,
} from "@/data/experience";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SearchBar } from "@/components/SearchBar";
import { SectionTitle } from "@/components/SectionTitle";

export default function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExperiences = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    const matchingExperiences = experiences.filter((experience) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        experience.company.toLowerCase().includes(normalizedSearch) ||
        experience.position.toLowerCase().includes(normalizedSearch) ||
        experience.description.toLowerCase().includes(normalizedSearch) ||
        experience.highlights.some((highlight) =>
          highlight.toLowerCase().includes(normalizedSearch)
        ) ||
        experience.technologies.some((technology) =>
          technology.toLowerCase().includes(normalizedSearch)
        );

      return matchesSearch;
    });

    return sortExperiencesByLatest(matchingExperiences);
  }, [searchQuery]);

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
          <div className="max-w-md">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search experiences..."
            />
          </div>

          <div className="mt-8">
            {filteredExperiences.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-center text-zinc-600 dark:text-zinc-400">
                  No experiences found. Try a different search.
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
      </section>
    </div>
  );
}
