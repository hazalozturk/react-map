import React from "react";
import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';

class MyMap extends React.Component {
  componentDidMount() {
    let map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      target: 'map',
      view: new View({
        center: [-8213923.059525041, 5324603.39034538],
        zoom: 15
      })
    });
  }

  render() {
    return (
      <div id='map'></div>
    )
  }
}

export default MyMap
