const languages = require('./languages');

module.exports = {
  siteUrl: 'https://hugomagalhaes.com',
  author: {
    name: 'Hugo Nogueira',
    homeCity: 'Berlin',
    email: 'hugomn@gmail.com',
    twitter: 'hugomn',
    defaultLink: 'https://github.com/hugomn'
  },
  sourceCodeLink: 'https://github.com/hugomn/hugomagalhaes.com',
  menu: [
    {label: 'home', slug: '/'},
    // {label: 'blog', slug: '/blog/'},
    {label: 'about', slug: '/about/'},
    {label: 'contact', slug: '/contact/'},
    {label: 'call', link: 'http://call.hugomagalhaes.com/'},
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
