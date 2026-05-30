import type { ContactInfo } from "@/types";
import { motion } from "motion/react";

interface ContactProps {
  contactInfo: ContactInfo[];
}

export function Contact({ contactInfo }: ContactProps) {
  return (
    <section id="contact" className="pt-24 pb-28 md:pt-32 md:pb-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/8 via-emerald-500/3 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500 mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            Get in touch
          </h2>
          <p className="mt-3 text-zinc-500 light:text-zinc-600 max-w-md leading-relaxed">
            Want to collaborate, have a question, or just want to say hello.
          </p>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl bg-zinc-900/40 light:bg-zinc-100/80 p-5 hover:bg-zinc-900/60 light:hover:bg-zinc-200/60 transition-colors light:shadow-sm light:shadow-zinc-900/5"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                <i className={`ph ${info.icon} text-emerald-400 text-lg`} />
              </div>
              <h3 className="font-display text-sm font-semibold text-zinc-300 light:text-zinc-700">
                {info.label}
              </h3>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={info.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="mt-1.5 text-sm text-zinc-500 light:text-zinc-600 hover:text-zinc-300 light:hover:text-zinc-700 transition-colors block leading-relaxed"
                >
                  {info.value}
                </a>
              ) : (
                <p className="mt-1.5 text-sm text-zinc-500 light:text-zinc-600 leading-relaxed">
                  {info.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
