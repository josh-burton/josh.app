const languages = require('./languages');

module.exports = {
  siteUrl: 'https://hugomagalhaes.com',
  author: {
    name: 'Hugo Nogueira',
    homeCity: 'Berlin',
    email: 'hugomn@gmail.com',
    defaultLink: 'https://github.com/hugomn'
  },
  sourceCodeLink: 'https://github.com/hugomn/hugomagalhaes.com',
  menu: [
    {label: 'home', slug: '/'},
    {label: 'posts', slug: '/blog/'},
    {label: 'tags', slug: '/tags/'},
    {label: 'about', slug: '/about/'},
    {label: 'sourceCode', link: 'https://github.com/hugomn/hugomagalhaes.com'},
    {label: 'contact', slug: '/contact/'}
  ],  
  languages,
  contact: [
    {
      type: 'email',
      value: 'hugomn@gmail.com',
      link: 'mailto:hugomn@gmail.com'
    },
    {
      type: 'phone',
      value: '+49 151 74477807',
      country: 'de',
      link: 'tel:+49 151 74477807'
    }
  ]
};
