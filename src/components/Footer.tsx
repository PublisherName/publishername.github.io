export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 light:border-zinc-200/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 light:text-zinc-400">&copy; 2026 Subash Ghimire</p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="text-xs text-zinc-600 light:text-zinc-400 hover:text-zinc-400 light:hover:text-zinc-600 transition-colors"
          >
            Privacy
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/publishername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 light:text-zinc-400 hover:text-zinc-400 light:hover:text-zinc-600 transition-colors"
              aria-label="GitHub"
            >
              <i className="ph ph-github-logo text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/publishername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 light:text-zinc-400 hover:text-zinc-400 light:hover:text-zinc-600 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="ph ph-linkedin-logo text-lg" />
            </a>
            <a
              href="mailto:info@subashghimire.info.np"
              className="text-zinc-600 light:text-zinc-400 hover:text-zinc-400 light:hover:text-zinc-600 transition-colors"
              aria-label="Email"
            >
              <i className="ph ph-envelope text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
