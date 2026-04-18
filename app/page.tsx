import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Kicker */}
      <p className="font-mono text-accent text-xs tracking-widest uppercase mb-6">
        Full-Stack Software Engineer
      </p>

      {/* Name */}
      <h1 className="text-5xl sm:text-7xl font-sans font-medium text-text-primary tracking-tight mb-4">
        Xavier Walden
      </h1>

      {/* Tagline */}
      <p className="text-text-muted font-mono text-sm tracking-wide mb-6">
        Building thoughtful software from Minneapolis, MN
      </p>

      {/* Bio */}
      <p className="text-text-primary/70 text-base max-w-xl leading-relaxed mb-10">
        Software engineer at Target with a focus on full-stack development,
        internal tooling, and security observability. Currently documenting the
        journey of becoming a great engineer — one lesson at a time.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-accent text-background font-mono text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 border border-accent text-accent font-mono text-xs tracking-widest uppercase hover:bg-accent hover:text-background transition-all"
        >
          Blog
        </Link>
        <Link
          href="/resume"
          className="px-6 py-3 border border-text-muted text-text-muted font-mono text-xs tracking-widest uppercase hover:border-text-primary hover:text-text-primary transition-all"
        >
          Resume
        </Link>
      </div>
    </section>
  );
}
