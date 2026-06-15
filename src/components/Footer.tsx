"use client";

import Link from "next/link";
import { socials } from "@/data/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              Portfolio
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              A modern portfolio showcasing projects, skills, and experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              Links
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Skills", href: "/skills" },
                { label: "Experiences", href: "/experiences" },
                { label: "Resume", href: "/resume" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              Connect
            </h3>
            <div className="mt-2 flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  aria-label={social.name}
                >
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <p>© {currentYear} Erik Wilbert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
