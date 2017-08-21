import { Component, OnInit, Input } from '@angular/core';

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
loadBaseMap() {
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
ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    if (document.webkitFullscreenEnabled == true ) {
      this.width = window.screen.width;
      this.height = window.screen.height;
    }
    this.loadBaseMap();
  }
element: HTMLElement = null;

toggle(e) {
    //把菜单栏上的全部caret旋转初始化
     let spans: any = document.querySelectorAll('nav span');
    spans.forEach(span => {
      $(span).rotate(0);
    }); 
    let elem = e.srcElement;
    if (this.element == null || this.element != elem) {
      $(elem.querySelector('span')).rotate(180);
      this.angle = 180;
    }else if ( this.element == elem) {
      $(elem.querySelector('span')).rotate(180 - this.angle);
      this.angle = 180 - this.angle;
    }

    this.element = elem;
  }

  showUI(message: string, event: MouseEvent) {
    
    let control = document.getElementById('controlCAC');
    if (control == null) {
      this.createControlCAC(message, event);
    }else {
      this.styleControlCAC(control, event);
      this.animateInControlCAC(control);
      document.getElementById('controlCAC').lastChild.textContent = message;
    } 

    let chart = document.getElementById('chartCAC');
    if (chart == null) {
      this.createChartCAC(message);
    }else {
      document.getElementById('chartCAC').lastChild.textContent = message;
    }

    $(this.element.querySelector('span')).rotate(0);

    $('#controlCAC').draggable({containment: 'body'});
    $('#chartCAC').draggable({ containment: 'body'});
      
  }

createControlCAC(message: string, event: MouseEvent) {
      let controlCAC = document.createElement('div');
      controlCAC.id = 'controlCAC';
      document.querySelector('#myapp').appendChild(controlCAC);
      
      this.styleControlCAC(controlCAC, event);
      this.animateInControlCAC(controlCAC);

      let headControlCAC = document.createElement('div');
      headControlCAC.setAttribute('style' , 'color:white;background-color:#C62F2F;width:100%;height:50px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
      controlCAC.appendChild(headControlCAC);
      headControlCAC.appendChild(document.createTextNode('功能控制区'));
      headControlCAC.style.textAlign = 'center';
      let crossAnchor= document.createElement('a');
      let crossImg=document.createElement('img');
      crossAnchor.appendChild(crossImg);
      crossAnchor.href='javascript:void(0);';
      crossImg.src='../assets/images/cross.png';
      crossImg.setAttribute('style','margin-top: 2px;margin-right: 2px;width: 16px;height: 16px;');
      crossAnchor.setAttribute('style','float:right;text-decoration:none;');
      headControlCAC.appendChild(crossAnchor);
      crossAnchor.addEventListener('click',(ev)=> {
        this.animatOutControlCAC(controlCAC);
      });
      crossAnchor.addEventListener('mouseenter',()=> {
        let tip=document.createElement('span');
        tip.appendChild(document.createTextNode('关闭'));
        tip.setAttribute('style','position:absolute;margin-top:-38px;margin-left:-15px;font-size:8px;color:#2d3d5a;display:block;width:40px;font-weight:bold;background-color:white;');
        crossAnchor.appendChild(tip);
        
        crossAnchor.addEventListener('mouseleave',()=> {
        if(crossAnchor.childNodes.length > 1) {
          crossAnchor.removeChild(crossAnchor.lastChild);
        }
      });
      });
    
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
  animateInControlCAC(div: HTMLElement) {
      $(div).animate({
        top: '20px',
        left: '20px',
        width: '310px',
        height: '600px'
      });
  }
  animatOutControlCAC(div:HTMLElement) {
    let bounding=this.element.getBoundingClientRect();
    let top=bounding.top+'px';
    let left=bounding.left+'px';
    $(div).animate({
      top: top,
      left:left,
      width: '0px',
      height: '0px'
    },()=> {
      document.getElementById('myapp').removeChild(div);
    });
  }

}
