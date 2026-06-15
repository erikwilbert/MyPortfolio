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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: profile.email,
      su: formData.subject,
      body: [
        formData.message,
        "",
        `From: ${formData.name}`,
        `Email: ${formData.email}`,
      ].join("\n"),
    });

    window.open(
      `https://mail.google.com/mail/?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >

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
            className="w-full rounded-lg bg-zinc-900 px-6 py-2 font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Continue to Gmail
          </button>
          <p className="text-center text-xs text-zinc-500">
            Opens Gmail with your message ready to review and send.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
