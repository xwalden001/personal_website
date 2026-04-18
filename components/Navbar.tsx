"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-text-muted/20">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-mono text-accent text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          Xavier W.
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
