import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { MenuSection } from '@/components/menu-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { VisitSection } from '@/components/visit-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <MenuSection />
        <About />
        <VisitSection />
      </main>
      <SiteFooter />
    </>
  )
}
