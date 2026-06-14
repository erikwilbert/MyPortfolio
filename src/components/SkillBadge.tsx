"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

const proficiencyColors = {
  beginner: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  intermediate:
    "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  advanced: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  expert: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
};

export function SkillBadge({
  skill,
  proficiency = "intermediate",
}: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${proficiencyColors[proficiency]}`}
    >
      {skill}
    </motion.div>
  );
}
