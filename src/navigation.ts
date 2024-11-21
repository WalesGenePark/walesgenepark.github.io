import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  logo: {
    src: getAsset('/src/assets/images/wgp-logo.jpg'),
    alt: 'Wales Gene Park Logo',
  },
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'News',
      href: getPermalink('/news'),
    },
    {
      text: 'Our Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Events',
      href: getPermalink('/events'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'News', href: getPermalink('/news') },
        { text: 'Our Team', href: getPermalink('/team') },
        { text: 'Events', href: getPermalink('/events') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getPermalink('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Made by <a class="text-red-600 hover:underline dark:text-gray-200" href="https://walesgenepark.wales.nhs.uk/"> Wales Gene Park</a> · All rights reserved.
  `,
};
