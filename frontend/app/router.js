import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('trails', { path: ':state' }, function () {
    this.resource('trail', { path: ':trail_id' });
  });
  this.route('search_by_state', { path: '/search/?state=:state' });
  this.route('search_by_location', { path: '/search/?lat=:lat&lng=:lng' });
});
