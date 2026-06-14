"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = use(params);
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            ← Back to articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 space-y-4"
          >
            <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span>{article.readingTime} min read</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              {article.title}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {article.description}
            </p>

            {/* Article Image */}
            <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex aspect-video items-center justify-center text-center text-zinc-500">
                {article.image}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="prose dark:prose-invert max-w-none"
          >
            {/* Render article content */}
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
              {article.content.split("\n\n").map((paragraph, idx) => {
                // Handle headings
                if (paragraph.startsWith("# ")) {
                  return (
                    <h2
                      key={idx}
                      className="text-3xl font-bold text-zinc-900 dark:text-white"
                    >
                      {paragraph.replace("# ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h3
                      key={idx}
                      className="text-2xl font-bold text-zinc-900 dark:text-white"
                    >
                      {paragraph.replace("## ", "")}
                    </h3>
                  );
                }

                // Handle lists
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((l) =>
                    l.startsWith("- ")
                  );
                  return (
                    <ul key={idx} className="space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-zinc-900 dark:text-white">
                            •
                          </span>
                          <span>{item.replace("- ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Regular paragraphs
                return (
                  <p key={idx} className="leading-7">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  Tags
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/articles?tag=${tag}`}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 transition-all hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <Link
              href="/articles"
              className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
