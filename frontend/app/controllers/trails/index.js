import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToTrailPage: function(id) {
      // this.set('trailPage', id);
      this.transitionToRoute('trail', id);
    },
  },

  searchTerm: '',
  selectedState: '',
  allStates: ["Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"],

  filteredTrails: function () {
    let searchTerm = this.get('searchTerm').toLowerCase();
    let trails = this.get('model');

    if (searchTerm) {
      return trails.filter((trail) => {
        let keys = Object.keys(trail);
        let isMatching = false;
        keys.forEach((key) => {
          if (trail[key] && trail[key].toString().toLowerCase().includes(searchTerm)) { isMatching = true; }
        });
        return isMatching;
      });
    }
    return trails;
  }.property('searchTerm', 'model')
});
