import { Injectable } from '@angular/core';

@Injectable()
export class DragService {

  constructor() { }
  //当鼠标进入head时，父元素parent才能够可拖动，离开head时，父元素parent就不能拖动
  makeDraggable(head:HTMLElement,parent:any) {
    head.addEventListener('mouseenter',()=>{
      parent.draggable({containment: 'window',disabled:false});
      head.addEventListener('mouseleave',function(){
        parent.draggable('disable');
      });
    });
  }
}
