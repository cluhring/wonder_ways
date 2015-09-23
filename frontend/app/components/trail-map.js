/* globals L */

import Ember from 'ember';

export default Ember.Component.extend({

  map: null,
  classNames: ['trail-map'],

  didInsertElement: function () {

    L.mapbox.accessToken = 'pk.eyJ1IjoiY2x1aHJpbmciLCJhIjoiNWF2Z1l6ZyJ9.8peAq7kTQyvXShlVv1K82w';

    let map = L.mapbox.map(this.elementId, 'cluhring.lal7c6c3');
    this.set('map', map);

    let lat = this.get('trail.lat');

    let lng = this.get('trail.lng');

    map.setView([lat, lng], 15);

    var points = { "type": "FeatureCollection",
    "features": [
      { "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [lng, lat]},
      "properties": {"marker-symbol": "park", "marker-color": "#0C5CFE", "marker-size": "large"}
       }]
    };

var myLayer = L.mapbox.featureLayer(points).addTo(map);
}
});
