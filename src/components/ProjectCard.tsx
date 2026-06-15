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
  featured?: boolean;
}

export function ProjectCard({
  slug,
  title,
  description,
  technologies,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full min-w-0"
    >
      <Link href={`/projects/${slug}`} className="block h-full min-w-0">
        <div
          className={cn(
            "group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all dark:border-zinc-800 dark:bg-zinc-950",
            featured && "md:col-span-2"
          )}
        >
          {/* Content */}
          <div className="flex min-h-64 min-w-0 flex-1 flex-col p-6">
            <h3
              className="line-clamp-2 break-words font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-300"
              title={title}
            >
              {title}
            </h3>
            <p
              className="mt-2 line-clamp-3 break-words text-sm text-zinc-600 dark:text-zinc-400"
              title={description}
            >
              {description}
            </p>

            {/* Technologies */}
            <div className="mt-auto flex min-w-0 flex-wrap gap-2 pt-4">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="max-w-36 truncate rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  title={tech}
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
