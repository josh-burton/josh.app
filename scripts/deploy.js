var ghpages = require('gh-pages');

ghpages.publish('public', {
  branch: 'master',
  repo: 'git@github.com:hugomn/hugomn.github.io.git',
  user: {
    name: 'Hugo Nogueira',
    email: 'hugomn@gmail.com'
  }
});
