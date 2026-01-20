'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ]
  
  return (
    <nav className="border-b border-surface">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-text-primary hover:text-accent">
            Grant Williams
          </Link>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
