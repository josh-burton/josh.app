exports.onClientEntry = function () {
  require('es6-object-assign').polyfill();
};

require('prismjs/themes/prism-tomorrow.css');
