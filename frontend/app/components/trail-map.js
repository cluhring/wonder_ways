/* globals L */

import Ember from 'ember';

export default Ember.Component.extend({

  map: null,
  classNames: ['trail-map'],

  didInsertElement: function () {

    L.mapbox.accessToken = 'pk.eyJ1IjoiY2x1aHJpbmciLCJhIjoiNWF2Z1l6ZyJ9.8peAq7kTQyvXShlVv1K82w';

    let map = L.mapbox.map(this.elementId, 'cluhring.lal7c6c3');

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.set('map', map);

    let trail = this.get('trail');

    let lats = this.get('trail.lat');

    let lngs = this.get('trail.lng');

    map.setView([lats, lngs], 15);

    var points = { "type": "FeatureCollection",
    "features": [
      { "type": "Feature",
      "geometry": {"type": "Point",
                   "coordinates": [lngs, lats]},
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
      var ctrl = L.Routing.control({
        waypoints: [
          L.latLng (current_lat, current_long),
          L.latLng (lats, lngs)
        ],
        // routeWhileDragging: false,
        // draggableWaypoints: false,
        autoRoute: true,
        fitSelectedRoutes: 'smart',
        // formatter: new L.Routing.Valhalla.Formatter({units:'imperial'})
        // geocoder: L.Control.Geocoder.nominatim()
      }).addTo(map);

      L.mapbox.accessToken = 'pk.eyJ1IjoiY2x1aHJpbmciLCJhIjoiNWF2Z1l6ZyJ9.8peAq7kTQyvXShlVv1K82w';

      var marker = L.marker([current_lat, current_long], {
         icon: L.mapbox.marker.icon({
           title: "You are here",
           description: "You are here",
           "marker-color": "#BA1A1A",
           "marker-symbol": "toilets",
           "marker-size": "large",
         })
       }).addTo(map);

      L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    var myLayer = L.mapbox.featureLayer(points).addTo(map);

    myLayer.on('mouseover', function(e) {
      e.layer.openPopup();
    });
    myLayer.on('mouseout', function(e) {
      e.layer.closePopup();
    });
  }
});

$(document).ready(function(){
  $("#direct").click(function(){
    if($(this).text()==='Hide Directions'){
      $('div.leaflet-routing-alternatives-container').hide();
      $(this).text('Show Directions');
    }else{
      $('div.leaflet-routing-alternatives-container').show();
      $(this).text('Hide Directions');
    }
  });
});
