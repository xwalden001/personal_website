import Link from "next/link";

const posts = [
  {
    slug: "the-work-wasnt-the-point",
    title: "The Work Wasn't the Point",
    series: "Becoming a Great Engineer",
    date: "April 2026",
    description:
      "How I learned that completing tasks and actually understanding them are two very different things — and why that gap almost cost me.",
  },
];

export default function Blog() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16 border-b border-text-muted/20 pb-10">
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">
          Writing
        </p>
        <h1 className="text-4xl sm:text-5xl font-sans font-medium text-text-primary tracking-tight">
          Blog
        </h1>
      </div>

      {/* Post List */}
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="border border-text-muted/20 p-8 hover:border-accent/50 transition-colors">
                {/* Series + Date */}
                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono text-accent text-xs tracking-widest uppercase">
                    {post.series}
                  </p>
                  <p className="font-mono text-text-muted text-xs">
                    {post.date}
                  </p>
                </div>

                {/* Title */}
                <h2 className="text-xl font-sans font-medium text-text-primary group-hover:text-accent transition-colors mb-3">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {post.description}
                </p>

                {/* Read More */}
                <p className="font-mono text-xs text-accent tracking-widest uppercase">
                  Read More →
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
