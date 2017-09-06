import { Injectable } from '@angular/core';
import {RegisterService} from './register.service';
import {AnchorService} from '../anchor/anchor.service';
@Injectable()
export class LoginService {

  constructor(private registerService:RegisterService,private anchorService:AnchorService) { }

/*   getSingle=function(fn){
    let loginLayer;
    return function(){
      console.log(this);
      return loginLayer || (loginLayer = fn.apply(this,arguments));
    };
  };

  createLoginLayer=function(){
    let div = document.createElement( 'div' );
    div.innerHTML = '登录浮窗1';
    document.body.appendChild( div );
    div.setAttribute('style','width:30%;height:30%;background-color:#2d3d5a;display:block;position:absolute;top:35%;left:35%;color:white;');
    $(div).draggable({containment: 'window',disabled:false});
    div.addEventListener('mousedown',function(){
      this.style.cursor='move';
      div.addEventListener('mouseup',function(){
        this.style.cursor='default';
      });
    });
    this.anchorService.createCrossAnchor(div,'关闭');
    this.anchorService.getCrossAnchor().onclick=()=>{
      document.body.removeChild(div);
      this.createSingleLoginLayerTest=null;
      this.createSingleLoginLayerTest = this.loginService.getSingle(this.loginService.createLoginLayer);
    };
    return div;
  }; */

  createLoginLayer(){
      let div = document.createElement( 'div' );
      div.innerHTML = '登录浮窗1';
      div.setAttribute('style','width:30%;height:30%;background-color:white;display:block;position:absolute;top:35%;left:35%;');
      $(div).draggable({containment: 'window',disabled:false});
      div.addEventListener('mousedown',function(){
        this.style.cursor='move';
        div.addEventListener('mouseup',function(){
          this.style.cursor='default';
        });
      });
      this.anchorService.createAnchor(div).addEventListener('click',()=>{
          document.querySelector('#myapp').removeChild(div);
          this.loginLayer=null;
        });
    this.loginLayer=div;
  }
  
  loginLayer:HTMLDivElement;
  appendSingleLoginLayer(){
    if(!this.loginLayer){
      this.createLoginLayer();
      document.querySelector('#myapp').appendChild(this.loginLayer);
    }
  }
}

