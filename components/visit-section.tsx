'use client'

import { Camera as Instagram, Clock, MapPin, Phone } from 'lucide-react'
import { contact } from '@/lib/i18n'
import { useLanguage } from './language-provider'

export function VisitSection() {
  const { t } = useLanguage()

  return (
    <section id="visit" className="scroll-mt-20 border-b-2 border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="mb-12 font-display text-6xl uppercase leading-none md:text-8xl">{t.visit.title}</h2>

        <div className="grid border-2 border-foreground md:grid-cols-3">
          <div className="flex flex-col gap-4 p-6 md:p-8">
            <h3 className="flex items-center gap-2 font-display text-2xl uppercase tracking-wide">
              <MapPin className="size-5" aria-hidden="true" />
              {t.visit.address}
            </h3>
            <address className="text-lg not-italic leading-relaxed">
              Tigershark Coffee
              <br />
              {contact.street}
              <br />
              {contact.postal}
              <br />
              {contact.district}
            </address>
            <a
              href={contact.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-fit border-b-2 border-foreground font-semibold hover:bg-foreground hover:text-background"
            >
              {t.visit.directions}
            </a>
          </div>

          <div className="flex flex-col gap-4 border-t-2 border-foreground p-6 md:border-t-0 md:border-l-2 md:p-8">
            <h3 className="flex items-center gap-2 font-display text-2xl uppercase tracking-wide">
              <Clock className="size-5" aria-hidden="true" />
              {t.visit.hours}
            </h3>
            <dl className="flex flex-col gap-3 text-lg">
              <div className="flex flex-col">
                <dt className="text-muted-foreground">{t.visit.weekdays}</dt>
                <dd className="font-display text-3xl tabular-nums">08:30 – 15:00</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-muted-foreground">{t.visit.weekends}</dt>
                <dd className="font-display text-3xl tabular-nums">09:00 – 16:00</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-4 border-t-2 border-foreground bg-foreground p-6 text-background md:border-t-0 md:border-l-2 md:p-8">
            <h3 className="font-display text-2xl uppercase tracking-wide">{t.visit.contact}</h3>
            <a href={contact.phoneHref} className="group flex items-center gap-3 text-lg">
              <Phone className="size-5 shrink-0" aria-hidden="true" />
              <span className="flex flex-col">
                <span className="text-sm text-background/70">{t.visit.call}</span>
                <span className="font-semibold group-hover:underline">{contact.phone}</span>
              </span>
            </a>
            <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-lg">
              <Instagram className="size-5 shrink-0" aria-hidden="true" />
              <span className="flex flex-col">
                <span className="text-sm text-background/70">{t.visit.follow}</span>
                <span className="font-semibold group-hover:underline">{contact.instagram}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-6 aspect-[16/9] w-full border-2 border-foreground grayscale md:aspect-[21/9]">
          <iframe
            title="Map: Tigershark Coffee, Badhuisstraat 114, Den Haag"
            src="https://www.google.com/maps?q=Badhuisstraat+114,+2584+HL+Den+Haag&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
