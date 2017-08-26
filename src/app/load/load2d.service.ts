import { Injectable } from '@angular/core';
import * as ol from 'openlayers';
@Injectable()
export class Load2DService {
  map:ol.Map;
  loadType:number;
  constructor() { }
  loadBaseMap(centerXY:[number,number]){
    this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.XYZ({
              url: 'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}'
            })
          }),
           new ol.layer.Tile({
            title: '天地图文字标注',
            source: new ol.source.XYZ({
              url: 'http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}'
            })
          })
        ],
        controls: ol.control.defaults({
          attribution: false,
          rotate: false
        }),
        view: new ol.View({
          center: ol.proj.fromLonLat([centerXY[0],centerXY[1]]),
          zoom: 12
        })
      });
  }
    get2DMap():ol.Map{return this.map;}
}
