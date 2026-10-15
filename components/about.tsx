'use client'

import Image from 'next/image'
import { useLanguage } from './language-provider'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-20 border-b-2 border-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="order-2 border-2 border-foreground bg-white md:order-1">
          <Image
            src="/images/wave.png"
            alt="Ink illustration of a curling wave with a surfboard and shark fin"
            width={1024}
            height={1024}
            className="h-auto w-full"
          />
        </div>
        <div className="order-1 flex flex-col gap-6 md:order-2">
          <h2 className="font-display text-5xl uppercase leading-none text-balance md:text-6xl">{t.about.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{t.about.body}</p>
          <p className="border-l-4 border-foreground pl-4 font-semibold">{t.about.note}</p>
          <dl className="grid grid-cols-3 border-2 border-foreground">
            {t.about.stats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col-reverse p-4 ${i > 0 ? 'border-l-2 border-foreground' : ''}`}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{stat.label}</dt>
                <dd className="font-display text-3xl md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
