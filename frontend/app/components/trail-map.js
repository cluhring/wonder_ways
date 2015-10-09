/* globals L */

import Ember from 'ember';

export default Ember.Component.extend({

  map: null,
  classNames: ['trail-map'],

  didInsertElement: function () {

    L.mapbox.accessToken = 'pk.eyJ1IjoiY2x1aHJpbmciLCJhIjoiNWF2Z1l6ZyJ9.8peAq7kTQyvXShlVv1K82w';

    let map = L.mapbox.map(this.elementId, 'cluhring.lal7c6c3');
    this.set('map', map);

    let trail = this.get('trail');

    let lat = this.get('trail.lat');

    let lng = this.get('trail.lng');

    map.setView([lat, lng], 15);

    var points = { "type": "FeatureCollection",
    "features": [
      { "type": "Feature",
      "geometry": {"type": "Point",
                   "coordinates": [lng, lat]},
      "properties": {"title": trail.name,
                     "description": trail.city + ", " + trail.state,
                     "marker-symbol": "park",
                     "marker-color": "#BA1A1A",
                     "marker-size": "large"}
       }]
    };

    map.locate({setView: true, maxZoom: 16});

    function onLocationFound(e) {
      var radius = e.accuracy / 2;
      var current_lat = e.latlng.lat;
      var current_long = e.latlng.lng;
      // var ctrl = L.Routing.control({
      //   waypoints: [
      //     L.latLng (current_lat, current_long),
      //     L.latLng (lat, lng)
      //   ],
      //   routeWhileDragging: true,
      //   draggableWaypoints: true,
      //   autoRoute: true,
      //   fitSelectedRoutes: 'smart',
      //   geocoder: L.Control.Geocoder.nominatim()
      // }).addTo(map);

      L.marker(e.latlng).addTo(map)
      .bindPopup("You are here")
      .openPopup()
      .setIcon(L.mapbox.marker.icon({"marker-color": "#BA1A1A",
                                     "marker-symbol": "toilets",
                                     "marker-size": "large",
      }));

      L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    var myLayer = L.mapbox.featureLayer(points).addTo(map);
  }
});
