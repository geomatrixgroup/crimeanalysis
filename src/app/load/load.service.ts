import { Injectable } from '@angular/core';
import {Load2DService} from './load2d.service';
import {Load3DService} from './load3d.service';
@Injectable()
export class LoadService {
  private loadType:number;
  private centerXY:[number,number];

  setCenterXY(){
    let xy:[number,number];
    if(this.loadType==0){
      xy=this.load2dServcie.getCenterXY();
      this.loadType=1;
    }else{
      xy=this.load3dServcie.getCenterXY();
      this.loadType=0;
    }
    this.centerXY[0]=xy[0];
    this.centerXY[1]=xy[1];
  }

  constructor(private load2dServcie:Load2DService,private load3dServcie:Load3DService) {
      this.centerXY=[116.3912,39.9045];
      this.loadType = 0;
  }

  loadBaseMap(width:number,height:number,container:HTMLDivElement){
    container.style.width = width +　'px';
    container.style.height = height +　'px';
    container.innerHTML='';
    if(this.loadType==0){
      //加载二维底图
      this.load2dServcie.loadBaseMap(this.centerXY);
    }else{
      //加载三维底图
      this.load3dServcie.loadBaseMap(this.centerXY,10000);
    }
  }

}

