interface Route {
  en: string;
  cy: string;
}

export const routes: Record<string, Route> = {
  '/': {
    en: '/',
    cy: '/',
  },
  events: {
    en: 'events',
    cy: 'events',
  },
  news: {
    en: 'news',
    cy: 'news',
  },
  team: {
    en: 'team',
    cy: 'team',
  },
  contact: {
    en: 'contact',
    cy: 'contact',
  },
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const languages = ['en', 'cy'] as const;
export type Language = (typeof languages)[number];

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.team': 'Our Team',
    'nav.events': 'Events',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'events.upcomingEvents': 'Upcoming Events',
    'events.pastEvents': 'Past Events',
    'events.showPastEvents': 'Show Past Events',
    'events.hidePastEvents': 'Hide Past Events',
    'events.noPastEvents': 'No past events',
    'events.noUpcomingEvents': 'No upcoming events',
    'events.time': 'Time',
    'events.location': 'Location',
    'news.title': 'Latest News',
    'news.noNews': 'No news articles available',
    'news.noImage': 'No image available',
    'news.readMore': 'Read more',
    'content.tag.news': 'News',
    'content.tag.event': 'Event',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us',
    'contact.address.title': 'Visit Us',
    'contact.email.title': 'Email Us',
    'contact.social.title': 'Follow Us',
    'contact.address.line1': 'Wales Gene Park',
    'contact.address.line2': 'Wales Genomic Health Centre',
    'contact.address.line3': 'Cardiff Edge Business Park',
    'contact.address.line4': 'Longwood Drive',
    'contact.address.line5': 'Whitchurch',
    'contact.address.line6': 'CARDIFF',
    'contact.address.line7': 'CF14 7YU',
    'meta.events.description': 'Discover our upcoming events and activities',
    'meta.news.description': 'Latest news and updates from Wales Gene Park',
    'meta.team.description': 'Meet our dedicated team of professionals',
    'meta.cookies.description': 'Information about how we use cookies',
    'meta.privacy.description': 'Our privacy policy and data protection information',
    'meta.contact.description': 'Get in touch with Wales Gene Park',
  },
  cy: {
    'nav.home': 'Hafan',
    'nav.team': 'Ein Tîm',
    'nav.events': 'Digwyddiadau',
    'nav.news': 'Newyddion',
    'nav.contact': 'Cysylltu',
    'events.upcomingEvents': 'Digwyddiadau i Ddod',
    'events.pastEvents': 'Digwyddiadau Blaenorol',
    'events.showPastEvents': 'Dangos Digwyddiadau Blaenorol',
    'events.hidePastEvents': 'Cuddio Digwyddiadau Blaenorol',
    'events.noPastEvents': 'Dim digwyddiadau blaenorol',
    'events.noUpcomingEvents': 'Dim digwyddiadau i ddod',
    'events.time': 'Amser',
    'events.location': 'Lleoliad',
    'news.title': 'Newyddion Diweddaraf',
    'news.noNews': 'Dim erthyglau newyddion ar gael',
    'news.noImage': 'Dim delwedd ar gael',
    'news.readMore': 'Darllen mwy',
    'content.tag.news': 'Newyddion',
    'content.tag.event': 'Digwyddiad',
    'contact.title': 'Cysylltu â Ni',
    'contact.subtitle': 'Cysylltwch â ni',
    'contact.address.title': 'Ymweld â Ni',
    'contact.email.title': 'E-bostiwch Ni',
    'contact.social.title': 'Dilynwch Ni',
    'contact.address.line1': 'Parc Genynnau Cymru',
    'contact.address.line2': 'Canolfan Iechyd Genomig Cymru',
    'contact.address.line3': 'Parc Busnes Cardiff Edge',
    'contact.address.line4': 'Longwood Drive',
    'contact.address.line5': 'Yr Eglwys Newydd',
    'contact.address.line6': 'CAERDYDD',
    'contact.address.line7': 'CF14 7YU',
    'meta.events.description': 'Darganfyddwch ein digwyddiadau a gweithgareddau sydd i ddod',
    'meta.news.description': 'Newyddion a diweddariadau diweddaraf o Barc Genynnau Cymru',
    'meta.team.description': "Cwrdd â'n tîm ymroddedig o weithwyr proffesiynol",
    'meta.cookies.description': 'Gwybodaeth am sut rydym yn defnyddio cwcis',
    'meta.privacy.description': 'Ein polisi preifatrwydd a gwybodaeth diogelu data',
    'meta.contact.description': 'Cysylltwch â Pharc Genynnau Cymru',
  },
};
