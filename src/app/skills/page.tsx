"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import { SearchBar } from "@/components/SearchBar";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillBadge } from "@/components/SkillBadge";

const proficiencyLabels = ["beginner", "intermediate", "advanced", "expert"] as const;

export default function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProficiency, setSelectedProficiency] = useState("All");

  const filteredSkills = useMemo(() => {
    const normalizedSearch = searchQuery.toLowerCase();

    return skills.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(normalizedSearch) ||
        skill.category.toLowerCase().includes(normalizedSearch) ||
        skill.proficiency.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;
      const matchesProficiency =
        selectedProficiency === "All" ||
        skill.proficiency === selectedProficiency;

      return matchesSearch && matchesCategory && matchesProficiency;
    });
  }, [searchQuery, selectedCategory, selectedProficiency]);

  return (
    <div className="flex flex-col">
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionTitle
            title="Skills"
            subtitle="Skills I have developed through my projects, coursework, and personal learning journey"
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
                  placeholder="Search skills..."
                />

                <div className="space-y-3">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["All", ...skillCategories].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                            : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Level
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["All", ...proficiencyLabels].map((proficiency) => (
                      <button
                        key={proficiency}
                        onClick={() => setSelectedProficiency(proficiency)}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium capitalize transition-all ${
                          selectedProficiency === proficiency
                            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                            : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        }`}
                      >
                        {proficiency}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              {filteredSkills.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
                  <p className="text-center text-zinc-600 dark:text-zinc-400">
                    No skills found. Try adjusting your filters.
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Showing {filteredSkills.length} skill
                    {filteredSkills.length !== 1 ? "s" : ""}
                  </p>

                  {skillCategories.map((category) => {
                    const categorySkills = filteredSkills.filter(
                      (skill) => skill.category === category
                    );

                    if (categorySkills.length === 0) {
                      return null;
                    }

                    return (
                      <section
                        key={category}
                        className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
                      >
                        <h2 className="font-semibold text-zinc-900 dark:text-white">
                          {category}
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {categorySkills.map((skill) => (
                            <SkillBadge
                              key={skill.id}
                              skill={skill.name}
                              proficiency={skill.proficiency}
                            />
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
