import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { contactInfo, educationList, experienceList, projects, skillGroups } from "@/data/projects";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

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
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills skillGroups={skillGroups} />
        <Projects projects={projects} />
        <Experience experienceList={experienceList} />
        <Education educationList={educationList} />
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer />
    </div>
  );
}
