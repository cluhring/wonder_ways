/* globals L */

import Ember from 'ember';

export default Ember.Component.extend({

  map: null,
  classNames: ['index-map'],

  didInsertElement: function () {
    let trails = this.get('trails');
    L.mapbox.accessToken = 'pk.eyJ1IjoiY2x1aHJpbmciLCJhIjoiNWF2Z1l6ZyJ9.8peAq7kTQyvXShlVv1K82w';

    let map = L.mapbox.map(this.elementId, 'cluhring.lal7c6c3');
    this.set('map', map);

    let points = function () {
      let output = [];
      trails.forEach(function(trail) {
        let point = { "type": "Feature",
          "geometry": {"type": "Point",
                       "coordinates": [trail.lng, trail.lat]},
          "properties": {"name": trail.name,
                         "title": trail.name,
                        //  "title": "<div>{{#link-to 'trail' action='setTrailPage' actionParam='" +
                        //            trail.id +
                        //            "'}}{{" +
                        //            trail.name +
                        //            "}}{{/link-to}}</div>",
                         "description": trail.city + ", " + trail.state,
                         "url": "https://wonder-ways.herokuapp.com/" + trail.state + "/" + trail.id,
                         "city": trail.city,
                         "state": trail.state,
                         "trail_id": trail.id,
                         "marker-symbol": "park",
                         "marker-color": "#0C5CFE",
                         "marker-size": "large",
          }
        };
        output.push(point);
      });
      return output
    };

    map.setView([trails[0].lat, trails[0].lng], 6);

    var pointSet = { "type": "FeatureCollection",
      "features": points()
    };

    var myLayer = L.mapbox.featureLayer().addTo(map);

    // myLayer.on('layeradd', function(e) {
    //     var marker = e.layer,
    //         feature = marker.feature;
    //
    //     var popupContent =
    //                         // "<a href='" +
    //                         // feature.properties.url +
    //                         // "' "
    //                         "<a>{{#link-to 'trail' '" +
    //                         feature.properties.state + "' '" +
    //                         feature.properties.trail_id +
    //                         "'}}{{" + feature.properties.name +
    //                         "}}{{/link-to}}</a>";
    //
    //     marker.bindPopup(popupContent,{
    //         closeButton: false,
    //         minWidth: 320
    //     });
    // });

    // myLayer.on('layeradd', function(e) {
    //     var marker = e.layer,
    //         feature = marker.feature;
    //
    //     var popupContent =  "<a href='#'" +
    //                         feature.properties.url +
    //                         " {{action 'goToTrailPage' " +
    //                         feature.properties.trail_id + " on='click'}}>" +
    //                         feature.properties.name + "</a>"
    //
    //     marker.bindPopup(popupContent,{
    //         closeButton: false,
    //         minWidth: 320
    //     });
    // });

    myLayer.setGeoJSON(pointSet);
    
    myLayer.on('mouseover', function(e) {
      e.layer.openPopup();
    });
    myLayer.on('mouseout', function(e) {
      e.layer.closePopup();
    });
  }
});
