import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeId = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (menuOpen && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog.open) dialog.close();
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav-shell ${scrolled ? "is-scrolled" : ""}`} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#hero" className="nav-brand" aria-label="Home">
            <span className="nav-brand__avatar">
              <img src="/assets/avatar/anime-subash-512.png" alt="Subash Ghimire" />
            </span>
            <span className="nav-brand__text">
              <strong>Subash Ghimire</strong>
              <small>
                <i className="nav-dot" />
                full-stack engineer
              </small>
            </span>
          </a>
          <div className="nav-center">
            {navLinks.map((link, i) => {
              const active = activeId === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "location" : undefined}
                  className={`nav-link ${active ? "is-active" : ""}`}
                >
                  <span className="nav-link__index">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="nav-actions">
            <a
              href="/subash_ghimire_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
              aria-label="View resume (opens in new tab)"
            >
              Resume
              <i className="ph ph-arrow-up-right" />
            </a>
          </div>
          <div className="nav-mobile-actions">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              className="nav-icon-btn"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <i className="ph ph-list text-base" />
            </button>
          </div>
        </div>
      </nav>

      <dialog
        ref={dialogRef}
        id="mobile-nav"
        className="nav-overlay"
        aria-label="Navigation menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") setMenuOpen(false);
        }}
        onClose={() => {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }}
      >
        <div className="nav-overlay__panel">
          <div className="nav-overlay__head">
            <span className="ide-command">
              <span>subash@portfolio</span>:~$
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="nav-icon-btn"
              aria-label="Close menu"
            >
              <i className="ph ph-x text-base" />
            </button>
          </div>
          <p className="nav-overlay__title">
            <i className="ph ph-folder-open" />
            Jump to section
          </p>
          <div className="nav-overlay__links">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="nav-overlay__item"
                aria-current={activeId === link.href.slice(1) ? "page" : undefined}
              >
                <span className="nav-overlay__index">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
                <i className="ph ph-arrow-up-right" />
              </a>
            ))}
          </div>
          <a
            href="/subash_ghimire_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="nav-overlay__resume"
          >
            <i className="ph ph-download-simple" />
            Download resume
            <i className="ph ph-arrow-up-right" />
          </a>
        </div>
      </dialog>
    </>
  );
}
