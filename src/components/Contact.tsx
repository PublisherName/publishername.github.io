import { Reveal } from "@/components/Reveal";
import type { ContactInfo } from "@/types";
import { type FormEvent, useState } from "react";

interface ContactProps {
  contactInfo: ContactInfo[];
}

export function Contact({ contactInfo }: ContactProps) {
  const emailHref =
    contactInfo.find((info) => info.label === "Email")?.href ?? "mailto:info@subashghimire.info.np";
  const emailAddress = emailHref.replace(/^mailto:/, "");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio enquiry from ${form.name}`,
          _replyto: form.email,
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setStatus(`Message sent to ${emailAddress}. I'll get back to you soon.`);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus(`Could not send right now. Please email ${emailAddress} directly.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="pt-24 pb-28 md:pt-32 md:pb-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/8 via-emerald-500/3 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500 mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            Get in touch
          </h2>
          <p className="mt-3 text-zinc-500 light:text-zinc-600 max-w-md leading-relaxed">
            Want to collaborate, have a question, or just want to say hello.
          </p>
        </Reveal>
        <a href={emailHref} className="contact-primary mt-10">
          <span>
            <i className="ph ph-envelope" />
            Email me directly
          </span>
          <span className="contact-primary__address">{emailAddress}</span>
          <i className="ph ph-arrow-up-right" />
        </a>
        <Reveal delay={80}>
          <div className="contact-workspace mt-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__head">
                <span>
                  <i className="ph ph-terminal-window" />
                  ~/contact/new-message
                </span>
                <span>POST</span>
              </div>
              <div className="contact-form__grid">
                <div className="contact-form__field">
                  <label htmlFor="contact-name" className="contact-form__label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="contact-form__input"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-email" className="contact-form__label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="contact-form__input"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                  />
                </div>
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-message" className="contact-form__label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me what you're building..."
                  className="contact-form__input contact-form__textarea"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
              </div>
              <button type="submit" className="contact-form__button" disabled={submitting}>
                {submitting ? "Sending..." : "Send message"}
                <i className="ph ph-arrow-up-right" />
              </button>
              <output className="contact-form__status" aria-live="polite">
                {status || `Sends directly to ${emailAddress}.`}
              </output>
            </form>
            <div className="contact-cards">
              {contactInfo.map((info, i) => (
                <Reveal key={info.label} delay={i * 60}>
                  <div className="contact-card">
                    <div className="contact-card__icon">
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
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
