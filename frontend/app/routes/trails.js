import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return Ember.$.getJSON(`/api/v1/search/?state=${params.state}`).then((response) => {
      return response.trails;
    });
  }
});
