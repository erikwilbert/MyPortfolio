"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form functionality to be implemented
    console.log("Form data:", formData);
    // TODO: Implement actual form submission
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Let's work together
        </h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Interested in collaborating or have a question? Feel free to reach
          out through any of these channels.
        </p>

        <div className="mt-8 space-y-4">
          {/* Email */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Email
            </h4>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <span className="inline-block h-1 w-1 rounded-full bg-zinc-900 dark:bg-white" />
              <span className="ml-2">{profile.email}</span>
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
              LinkedIn
            </h4>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              <span className="inline-block h-1 w-1 rounded-full bg-zinc-900 dark:bg-white" />
              <span className="ml-2">linkedin.com/in/yourprofile</span>
            </p>
          </div>

          {/* GitHub */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
              GitHub
            </h4>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              <span className="inline-block h-1 w-1 rounded-full bg-zinc-900 dark:bg-white" />
              <span className="ml-2">github.com/yourprofile</span>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Send me a message
        </h3>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-500 transition-all hover:border-zinc-300 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500 dark:focus:border-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-500 transition-all hover:border-zinc-300 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500 dark:focus:border-white"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-500 transition-all hover:border-zinc-300 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500 dark:focus:border-white"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              rows={5}
              className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-500 transition-all hover:border-zinc-300 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500 dark:focus:border-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-zinc-900 px-6 py-2 font-medium text-white transition-all hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
