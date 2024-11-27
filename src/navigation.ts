export const headerData = {
  en: {
    links: [
      {
        text: 'Home',
        href: '/en/',
      },
      {
        text: 'Our Team',
        href: '/en/team',
      },
      {
        text: 'Events',
        href: '/en/events',
      },
      {
        text: 'News',
        href: '/en/news',
      },
      {
        text: 'Contact',
        href: '/en/contact',
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
        text: 'Ein Tîm',
        href: '/cy/tim',
      },
      {
        text: 'Digwyddiadau',
        href: '/cy/events',
      },
      {
        text: 'Newyddion',
        href: '/cy/newyddion',
      },
      {
        text: 'Cysylltu',
        href: '/cy/cysylltu',
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
          { text: 'Our Team', href: '/en/team' },
          { text: 'Contact', href: '/en/contact' },
          { text: 'Privacy Policy', href: '/en/privacy' },
          { text: 'Cookie Policy', href: '/en/cookies' },
        ],
      },
      {
        title: 'News & Events',
        links: [
          { text: 'News', href: '/en/news' },
          { text: 'Events', href: '/en/events' },
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
          { text: 'Ein Tîm', href: '/cy/tim' },
          { text: 'Cysylltu', href: '/cy/cysylltu' },
          { text: 'Polisi Preifatrwydd', href: '/cy/privacy' },
          { text: 'Polisi Cwcis', href: '/cy/cookies' },
        ],
      },
      {
        title: 'Newyddion a Digwyddiadau',
        links: [
          { text: 'Newyddion', href: '/cy/newyddion' },
          { text: 'Digwyddiadau', href: '/cy/events' },
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
