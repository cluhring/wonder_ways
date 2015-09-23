import DS from 'ember-data';

let Species = DS.Model.extend({
  clip_url: DS.attr('string'),
  scientific_name: DS.attr('string'),
  trail: DS.belongsTo('trail'),
  photo_url: DS.attr('string')
});
export default Species;
