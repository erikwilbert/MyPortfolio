"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  image: string;
  tags: string[];
}

export function ArticleCard({
  slug,
  title,
  description,
  date,
  readingTime,
  image,
  tags,
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/articles/${slug}`}>
        <article className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all dark:border-zinc-800 dark:bg-zinc-950">
          {/* Image */}
          <div className="relative h-40 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-700 opacity-10 dark:from-zinc-100 dark:to-zinc-300" />
            <div className="flex h-full items-center justify-center text-center text-sm text-zinc-500 dark:text-zinc-500">
              {image}
            </div>
          </div>

          {/* Content */}
          <div className="flex h-64 flex-col p-4">
            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
              <time dateTime={date}>{formatDate(date)}</time>
              <span>{readingTime} min read</span>
            </div>

            {/* Title */}
            <h3 className="line-clamp-2 mt-3 font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-300">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
