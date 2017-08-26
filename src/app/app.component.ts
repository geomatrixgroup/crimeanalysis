import { Component, OnInit, ElementRef,Input,ViewChild} from '@angular/core';
import { DragService } from './drag/drag.service';
import {AnchorService} from './anchor/anchor.service';

import {DepartureService} from './departure/departure.service';
import {LoadService} from './load/load.service';
import {Title} from '@angular/platform-browser';
import '../assets/js/jQueryRotate.js';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
declare let $: any;
import * as ol from 'openlayers';
declare let Cesium: any;
@Component({
  selector:  'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DragService,AnchorService,DepartureService,LoadService]
})

export class AppComponent implements OnInit {
angle: number = 0;
width: number = window.innerWidth;
height: number= window.innerHeight;
mapViewer:ol.Map;
cameraHeight:number=5000;
loadingType:number=1;

constructor(private dragService: DragService,private anchorService:AnchorService,private departureService:DepartureService,private loadService:LoadService) {
    Cesium.BingMapsApi.defaultKey='Ar5xntpmtDoZkRumcJHMUcQqWX4boLc5FN5GfLG99nWkKsmLSNM3CGEjJpo3WZRg';
    (<any>window).CESIUM_BASE_URL = '/assets/Cesium';
  }

ngOnInit() {
    window.addEventListener('resize',()=>{ 
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.loadService.loadBaseMap(this.centerXY,this.loadingType,this.width,this.height,<HTMLDivElement>document.getElementById('map'));
    //会导致页面创建的元素消失 document.location.reload();
  });
  this.loadService.loadBaseMap(this.centerXY,this.loadingType,this.width,this.height,<HTMLDivElement>document.getElementById('map'));
  //this.createToggle();
  }

centerXY:[number,number]=[116.3912, 39.9045];
elementClicked: HTMLElement = null;

createToggle(){ 
  let map=document.getElementById('map');
  let cesiumContainer=document.getElementById('cesiumContainer');
  if(document.getElementById('toggle-btn')==null){

  let element=document.createElement('button');
  element.id='toggle-btn';
  element.appendChild(document.createTextNode('切换'));
  element.setAttribute('style','position:absolute;bottom:0px;left:40px');
  element.addEventListener('click',() => {
    if(this.loadingType==0){
      let center=ol.proj.transform(this.loadService.view.getView().getCenter(),'EPSG:3857','EPSG:4326');
      this.centerXY[0]=center[0];
      this.centerXY[1]=center[1];
      this.loadingType=1;
    }else{
      let cameraCenter=this.loadService.getMap().scene.globe.ellipsoid.cartesianToCartographic(this.loadService.getMap().camera.position);
      this.centerXY[0]=Cesium.Math.toDegrees(cameraCenter.longitude);
      this.centerXY[1]=Cesium.Math.toDegrees(cameraCenter.latitude);
      this.cameraHeight=cameraCenter.height;
      this.loadingType=0;
    } 
    this.loadService.loadBaseMap(this.centerXY,this.loadingType,this.width,this.height,<HTMLDivElement>document.getElementById('map'));
  });
  document.querySelector('#myapp').appendChild(element);
  }
}
toggle(event) {
    //把菜单栏上的全部caret旋转初始化
    let carets: any = document.querySelectorAll('nav span');
    carets.forEach(caret => {
      $(caret).rotate(0);
    }); 
    let element = event.srcElement;
    if (this.elementClicked == null || this.elementClicked != element) {
      $(element.querySelector('span')).rotate(180);
      this.angle = 180;
    }else if ( this.elementClicked == element) {
      $(element.querySelector('span')).rotate(180 - this.angle);
      this.angle = 180 - this.angle;
    }
    this.elementClicked = element;
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

    $(this.elementClicked.querySelector('span')).rotate(0);
    let head=document.getElementById('headControlCAC');
    let element=$('#controlCAC');
    this.dragService.makeDraggable(head,element);  
    
    $('#chartCAC').draggable({ containment: 'body'});
      
  }

createControlCAC(message: string, event: MouseEvent) {
      let controlCAC = document.createElement('div');
      controlCAC.id = 'controlCAC';
      document.querySelector('#myapp').appendChild(controlCAC);
      
      this.styleControlCAC(controlCAC, event);
      this.animateInControlCAC(controlCAC);

      let headControlCAC = document.createElement('div');
      headControlCAC.id='headControlCAC';
      headControlCAC.setAttribute('style' , 'cursor:move;color:white;background-color:#C62F2F;width:100%;height:50px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
      controlCAC.appendChild(headControlCAC);
      headControlCAC.appendChild(document.createTextNode('功能控制区'));
      headControlCAC.style.textAlign = 'center';

      this.anchorService.createCrossAnchor(headControlCAC,controlCAC,'关闭');
      this.anchorService.createMinusAnchor(headControlCAC,controlCAC,'最小化');
      this.anchorService.getCrossAnchor().addEventListener('click',(ev)=> {
        this.departureService.depart(controlCAC,this.elementClicked);
      });
      this.anchorService.getMinusAnchor().addEventListener('click',()=>{
        alert('Please wating...');
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
    
}
