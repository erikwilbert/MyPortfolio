"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { skills, skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillBadge } from "@/components/SkillBadge";

export default function ResumePage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {profile.tagline}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-zinc-600 dark:text-zinc-400">
                {profile.location}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-12 lg:col-span-2">
              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Professional Summary
                </h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {profile.bio}
                </p>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Experience
                </h2>
                <div className="mt-8 space-y-8">
                  {experiences.map((exp) => (
                    <ExperienceTimeline key={exp.id} {...exp} />
                  ))}
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Key Projects
                </h2>
                <div className="mt-6 space-y-4">
                  {projects.filter((p) => p.featured).map((project) => (
                    <div
                      key={project.id}
                      className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                    >
                      <div className="flex flex-col justify-between sm:flex-row sm:items-start">
                        <div>
                          <h3 className="font-semibold text-zinc-900 dark:text-white">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            {project.shortDescription}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Education
                </h2>
                <div className="mt-6 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Add your degree name here
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Add your university/institution name
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    2020 - 2024
                  </p>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Add details about your education, achievements, or relevant
                    coursework here.
                  </p>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Achievements & Awards
                </h2>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start text-zinc-600 dark:text-zinc-400">
                    <span className="mr-3 text-zinc-900 dark:text-white">•</span>
                    <span>Add achievement 1</span>
                  </li>
                  <li className="flex items-start text-zinc-600 dark:text-zinc-400">
                    <span className="mr-3 text-zinc-900 dark:text-white">•</span>
                    <span>Add achievement 2</span>
                  </li>
                  <li className="flex items-start text-zinc-600 dark:text-zinc-400">
                    <span className="mr-3 text-zinc-900 dark:text-white">•</span>
                    <span>Add achievement 3</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Download Resume */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  Download Resume
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Download a PDF version of my resume.
                </p>
                <a
                  href={profile.resumeUrl}
                  download
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Download PDF
                </a>
              </motion.div>

              {/* Skills Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  Core Competencies
                </h3>
                <div className="mt-4 space-y-4">
                  {skillCategories.slice(0, 3).map((category) => (
                    <div key={category}>
                      <p className="text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400">
                        {category}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {skills
                          .filter((s) => s.category === category)
                          .slice(0, 3)
                          .map((skill) => (
                            <span
                              key={skill.id}
                              className="inline-block rounded bg-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                            >
                              {skill.name}
                            </span>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
