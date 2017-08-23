import { Injectable } from '@angular/core';

@Injectable()
export class AnchorService {
  crossAnchor:HTMLAnchorElement;
  minusAnchor:HTMLAnchorElement;
  constructor() { }
  createAnchor(head:HTMLElement,parent:HTMLElement,text:string):HTMLAnchorElement{
      let anchor= document.createElement('a');    
      let img=document.createElement('img');
      anchor.appendChild(img);
      anchor.href='javascript:void(0);';   
      if(text=='关闭'){
        img.src='../assets/images/cross.png';
      }else{
        img.src='../assets/images/minus.png';
      }
      img.setAttribute('style','margin-top: 2px;margin-right: 4px;width: 16px;height: 16px;');
      anchor.setAttribute('style','float:right;text-decoration:none;');
      head.appendChild(anchor);
      anchor.addEventListener('mouseenter',()=> {
        let tip=document.createElement('span');
        tip.appendChild(document.createTextNode(text));
        tip.setAttribute('style','position:absolute;margin-top:-38px;margin-left:-15px;font-size:8px;color:#2d3d5a;display:block;width:40px;font-weight:bold;background-color:white;');
        anchor.appendChild(tip);
    
        anchor.addEventListener('mouseleave',()=> {
        if(anchor.childNodes.length > 1) {
          anchor.removeChild(anchor.lastChild);
        }
      });
    });
    return anchor;
  }
  createCrossAnchor(head:HTMLElement,parent:HTMLElement,text:string){
      this.crossAnchor=this.createAnchor(head,parent,text);
  }

  createMinusAnchor(head:HTMLElement,parent:HTMLElement,text:string){
      this.minusAnchor=this.createAnchor(head,parent,text);
  }
  getCrossAnchor(){return this.crossAnchor;}
  getMinusAnchor(){return this.minusAnchor;}

}
