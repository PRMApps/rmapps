'use client';

import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          RMApps
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 transition hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
