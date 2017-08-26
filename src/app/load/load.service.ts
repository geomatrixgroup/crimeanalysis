import { Injectable } from '@angular/core';
import {Load2DService} from './load2d.service';
import {Load3DService} from './load3d.service';
@Injectable()
export class LoadService {

  loadType:number;
  constructor(private load2dServcie:Load2DService,private load3dServcie:Load3DService) { }
  view:any;
  loadBaseMap(centerXY:[number,number],baseMapType:number,width:number,height:number,container:HTMLDivElement){
    container.style.width = width +　'px';
    container.style.height = height +　'px';
    container.innerHTML='';
    if(baseMapType==0){
      //加载二维底图
      console.log('111');
      this.load2dServcie.loadBaseMap(centerXY);
      this.view=this.load2dServcie.get2DMap();
    }else{
      //加载三维底图
      console.log('222');
      this.load3dServcie.loadBaseMap(centerXY,10000);
      this.view=this.load3dServcie.get3DMap();
    }
  }
  getMap(){return this.view;}
}

