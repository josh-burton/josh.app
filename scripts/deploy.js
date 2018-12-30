var ghpages = require('gh-pages');

console.log('Starting github pages deploy...');
 
ghpages.publish('public', {
  branch: 'master',
  repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com:hugomn/hugomn.github.io.git',
  user: {
    name: 'Hugo Nogueira',
    email: 'hugomn@gmail.com'
  }
}, function(err) { console.log('Error: ' + err); });

// ghpages.publish('public', {
//     branch: 'master',
//     dest: 'docs',
//     user: {
//       name: 'Hugo Nogueira',
//       email: 'hugomn@gmail.com'
//     }
//   }, function(err) { console.log('Error: ' + err); });
