var ghpages = require('gh-pages');

console.log('Starting github pages deploy...');
 
ghpages.publish('public', {
  branch: 'master',
  dest: 'docs',
  user: {
    name: 'Hugo Nogueira',
    email: 'hugomn@gmail.com'
  }
}, function(err) { console.log('Error: ' + err); });
