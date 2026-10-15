'use client'

import Image from 'next/image'
import { contact } from '@/lib/i18n'
import { useLanguage } from './language-provider'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center md:px-6">
        <Image src="/images/logo.png" alt="Tigershark Coffee" width={200} height={76} className="h-14 w-auto invert" />
        <p className="max-w-sm text-background/80">{t.footer.tagline}</p>
        <p className="text-sm text-background/60">
          {contact.street}, {contact.postal} · {contact.phone}
        </p>
        <p className="text-xs text-background/50">
          {'© '}
          {new Date().getFullYear()} Tigershark Coffee. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
