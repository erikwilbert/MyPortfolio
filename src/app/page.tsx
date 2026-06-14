"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skills, skillCategories } from "@/data/skills";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactCard } from "@/components/ContactCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const featuredExperiences = experiences
    .filter((experience) => experience.featured)
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-2xl text-zinc-600 dark:text-zinc-400">
                {profile.title}
              </p>
              <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                {profile.tagline}
              </p>
            </div>

            <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              {profile.introduction}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                View My Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-6 py-3 font-medium text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionTitle title="About Me" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
          >
            {profile.interests}
          </motion.p>
        </div>
      </section>

      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <SectionTitle
              title="Skills & Technologies"
              subtitle="Technologies and tools I work with"
            />
            <Link
              href="/skills"
              className="shrink-0 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              View all
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="mt-12 space-y-8"
          >
            {skillCategories.map((category) => (
              <div key={category}>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <SkillBadge
                        key={skill.id}
                        skill={skill.name}
                        proficiency={skill.proficiency}
                      />
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <SectionTitle title="Featured Projects" />
            <Link
              href="/projects"
              className="shrink-0 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              View all
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <SectionTitle title="Experience" />
            <Link
              href="/experiences"
              className="shrink-0 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              View all
            </Link>
          </div>

          <div className="mt-12 space-y-8">
            {featuredExperiences.map((experience) => (
              <ExperienceTimeline key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-b border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionTitle title="Get In Touch" subtitle="I'd love to hear from you" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <ContactCard />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
