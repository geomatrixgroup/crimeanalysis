import { Injectable } from '@angular/core';
import {AnchorService} from '../anchor/anchor.service';
import {DragService} from '../drag/drag.service';
@Injectable()
export class PrototypeService {

  constructor(private anchorService:AnchorService,private dragService:DragService) { }
  test(){
    console.log('11111');
  }

  createPrototype(clsName:string):[HTMLElement,HTMLElement]{
    //创建原型控制区（只有头部浮动整个div可移动、最小化、关闭功能）
    let control=this.createControlPrototype();
    control.className = clsName;
    //创建原型图表区(只有头部浮动整个div可移动)
    let chart=this.createChartPrototype();
    chart.className = clsName;
    //返回原型（两个div标签元素）
    return [control,chart];
    
  }
  private createControlPrototype():HTMLElement{
    let control = document.createElement('div');
    
    let head=document.createElement('div');
    this.anchorService.createCrossAnchor(head);
    this.anchorService.createMinusAnchor(head);
    this.dragService.makeDraggable(head,$(control));

    let content=document.createElement('div');

    control.appendChild(head);
    control.appendChild(content);
    return control;
  }

  private createChartPrototype():HTMLElement{
    let chart = document.createElement('div'); 
    let head=document.createElement('div');
    this.dragService.makeDraggable(head,$(chart));

    let content=document.createElement('div');

    chart.appendChild(head);
    chart.appendChild(content);
    return chart;
  }
}
