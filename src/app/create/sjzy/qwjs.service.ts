import { Injectable } from '@angular/core';

@Injectable()
export class QwjsService {

  constructor() { }
  
  diyQwjs(prototype,element:Element):[HTMLElement,HTMLElement]{
    //对控制区增添内容
    let bounding=element.getBoundingClientRect();
    let  qwjsControl=this.diyControl(prototype[0],bounding);
      //给关闭按钮注册事件
      //给最小化按钮注册事件
/*     this.closeEvent(<HTMLElement>dldtControl.children[0]);
    this.minEvent(<HTMLElement>dldtControl.children[1]); */

    //对图表区增添内容
    let qwjsChart=this.diyChart(prototype[1]);
    return [qwjsControl, qwjsChart];
  }
  
 /*  private closeEvent(close:HTMLElement){
    close.addEventListener('click',()=>{
      this.departureService.depart()
    })

  }
  private minEvent(min:HTMLElement){
    
  } */
  private diyControl(control:HTMLElement,bounding):HTMLElement{
    control.setAttribute('style', 'position: absolute;z-index: 1005;background:white;border-radius: 4px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
    control.style.top = bounding.top + 'px';
    control.style.left = bounding.left + 'px';
    control.style.width = '0px';
    control.style.height = '0px';

    let head=control.children[0];
    head.setAttribute('style' , 'cursor:move;background-color:red;width:100%;height:150px;');
    head.appendChild(document.createTextNode('功能控制区'));


    let content=control.children[1];
    content.setAttribute('style' , 'width:100%;height:250px;');
    content.appendChild(document.createTextNode('全文检索'));

    return control;
  }

  private diyChart(chart:HTMLElement):HTMLElement{
    chart.setAttribute('style' , 'color:red;background-color:white;opacity:0.8;position:absolute;right:10px;bottom:50px;width:400px;height:500px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
    
    let head=chart.children[0];
    head.setAttribute('style' , 'cursor:move;color:white;background-color:#2d3d5a;width:100%;height:50px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
    head.appendChild(document.createTextNode('图表数据区'));
    
    let content=chart.children[1];
    content.setAttribute('style' , 'color:white;opacity:0.5;background-color:#2d3d5a;width:100%;height:450px;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
    content.appendChild(document.createTextNode('全文检索'));
    return chart;
  }
}
