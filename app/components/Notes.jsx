"use client";
import { motion } from "framer-motion";
import { notes } from "../data/notes";

export default function Notes() {
  return (
    <section id="notes" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl mb-2 text-zinc-900 dark:text-zinc-100">
          Notes
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-sm sm:text-base">
          Short, occasional write-ups on what I'm building and learning.
        </p>

        <div className="space-y-8">
          {notes.map((note, index) => (
            <motion.article
              key={note.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="border-b border-border pb-8 last:border-0"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {note.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
                  {note.date}
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {note.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
