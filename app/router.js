import EmberRouter from '@ember/routing/router';
import config from 'ember-js-tutotial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('item', { path: '/item/:item_id' });
  this.route('no-page-found', { path: '/*path' });
  this.route('cart', { path: 'shopping-cart' });
});
