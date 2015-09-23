import DS from 'ember-data';

export default DS.Model.extend({
trailId: DS.attr('number'),
activity_name: DS.attr('string'),
activity_description: DS.attr('string'),
url: DS.attr('string'),
length: DS.attr('number'),
trail: DS.belongsTo('trail', { async: true })
});
