const routes = require('next-routes');

// NextJs doesn't support regex route matching, so we use the `next-routes` package to provide that ability.
module.exports = routes()
  .add('/:lang([a-z]{2}-[A-Z]{2})/:sitecoreRoute*', 'index')
  .add('/:lang([a-z]{2})/:sitecoreRoute*', 'index')
  .add('/:sitecoreRoute*', 'index');
