import Ember from 'ember';

export default Ember.Controller.extend({

  trailActivities: Ember.computed.alias('model.activities'),

  isDesc: false,
  isDirections: false,

  actions: {
    expandDirections: function() {
      this.set('isDirections', true);
    },

    closeDirections: function() {
      this.set('isDirections', false);
    },

    expandDesc: function() {
      this.set('isDesc', true);
    },

    closeDesc: function() {
      this.set('isDesc', false);
    },

    filter: function(category) {
      Ember.$('.categoryType').hide();
      Ember.$(category).show();
    },
  },

  birds: function () {
    let allSpecies = this.get('model').species;

    function filterByHasClip(obj) {
       return (obj.clip_url !== "not available" && obj.clip_url !== "not found");
    }

    var birds = allSpecies.filter(filterByHasClip);

    return birds;
  }.property('model'),

  plants: function () {
    let allSpecies = this.get('model').species;

    function filterByKingdom(obj) {
       return (obj.kingdom === "Plantae");
    }

    var plants = allSpecies.filter(filterByKingdom);

    return plants;
  }.property('model'),

  animals: function () {
    let allSpecies = this.get('model').species;

    function filterByKingdom(obj) {
       return (obj.kingdom === "Animalia");
    }

    var animals = allSpecies.filter(filterByKingdom);

    return animals;
  }.property('model')
});
