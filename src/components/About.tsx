import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="pt-24 pb-28 md:pt-32 md:pb-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500 mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            Building tools that ship
          </h2>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-5 gap-10 md:gap-16 items-start relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-2"
          >
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden border border-zinc-800 light:border-zinc-200 group">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="/assets/img/subash_ghimire.jpeg"
                alt="Subash Ghimire"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-3 space-y-4"
          >
            <p className="text-zinc-400 light:text-zinc-600 leading-relaxed">
              I build things for the web, from payment platforms that connect creators with their
              supporters to GNOME extensions used by thousands. My work spans the full stack: Django
              and PostgreSQL on the backend, React on the frontend, and everything in between.
            </p>
            <p className="text-zinc-400 light:text-zinc-600 leading-relaxed">
              I hold a Bachelor in Computer Engineering from Mid West University and most recently
              worked as a full-stack engineer at Nepware, where I built OIDC authentication
              microservices, maintained Drupal ecosystems, and implemented DOCX export features.
              Before that, I cut my teeth at Growfore Solution building internal tools and WordPress
              solutions.
            </p>
            <p className="text-zinc-400 light:text-zinc-600 leading-relaxed">
              What drives me is the craft of it: clean architecture, resilient systems, and products
              that actually solve problems. I am always learning, always building, and always up for
              a challenge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
