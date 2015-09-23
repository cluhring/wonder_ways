import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return Ember.$.getJSON('/api/v1/trails/' + params.trail_id).then(function (response) {
      return response.trail;
    });
  }
});
