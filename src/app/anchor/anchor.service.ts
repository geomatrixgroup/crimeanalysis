import { Injectable } from '@angular/core';

@Injectable()
export class AnchorService {
  crossAnchor:HTMLAnchorElement;
  minusAnchor:HTMLAnchorElement;
  restoreAnchor:HTMLAnchorElement;
  constructor() { }
  createAnchor(head:HTMLElement,callback?:(a:HTMLAnchorElement,img:HTMLImageElement)=>void                                                                                                                  ):HTMLAnchorElement{
      let anchor= document.createElement('a');    
      let img=document.createElement('img');
      anchor.appendChild(img);
      anchor.href='javascript:void(0);';
      img.src='../assets/images/cross.png';
      img.setAttribute('style','width: 16px;height: 16px;');
      anchor.setAttribute('style','float:right;text-decoration:none;'); 
      head.appendChild(anchor);
    if(callback!==undefined){ 
      callback(anchor,img);
    }
    return anchor;
  }
  createCrossAnchor(head:HTMLElement){
      this.crossAnchor=this.createAnchor(head,function(anchor,img){
        anchor.setAttribute('title','关闭');
      });
  }

  createMinusAnchor(head:HTMLElement){
      this.minusAnchor=this.createAnchor(head,function(anchor,img){
        img.src='../assets/images/minus.png'; 
        anchor.setAttribute('title','最小化');
    });
  }

  
  createRestoreAnchor(head:HTMLElement){
      this.restoreAnchor=this.createAnchor(head,function(anchor,img){
        img.src='../assets/images/restore.png'; 
        anchor.setAttribute('title','恢复');
    });
  }
  
  getRestoreAnchor(){return this.restoreAnchor;}
  getCrossAnchor(){return this.crossAnchor;}
  getMinusAnchor(){return this.minusAnchor;}

}
