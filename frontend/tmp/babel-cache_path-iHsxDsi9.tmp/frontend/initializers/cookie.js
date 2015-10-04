import Cookie from '../lib/cookie';

export default {
  name: 'cookie',
  initialize: function initialize(container, app) {
    app.register('cookie:main', Cookie);
  }
};