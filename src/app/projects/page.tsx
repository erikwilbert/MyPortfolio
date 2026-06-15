"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { SearchBar } from "@/components/SearchBar";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects
  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        project.title.toLowerCase().includes(normalizedSearch) ||
        project.description.toLowerCase().includes(normalizedSearch) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(normalizedSearch)
        );

      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionTitle
            title="Projects"
            subtitle="A collection of projects I've built and worked on"
          />
        </div>
      </section>

      {/* Search and Results */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-md">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search projects..."
            />
          </div>

          {/* Main Content */}
          <div className="mt-8">
            {filteredProjects.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
                <svg
                  className="h-12 w-12 text-zinc-400 dark:text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  No projects found. Try a different search.
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
                  Showing {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}
                </p>
                <div className="grid gap-6">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProjectCard {...project} />
                    </motion.div>
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
