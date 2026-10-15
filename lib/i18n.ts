export type Locale = 'nl' | 'en'

type MenuItem = { name: string; description?: string; price: string }
type MenuCategory = { title: string; items: MenuItem[] }

export const contact = {
  street: 'Badhuisstraat 114',
  postal: '2584 HL Den Haag',
  district: 'Scheveningen',
  phone: '+31 6 24445900',
  phoneHref: 'tel:+31624445900',
  instagram: '@tigersharkcoffee',
  instagramHref: 'https://www.instagram.com/tigersharkcoffee/',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Tigershark+Coffee+Badhuisstraat+114+Den+Haag',
}

export const translations = {
  nl: {
    nav: { menu: 'Menu', about: 'Over ons', visit: 'Bezoek', switchLabel: 'Taal wijzigen' },
    hero: {
      eyebrow: 'Specialty coffee · Scheveningen',
      title: 'Sterke koffie. Zoute lucht.',
      body: 'Een kleine espressobar op de Badhuisstraat, een paar minuten lopen van het strand. Kom binnen voor een flat white na het surfen of een toastie in de zon.',
      ctaMenu: 'Bekijk het menu',
      ctaVisit: 'Route & openingstijden',
    },
    about: {
      title: 'Van de golf naar de bar',
      body: 'Tigershark Coffee is in 2018 begonnen met een simpele missie: echt goede koffie serveren in een relaxte, surf-geïnspireerde zaak. We werken met zorgvuldig geselecteerde bonen, bieden altijd plantaardige melk aan en bakken onze toasties vers.',
      note: 'Laptopvrij — hier praat je met elkaar, niet met je inbox.',
      stats: [
        { value: '2018', label: 'Sinds' },
        { value: '5 min', label: 'Naar het strand' },
        { value: '100%', label: 'Specialty' },
      ],
    },
    menu: {
      title: 'Menu',
      subtitle: 'Alle koffie ook met haver-, soja- of amandelmelk.',
      disclaimer: 'Prijzen kunnen afwijken. Vraag aan de bar naar de bonen en specials van de week.',
      categories: [
        {
          title: 'Koffie',
          items: [
            { name: 'Espresso', price: '2,80' },
            { name: 'Doppio', price: '3,40' },
            { name: 'Americano', price: '3,40' },
            { name: 'Cortado', price: '3,60' },
            { name: 'Cappuccino', price: '3,90' },
            { name: 'Flat white', price: '4,20' },
            { name: 'Latte', price: '4,20' },
            { name: 'Filterkoffie', description: 'Wisselende single origin', price: '4,00' },
          ],
        },
        {
          title: 'Overig drinken',
          items: [
            { name: 'Chai latte', price: '4,50' },
            { name: 'Matcha latte', price: '4,80' },
            { name: 'Warme chocolademelk', price: '4,00' },
            { name: 'Verse muntthee', price: '3,50' },
            { name: 'Iced latte', price: '4,80' },
            { name: 'Plantaardige melk', description: 'Haver, soja of amandel', price: '+0,50' },
          ],
        },
        {
          title: 'Eten',
          items: [
            { name: 'Ham & kaas tosti', description: 'Op zuurdesem', price: '6,50' },
            { name: 'Kaas & tomaat tosti', description: 'Op zuurdesem', price: '6,00' },
            { name: 'Avocado toast', description: 'Chili, limoen, zaden', price: '8,50' },
            { name: 'Bietentoast', description: 'Geroosterde biet, hummus, kruiden', price: '8,00' },
          ],
        },
        {
          title: 'Zoet',
          items: [
            { name: 'Pastel de nata', price: '2,90' },
            { name: 'Brownie', price: '3,50' },
            { name: 'Bananenbrood', price: '3,50' },
            { name: 'Taart van de dag', price: '4,50' },
          ],
        },
      ] satisfies MenuCategory[],
    },
    visit: {
      title: 'Kom langs',
      address: 'Adres',
      hours: 'Openingstijden',
      contact: 'Contact',
      weekdays: 'Maandag – vrijdag',
      weekends: 'Zaterdag – zondag',
      directions: 'Open in Google Maps',
      call: 'Bel ons',
      follow: 'Volg ons op Instagram',
    },
    footer: { tagline: 'Koffie voor surfers, wandelaars en iedereen ertussenin.', rights: 'Alle rechten voorbehouden.' },
  },
  en: {
    nav: { menu: 'Menu', about: 'About', visit: 'Visit', switchLabel: 'Change language' },
    hero: {
      eyebrow: 'Specialty coffee · Scheveningen',
      title: 'Strong coffee. Salty air.',
      body: 'A small espresso bar on Badhuisstraat, a few minutes walk from the beach. Drop in for a flat white after your surf or a toastie in the sun.',
      ctaMenu: 'See the menu',
      ctaVisit: 'Directions & hours',
    },
    about: {
      title: 'From the wave to the bar',
      body: 'Tigershark Coffee started in 2018 with a simple mission: serve seriously good coffee in a relaxed, surf-inspired spot. We work with carefully selected beans, always offer plant-based milk and grill our toasties fresh.',
      note: 'Laptop-free — here you talk to each other, not your inbox.',
      stats: [
        { value: '2018', label: 'Since' },
        { value: '5 min', label: 'To the beach' },
        { value: '100%', label: 'Specialty' },
      ],
    },
    menu: {
      title: 'Menu',
      subtitle: 'All coffees available with oat, soy or almond milk.',
      disclaimer: 'Prices may vary. Ask at the bar about this week’s beans and specials.',
      categories: [
        {
          title: 'Coffee',
          items: [
            { name: 'Espresso', price: '2,80' },
            { name: 'Doppio', price: '3,40' },
            { name: 'Americano', price: '3,40' },
            { name: 'Cortado', price: '3,60' },
            { name: 'Cappuccino', price: '3,90' },
            { name: 'Flat white', price: '4,20' },
            { name: 'Latte', price: '4,20' },
            { name: 'Filter coffee', description: 'Rotating single origin', price: '4,00' },
          ],
        },
        {
          title: 'Other drinks',
          items: [
            { name: 'Chai latte', price: '4,50' },
            { name: 'Matcha latte', price: '4,80' },
            { name: 'Hot chocolate', price: '4,00' },
            { name: 'Fresh mint tea', price: '3,50' },
            { name: 'Iced latte', price: '4,80' },
            { name: 'Plant-based milk', description: 'Oat, soy or almond', price: '+0,50' },
          ],
        },
        {
          title: 'Food',
          items: [
            { name: 'Ham & cheese toastie', description: 'On sourdough', price: '6,50' },
            { name: 'Cheese & tomato toastie', description: 'On sourdough', price: '6,00' },
            { name: 'Avocado toast', description: 'Chili, lime, seeds', price: '8,50' },
            { name: 'Beet toast', description: 'Roasted beetroot, hummus, herbs', price: '8,00' },
          ],
        },
        {
          title: 'Sweet',
          items: [
            { name: 'Pastel de nata', price: '2,90' },
            { name: 'Brownie', price: '3,50' },
            { name: 'Banana bread', price: '3,50' },
            { name: 'Cake of the day', price: '4,50' },
          ],
        },
      ] satisfies MenuCategory[],
    },
    visit: {
      title: 'Come say hi',
      address: 'Address',
      hours: 'Opening hours',
      contact: 'Contact',
      weekdays: 'Monday – Friday',
      weekends: 'Saturday – Sunday',
      directions: 'Open in Google Maps',
      call: 'Call us',
      follow: 'Follow us on Instagram',
    },
    footer: { tagline: 'Coffee for surfers, strollers and everyone in between.', rights: 'All rights reserved.' },
  },
} as const

export type Dictionary = (typeof translations)[Locale]
