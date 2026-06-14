"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";
import { SectionTitle } from "@/components/SectionTitle";
import { ArticleCard } from "@/components/ArticleCard";
import { SearchBar } from "@/components/SearchBar";

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach((a) => {
      a.tags.forEach((t) => tags.add(t));
    });
    return Array.from(tags).sort();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionTitle
            title="Articles"
            subtitle="Thoughts on software engineering, architecture, and technology"
          />
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search articles..."
            />
          </div>

          {filteredArticles.length === 0 ? (
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v11m-5-5l-5 5m5-5l5 5"
                />
              </svg>
              <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                No articles found. Try a different search.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
                Showing {filteredArticles.length} article
                {filteredArticles.length !== 1 ? "s" : ""}
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ArticleCard {...article} />
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}

          {/* Tags */}
          {allTags.length > 0 && (
            <div className="mt-12 border-t border-zinc-200 pt-12 dark:border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Tags
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 transition-all hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
