import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import {
  contactInfo,
  educationList,
  experienceList,
  projects,
  skillGroups,
  stats,
} from "@/data/projects";

export default function App() {
  return (
    <div className="bg-zinc-950 light:bg-zinc-50 text-zinc-100 light:text-zinc-900 antialiased selection:bg-emerald-500/30">
      <a
        href="#main-content"
        className="fixed -top-full left-4 z-[9999] px-4 py-2 bg-emerald-500 text-zinc-950 text-sm font-medium rounded-lg focus:top-4 transition-all"
      >
        Skip to content
      </a>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/8 via-transparent to-transparent light:from-emerald-500/5 pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/3 via-transparent to-transparent light:from-amber-500/8 pointer-events-none -z-10" />
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <CustomCursor />
      <aside className="side-socials side-socials--right" aria-label="Social links">
        <a
          href="https://github.com/publishername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <i className="ph ph-github-logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/publishername/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <i className="ph ph-linkedin-logo" />
        </a>
        <span className="side-socials__line" aria-hidden="true" />
      </aside>
      <aside className="side-socials side-socials--left" aria-label="Email">
        <a href="mailto:info@subashghimire.info.np">info@subashghimire.info.np</a>
        <span className="side-socials__line" aria-hidden="true" />
      </aside>
      <main id="main-content">
        <Hero stats={stats} />
        <Projects projects={projects} />
        <Experience experienceList={experienceList} />
        <Skills skillGroups={skillGroups} />
        <About />
        <Education educationList={educationList} />
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer />
    </div>
  );
}
