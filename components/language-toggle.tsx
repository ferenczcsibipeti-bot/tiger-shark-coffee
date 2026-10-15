'use client'

import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n'
import { useLanguage } from './language-provider'

const options: { value: Locale; label: string; full: string }[] = [
  { value: 'nl', label: 'NL', full: 'Nederlands' },
  { value: 'en', label: 'EN', full: 'English' },
]

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div role="group" aria-label={t.nav.switchLabel} className="flex border-2 border-foreground">
      {options.map((option) => {
        const active = option.value === locale
        return (
          <button
            key={option.value}
            type="button"
            lang={option.value}
            aria-pressed={active}
            aria-label={option.full}
            onClick={() => setLocale(option.value)}
            className={cn(
              'px-3 py-1.5 font-display text-sm tracking-wider transition-colors',
              active ? 'bg-foreground text-background' : 'bg-background text-foreground hover:bg-secondary',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
