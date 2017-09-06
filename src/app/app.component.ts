import { Component, OnInit, ElementRef,Input,ViewChild} from '@angular/core';
import { DragService } from './drag/drag.service';
import {AnchorService} from './anchor/anchor.service';
import {DepartureService} from './departure/departure.service';
import {LoadService} from './load/load.service';
import {LoginService} from './login/login.service';
import {RegisterService} from './login/register.service';
import {CreateService} from './create/create.service';

import {PrototypeService} from './create/prototype.service';
import {Title} from '@angular/platform-browser';
import {DivsExisting} from './divsExisting';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import '../assets/js/jQueryRotate.js';
@Component({
  selector:  'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DragService,AnchorService,DepartureService,LoadService,LoginService,RegisterService,PrototypeService,CreateService]
})
export class AppComponent implements OnInit {
angle: number;
width: number ;
height: number;

constructor(private loginService:LoginService,private dragService: DragService,private anchorService:AnchorService,private departureService:DepartureService,private loadService:LoadService,private createService:CreateService) {
    this.width = window.innerWidth;
    this.height= window.innerHeight;
    this.angle = 0;
  }

ngOnInit() {
    window.addEventListener('resize',()=>{ 
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.loadService.loadBaseMap(this.width,this.height,<HTMLDivElement>document.getElementById('map'));
      //会导致页面创建的元素消失 document.location.reload();
  });
  this.loadService.loadBaseMap(this.width,this.height,<HTMLDivElement>document.getElementById('map'));
  // this.startToggle();
  // this.createContainer();
  }

elementClicked: HTMLElement = null;

startToggle(){ 
  let map=document.getElementById('map');
  let cesiumContainer=document.getElementById('cesiumContainer');
  if(document.getElementById('toggle-btn')==null){

  let element=document.createElement('button');
  element.id='toggle-btn';
  element.appendChild(document.createTextNode('切换'));
  element.setAttribute('style','position:absolute;bottom:0px;left:40px');
  element.addEventListener('click',() => {
    this.loadService.setCenterXY();
    this.loadService.loadBaseMap(this.width,this.height,<HTMLDivElement>document.getElementById('map'));
  });
  document.querySelector('#myapp').appendChild(element);
  }
}
loginCAC(event){
  this.loginService.appendSingleLoginLayer();
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
test(id:string,event:MouseEvent){
  this.createService.createUI(id,event,this.elementClicked);
  $(this.elementClicked.querySelector('span')).rotate(0);
  this.elementClicked = <HTMLElement>event.srcElement;

}

}
