export type UIKey =
  | 'nav.home'
  | 'nav.team'
  | 'nav.events'
  | 'nav.news'
  | 'nav.contact'
  | 'nav.policy'
  | 'events.upcomingEvents'
  | 'events.pastEvents'
  | 'events.showPastEvents'
  | 'events.hidePastEvents'
  | 'events.noPastEvents'
  | 'events.noUpcomingEvents'
  | 'events.time'
  | 'events.location'
  | 'events.title'
  | 'news.title'
  | 'news.noNews'
  | 'news.noImage'
  | 'news.readMore'
  | 'content.tag.news'
  | 'content.tag.event'
  | 'policy.title'
  | 'policy.subtitle'
  | 'policy.cookies'
  | 'policy.privacy'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.address.title'
  | 'contact.email.title'
  | 'contact.social.title'
  | 'contact.address.line1'
  | 'contact.address.line2'
  | 'contact.address.line3'
  | 'contact.address.line4'
  | 'contact.address.line5'
  | 'contact.address.line6'
  | 'contact.address.line7'
  | 'meta.events.description'
  | 'meta.news.description'
  | 'meta.team.description'
  | 'meta.cookies.description'
  | 'meta.privacy.description'
  | 'meta.contact.description'
  | 'meta.policy.description';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.team': 'Team',
    'nav.events': 'Events',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.policy': 'Policy',
    'events.upcomingEvents': 'Upcoming Events',
    'events.pastEvents': 'Past Events',
    'events.showPastEvents': 'Show Past Events',
    'events.hidePastEvents': 'Hide Past Events',
    'events.noPastEvents': 'No past events',
    'events.noUpcomingEvents': 'No upcoming events',
    'events.time': 'Time',
    'events.location': 'Location',
    'events.title': 'Events',
    'news.title': 'Latest News',
    'news.noNews': 'No news articles available',
    'news.noImage': 'No image available',
    'news.readMore': 'Read More',
    'content.tag.news': 'News',
    'content.tag.event': 'Event',
    'policy.title': 'Policies',
    'policy.subtitle': 'Our policies and guidelines',
    'policy.cookies': 'Cookies Policy',
    'policy.privacy': 'Privacy Policy',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us',
    'contact.address.title': 'Address',
    'contact.email.title': 'Email',
    'contact.social.title': 'Social',
    'contact.address.line1': 'Institute of Medical Genetics',
    'contact.address.line2': 'University Hospital of Wales',
    'contact.address.line3': 'Heath Park',
    'contact.address.line4': 'Cardiff',
    'contact.address.line5': 'CF14 4XW',
    'contact.address.line6': '',
    'contact.address.line7': '',
    'meta.events.description': '',
    'meta.news.description': '',
    'meta.team.description': '',
    'meta.cookies.description': '',
    'meta.privacy.description': '',
    'meta.contact.description': '',
    'meta.policy.description': ''
  },
  cy: {
    'nav.home': 'Hafan',
    'nav.team': 'Tîm',
    'nav.events': 'Digwyddiadau',
    'nav.news': 'Newyddion',
    'nav.contact': 'Cysylltu',
    'nav.policy': 'Polisi',
    'events.upcomingEvents': 'Digwyddiadau i Ddod',
    'events.pastEvents': 'Digwyddiadau Blaenorol',
    'events.showPastEvents': 'Dangos Digwyddiadau Blaenorol',
    'events.hidePastEvents': 'Cuddio Digwyddiadau Blaenorol',
    'events.noPastEvents': 'Dim digwyddiadau blaenorol',
    'events.noUpcomingEvents': 'Dim digwyddiadau i ddod',
    'events.time': 'Amser',
    'events.location': 'Lleoliad',
    'events.title': 'Digwyddiadau',
    'news.title': 'Newyddion Diweddaraf',
    'news.noNews': 'Dim erthyglau newyddion ar gael',
    'news.noImage': 'Dim delwedd ar gael',
    'news.readMore': 'Darllen Mwy',
    'content.tag.news': 'Newyddion',
    'content.tag.event': 'Digwyddiad',
    'policy.title': 'Polisïau',
    'policy.subtitle': 'Ein polisïau a chanllawiau',
    'policy.cookies': 'Polisi Cwcis',
    'policy.privacy': 'Polisi Preifatrwydd',
    'contact.title': 'Cysylltu â Ni',
    'contact.subtitle': 'Cysylltwch â ni',
    'contact.address.title': 'Cyfeiriad',
    'contact.email.title': 'E-bost',
    'contact.social.title': 'Cymdeithasol',
    'contact.address.line1': 'Sefydliad Geneteg Feddygol',
    'contact.address.line2': 'Ysbyty Prifysgol Cymru',
    'contact.address.line3': 'Heath Park',
    'contact.address.line4': 'Caerdydd',
    'contact.address.line5': 'CF14 4XW',
    'contact.address.line6': '',
    'contact.address.line7': '',
    'meta.events.description': '',
    'meta.news.description': '',
    'meta.team.description': '',
    'meta.cookies.description': '',
    'meta.privacy.description': '',
    'meta.contact.description': '',
    'meta.policy.description': ''
  }
} as const;
