'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Portfolio' },
  ]

  return (
    <nav className="border-b border-surface">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-xl font-semibold text-text-primary hover:text-accent">
            <Image
              src="/images/grant_beach.png"
              alt="Grant Brady Williams"
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            Grant Brady Williams
          </Link>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                } transition-all duration-300 hover:tracking-wide`}
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
