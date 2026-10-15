'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from './language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="border-b-2 border-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col gap-6">
          <p className="w-fit border-2 border-foreground px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-6xl uppercase leading-[0.95] text-balance md:text-8xl">{t.hero.title}</h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">{t.hero.body}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-6 py-3 font-display text-lg uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaMenu}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center border-2 border-foreground px-6 py-3 font-display text-lg uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
            >
              {t.hero.ctaVisit}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-foreground bg-foreground" aria-hidden="true" />
          <div className="relative border-2 border-foreground bg-white p-6">
            <Image
              src="/images/tiger-emblem.jpg"
              alt="Tigershark Coffee emblem: a tiger with round sunglasses bursting through a life buoy"
              width={790}
              height={806}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
