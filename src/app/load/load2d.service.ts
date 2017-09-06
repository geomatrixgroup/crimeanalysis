import { Injectable } from '@angular/core';

import Map from 'ol/map';
import TileLayer from 'ol/layer/tile';
import　XYZ from 'ol/source/xyz';
import Control from 'ol/control';
import View from 'ol/view';
import Proj from 'ol/proj';

@Injectable()
export class Load2DService {
  private map:Map;

  constructor() { }
  loadBaseMap(centerXY:[number,number]){
    this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}'
            })
          }),
           new TileLayer({
            title: '天地图文字标注',
            source: new XYZ({
              url: 'http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}'
            })
          })
        ],
        controls: Control.defaults({
          attribution: false,
          rotate: false
        }),
        view: new View({
          center: Proj.fromLonLat([centerXY[0],centerXY[1]]),
          zoom: 12
        })
      });
  }
    
  getCenterXY():[number,number]{
    return Proj.transform(this.map.getView().getCenter(),'EPSG:3857','EPSG:4326');
  }
}
