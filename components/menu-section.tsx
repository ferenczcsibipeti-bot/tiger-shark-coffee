'use client'

import Image from 'next/image'
import { useLanguage } from './language-provider'

const categoryImages = ['/images/espresso.png', null, '/images/toastie.png', null] as const

export function MenuSection() {
  const { t } = useLanguage()

  return (
    <section id="menu" className="scroll-mt-20 border-b-2 border-foreground bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-7xl uppercase leading-none md:text-9xl">{t.menu.title}</h2>
          <p className="max-w-xs text-muted-foreground md:text-right">{t.menu.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.menu.categories.map((category, index) => {
            const image = categoryImages[index]
            return (
              <article key={category.title} className="flex flex-col border-2 border-foreground bg-background">
                <header className="flex items-center justify-between gap-4 border-b-2 border-foreground bg-foreground px-5 py-3 text-background">
                  <h3 className="font-display text-3xl uppercase tracking-wide">{category.title}</h3>
                  <span className="font-display text-lg" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </header>
                {image && (
                  <div className="border-b-2 border-foreground bg-white">
                    <Image
                      src={image}
                      alt=""
                      width={1024}
                      height={1024}
                      className="mx-auto h-40 w-auto object-contain py-2"
                    />
                  </div>
                )}
                <ul className="flex flex-col divide-y divide-foreground/15 px-5 py-2">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-3 py-3">
                      <div className="flex flex-col">
                        <span className="font-semibold">{item.name}</span>
                        {'description' in item && item.description && (
                          <span className="text-sm text-muted-foreground">{item.description}</span>
                        )}
                      </div>
                      <span className="mx-1 flex-1 translate-y-[-4px] border-b-2 border-dotted border-foreground/40" aria-hidden="true" />
                      <span className="font-display text-xl tabular-nums">
                        <span className="sr-only">EUR </span>
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">{t.menu.disclaimer}</p>
      </div>
    </section>
  )
}
