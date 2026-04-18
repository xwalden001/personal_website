import Link from "next/link";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16 border-b border-text-muted/20 pb-10">
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">
          About Me
        </p>
        <h1 className="text-4xl sm:text-5xl font-sans font-medium text-text-primary tracking-tight">
          Who I Am
        </h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Bio — Left */}
        <div className="md:col-span-2 space-y-6 text-text-primary/70 leading-relaxed">
          {/* Replace this placeholder with your written content */}
          <p>[ Your intro paragraph goes here. ]</p>
          <p>[ Your story — college, TLP, Target, what you've built. ]</p>
          <p>
            [ Why you're writing this blog and what you're working toward. ]
          </p>
        </div>

        {/* Sidebar — Right */}
        <div className="space-y-8">
          {/* Current */}
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              Current
            </p>
            <p className="text-text-primary text-sm">Software Engineer</p>
            <p className="text-text-muted font-mono text-xs mt-1">
              Target · Minneapolis, MN
            </p>
          </div>

          {/* Stack */}
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              Stack
            </p>
            <ul className="space-y-1">
              {[
                "React / TypeScript",
                "Node.js / Python",
                "PostgreSQL / Elasticsearch",
                "Docker / GitHub Actions",
                "Azure",
              ].map((tech) => (
                <li key={tech} className="font-mono text-xs text-text-muted">
                  → {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              Links
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/xwalden001"
                  target="_blank"
                  className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
                >
                  → GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/yourhandle"
                  target="_blank"
                  className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
                >
                  → LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
