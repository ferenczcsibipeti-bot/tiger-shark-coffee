'use client'

import Image from 'next/image'
import { useLanguage } from './language-provider'
import { LanguageToggle } from './language-toggle'

export function SiteHeader() {
  const { t } = useLanguage()
  const links = [
    { href: '#menu', label: t.nav.menu },
    { href: '#about', label: t.nav.about },
    { href: '#visit', label: t.nav.visit },
  ]

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" aria-label="Tigershark Coffee home">
          <Image src="/images/logo.png" alt="Tigershark Coffee" width={160} height={61} priority className="h-10 w-auto md:h-12" />
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-lg uppercase tracking-wider underline-offset-8 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}
