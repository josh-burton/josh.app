const languages = require('./languages');

module.exports = {
  siteUrl: 'https://www.josh.app',
  description: 'Mobile Developer',
  author: {
    name: 'Josh Burton',
    bio: 'Freelance Mobile Developer @ <a href="https://www.arklabs.nz">Ark Labs</a><br/>Auckland, New Zealand',
    homeCity: 'Auckland',
    email: 'josh@arklabs.nz',
    twitter: 'athornz',
    defaultLink: 'https://github.com/athornz',
    rss: 'rss.xml'
  },
  sourceCodeLink: 'https://github.com/athornz/josh.app',
  disqusShortname: 'josh-app',
  menu: [
    {label: 'home', slug: '/'},
    {label: 'blog', slug: '/blog/'},
    // {label: 'about', slug: '/about/'},
    // {label: 'contact', slug: '/contact/'}
  ],
  languages,
  contact: [
    {
      type: 'email',
      value: 'josh@arklabs.nz',
      link: 'mailto:josh@arklabs.nz'
    },
    {
      type: 'phone',
      value: '+64 211037200',
      country: 'nz',
      link: 'tel:+64 211037200'
    }
  ]
};
