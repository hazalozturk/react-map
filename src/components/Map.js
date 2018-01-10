import React from "react";
import 'ol/ol.css';
import ol from 'ol';
import Vector from 'ol/source/vector';
import VectorLayer from 'ol/layer/vector';
import Tile from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import View from 'ol/view';
import Map from 'ol/map';
import Point from 'ol/geom/point';
import proj from 'ol/proj';
import Feature from 'ol/feature';


class MyMap extends React.Component {
  createMarkers(items) {
    if(items.length !== 0){
      let features = items.map(function(item) {
        // Create feature which is a container for points
        let feature = new Feature({});
        // Create the point with web mercator coordinates
        let point = new Point(proj.fromLonLat(
          [
            item.geometry.location.lng,
            item.geometry.location.lat
          ]
        ));
        // Set geometry on feature
        feature.setGeometry(point);
        return feature;
      })
      return features;
    }
  }

  render() {
    // Get all the features as an array
    let features = this.createMarkers(this.props.items);
    // Set it to a vector source
    let vectorSource = new Vector({
      features: features
    });
    // Create a layer
    let vectorLayer = new VectorLayer({
      source: vectorSource
    })
    let map = new Map({
      layers: [
        new Tile({
          source: new XYZ({
            url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        }),
        vectorLayer
      ],
      target: 'map',
      view: new View({
        center: [-8213923.059525041, 5324603.39034538],
        zoom: 14
      })
    });

    return (
      <div id='map'></div>
    )
  }
}

export default MyMap
