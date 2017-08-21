import { Component, OnInit} from '@angular/core';

import {Title} from '@angular/platform-browser';
import '../assets/js/jQueryRotate.js';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
declare let $: any;
import * as ol from 'openlayers';
@Component({
  selector:  'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
angle: number = 0;
width: number;
height: number;
constructor() {}

ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const element = document.getElementById('map');
    element.style.width = this.width +　'px';
    element.style.height = this.height +　'px';

    let map = new ol.Map({
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
          center: ol.proj.fromLonLat([116.3912, 39.9045]),
          zoom: 12
        })
      });
  }

toggle(e) {
    //区分奇偶切换
    let i: number;
    //把菜单栏上的全部caret旋转初始化
    let spans: any = document.querySelectorAll('nav span');
    spans.forEach(span => {
      $(span).rotate(0);
    });
    if (this.angle == 0) {
      this.angle = 180;
      i = 1;
    }else {
      this.angle = 0;
      i = 2;
    }
    //对当前所选择的caret进行旋转
    let elem = e.srcElement;
    if (i == 1) {
      $(elem.querySelector('span')).rotate(this.angle);
    }else {
      $(elem.querySelector('span')).rotate(180 - this.angle);
    }
  }

  showUI(message: string, event: MouseEvent) {
    let elem = document.getElementById('controlCAC');
    if (elem == null) {
      this.createControlCAC(message, event);
      this.createChartCAC(message);
    }else {
      this.styleControlCAC(elem, event);
      this.animateControlCAC(elem);

      document.getElementById('chartCAC').lastChild.textContent = message;
      document.getElementById('controlCAC').lastChild.textContent = message;
    }
    $('#controlCAC').draggable();
    $('#chartCAC').draggable();
      
  }

createControlCAC(message: string, event: MouseEvent) {
      let controlCAC = document.createElement('div');
      controlCAC.id = 'controlCAC';

      document.querySelector('#myapp').appendChild(controlCAC);
      
      this.styleControlCAC(controlCAC, event);
      this.animateControlCAC(controlCAC);

      let headControlCAC = document.createElement('div');
      headControlCAC.setAttribute('style' , 'color:white;background-color:#C62F2F;width:100%;height:50px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
      controlCAC.appendChild(headControlCAC);
      headControlCAC.appendChild(document.createTextNode('功能控制区'));
      headControlCAC.style.textAlign = 'center';
      headControlCAC.style.cursor = 'move';

      let contentControlCAC = document.createElement('div');
      contentControlCAC.setAttribute('style' , 'color:white;opacity:0.5;background-color:#C62F2F;width:100%;height:550px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
      controlCAC.appendChild(contentControlCAC);
      let content = document.createTextNode(message);
      contentControlCAC.appendChild(content);
      contentControlCAC.style.textAlign = 'center';
}

createChartCAC(message: string) {
      let chartCAC = document.createElement('div');
      chartCAC.id = 'chartCAC';
      chartCAC.setAttribute('style' , 'color:red;background-color:white;opacity:0.8;position:absolute;right:10px;bottom:50px;width:400px;height:500px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
      document.querySelector('#myapp').appendChild(chartCAC);

      let headChartCAC = document.createElement('div');
      headChartCAC.setAttribute('style' , 'color:white;background-color:#2d3d5a;width:100%;height:50px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
      chartCAC.appendChild(headChartCAC);
      headChartCAC.appendChild(document.createTextNode('图表数据区'));
      headChartCAC.style.textAlign = 'center';
      headChartCAC.style.cursor = 'move';

      let contentChartCAC = document.createElement('div');
      contentChartCAC.setAttribute('style' , 'color:white;opacity:0.5;background-color:#2d3d5a;width:100%;height:450px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
      chartCAC.appendChild(contentChartCAC);
      let content = document.createTextNode(message);
      contentChartCAC.appendChild(content);
      contentChartCAC.style.textAlign = 'center';
}
  //设置功能控制区的样式
  styleControlCAC(div: HTMLElement, event: MouseEvent) {
      div.setAttribute('style', 'position: absolute;z-index: 1005;background:white;border-radius: 4px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
      let bounding = event.srcElement.getBoundingClientRect();
      div.style.top = bounding.top + 'px';
      div.style.left = bounding.left + 'px';
      div.style.width = '0px';
      div.style.height = '0px';
  }
  //动画切换功能控制区
  animateControlCAC(div: HTMLElement) {
      $(div).animate({
        top: '20px',
        left: '20px',
        width: '310px',
        height: '600px'
      });
  }

}
