import { sectionRoutes } from './i18n/routes';

export const headerData = {
  en: {
    links: [
      {
        text: 'Home',
        href: '/en/',
      },
      {
        text: 'Our Services',
        href: `/en/${sectionRoutes.services.en}`,
      },
      {
        text: 'Our Team',
        href: `/en/${sectionRoutes.team.en}`,
      },
      {
        text: 'Events',
        href: `/en/${sectionRoutes.events.en}`,
      },
      {
        text: 'News',
        href: `/en/${sectionRoutes.news.en}`,
      },
      {
        text: 'Contact',
        href: `/en/${sectionRoutes.contact.en}`,
      },
    ],
  },
  cy: {
    links: [
      {
        text: 'Hafan',
        href: '/cy/',
      },
      {
        text: 'Ein Gwasanaethau',
        href: `/cy/${sectionRoutes.services.cy}`,
      },
      {
        text: 'Ein Tîm',
        href: `/cy/${sectionRoutes.team.cy}`,
      },
      {
        text: 'Digwyddiadau',
        href: `/cy/${sectionRoutes.events.cy}`,
      },
      {
        text: 'Newyddion',
        href: `/cy/${sectionRoutes.news.cy}`,
      },
      {
        text: 'Cysylltu',
        href: `/cy/${sectionRoutes.contact.cy}`,
      },
    ],
  },
};

export const footerData = {
  en: {
    links: [
      {
        title: 'About',
        links: [
          { text: 'Our Team', href: `/en/${sectionRoutes.team.en}` },
          { text: 'Contact', href: `/en/${sectionRoutes.contact.en}` },
          { text: 'Privacy Policy', href: '/en/privacy' },
          { text: 'Cookie Policy', href: '/en/cookies' },
        ],
      },
      {
        title: 'News & Events',
        links: [
          { text: 'News', href: `/en/${sectionRoutes.news.en}` },
          { text: 'Events', href: `/en/${sectionRoutes.events.en}` },
        ],
      },
    ],
    socialLinks: [
      { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/rss.xml' },
    ],
    footNote: `
      <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
      Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://walesgenepark.wales/"> Wales Gene Park</a> · All rights reserved.
    `,
  },
  cy: {
    links: [
      {
        title: 'Amdanom ni',
        links: [
          { text: 'Ein Tîm', href: `/cy/${sectionRoutes.team.cy}` },
          { text: 'Cysylltu', href: `/cy/${sectionRoutes.contact.cy}` },
          { text: 'Polisi Preifatrwydd', href: '/cy/privacy' },
          { text: 'Polisi Cwcis', href: '/cy/cookies' },
        ],
      },
      {
        title: 'Newyddion a Digwyddiadau',
        links: [
          { text: 'Newyddion', href: `/cy/${sectionRoutes.news.cy}` },
          { text: 'Digwyddiadau', href: `/cy/${sectionRoutes.events.cy}` },
        ],
      },
    ],
    socialLinks: [
      { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/rss.xml' },
    ],
    footNote: `
      <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
      Wedi'i wneud gan <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://walesgenepark.wales/"> Parc Genynnau Cymru</a> · Pob hawl wedi'i gadw.
    `,
  },
};
