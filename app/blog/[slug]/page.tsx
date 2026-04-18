import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { data, content };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const { data, content } = getPost(slug);

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-12 border-b border-text-muted/20 pb-10">
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">
          {data.series}
        </p>
        <h1 className="text-4xl sm:text-5xl font-sans font-medium text-text-primary tracking-tight mb-4">
          {data.title}
        </h1>
        <p className="font-mono text-text-muted text-xs">{data.date}</p>
      </div>

      {/* Post Content */}
      <article className="prose prose-invert prose-p:text-text-primary/70 prose-headings:text-text-primary prose-headings:font-sans prose-a:text-accent max-w-none">
        <MDXRemote source={content} />
      </article>
    </section>
  );
}
