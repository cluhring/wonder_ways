import {
  moduleForModel,
  test
} from 'ember-qunit';

import Trail from 'wonder-ways-ember/models/trail';

moduleForModel('trail', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});


test('it is an ember data model', function(assert) {
  assert.ok(this.subject() instanceof DS.Model);
});

test('it has a trail name property', function (assert) {
  var property = Trail.metaForProperty('name');
  assert.ok(property.isAttribute);
});

test('it has a trail id property', function (assert) {
  var property = Trail.metaForProperty('trailId');
  assert.ok(property.isAttribute);
});

test('it has a trail description property', function (assert) {
  var property = Trail.metaForProperty('description');
  assert.ok(property.isAttribute);
});

test('it has a trail directions property', function (assert) {
  var property = Trail.metaForProperty('directions');
  assert.ok(property.isAttribute);
});

test('it has a trail city property', function (assert) {
  var property = Trail.metaForProperty('city');
  assert.ok(property.isAttribute);
});

test('it has a trail state property', function (assert) {
  var property = Trail.metaForProperty('state');
  assert.ok(property.isAttribute);
});

test('it has a trail lat property', function (assert) {
  var property = Trail.metaForProperty('lat');
  assert.ok(property.isAttribute);
});

test('it has a trail lng property', function (assert) {
  var property = Trail.metaForProperty('lng');
  assert.ok(property.isAttribute);
});

test('it has a trail country property', function (assert) {
  var property = Trail.metaForProperty('country');
  assert.ok(property.isAttribute);
});
