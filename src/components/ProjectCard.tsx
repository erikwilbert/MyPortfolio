"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  featured?: boolean;
}

export function ProjectCard({
  slug,
  title,
  description,
  technologies,
  image,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/projects/${slug}`}>
        <div
          className={cn(
            "group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all dark:border-zinc-800 dark:bg-zinc-950",
            featured && "md:col-span-2"
          )}
        >
          {/* Image */}
          <div
            className={cn(
              "relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-900",
              featured && "md:h-64"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-700 opacity-10 dark:from-zinc-100 dark:to-zinc-300" />
            <div className="flex h-full items-center justify-center text-center text-sm text-zinc-500 dark:text-zinc-500">
              {image}
            </div>
          </div>

          {/* Content */}
          <div className="flex h-64 flex-col p-6">
            <h3 className="line-clamp-2 font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-300">
              {title}
            </h3>
            <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
