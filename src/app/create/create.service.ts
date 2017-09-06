import { Injectable } from '@angular/core';
import {PrototypeService} from './prototype.service';
import {DldtService} from './sjzy/dldt.service';
import {DljtService} from './sjzy/dljt.service';
import {JqsjService} from './sjzy/jqsj.service';
import {QwjsService} from './sjzy/qwjs.service';
import {ZttcService} from './sjzy/zttc.service';
import {JqgkService} from './zbtj/jqgk.service';
import {GzjqService} from './zbtj/gzjq.service';
import {ZbybpService} from './zbtj/zbybp.service';
import {QyfxService} from './zbtj/qyfx.service';
import {TsfxService} from './fzyc/tsfx.service';
import {SxfxService} from './fzyc/sxfx.service';
import {JjfxService} from './fzrd/jjfx.service';
import {MdfxService} from './fzrd/mdfx.service';
import {DbfxService} from './fkzz/dbfx.service';
import {DepartureService} from '../departure/departure.service';
class MinUI{
  id:string=null;
  divExistingControl:HTMLElement;
  divExistingChart:HTMLElement;
  constructor(id,control,chart){
    this.divExistingControl=control;
    this.divExistingChart=chart; 
    this.id=id;
  }
}
@Injectable()
export class CreateService {
  minUIs:MinUI[]=[];
  id:string;
  displayDivs:HTMLElement[]=[];
  constructor(
    private prototypeService:PrototypeService,
    private dldtService:DldtService,
    private departureService:DepartureService,
    private dljtService:DljtService,
    private jqsjService:JqsjService,
    private qwjsService:QwjsService,
    private zttcService:ZttcService,
    private jqgkService:JqgkService,
    private gzjqService:GzjqService,
    private zbybpService:ZbybpService,
    private qyfxService:QyfxService,
    private tsfxService:TsfxService,
    private sxfxService:SxfxService,
    private jjfxService:JjfxService,
    private mdfxService:MdfxService,
    private dbfxService:DbfxService
  ) { }
flag:boolean=false;
animateIncrement:number=0;
minLeftIncrement:number=5;
  createUI(id,event:MouseEvent,elementClicked){
    let control:HTMLElement;
    let chart:HTMLElement;
    let index=0;
    for(;index<this.minUIs.length;index++){
      if(this.minUIs[index].id==id){
        break;
      }
    } 

    if(index==this.minUIs.length){
      // 追加
        //调用该id所对应的id创建服务:
        //1、获取到原型（2个div元素），分别保存起来
      let prototype=this.prototypeService.createPrototype(id);
      let ui;
      let displayText;
      if(id=='dldt'){
        ui=this.dldtService.diyDldt(prototype,event.srcElement);
        displayText='地理底图';
      }else if(id=='dljt'){
        ui=this.dljtService.diyDljt(prototype,event.srcElement);
        displayText='道路交通';
      }else if(id=='jqsj'){
        ui=this.jqsjService.diyJqsj(prototype,event.srcElement);
        displayText='警情事件';
      }else if(id=='zttc'){
        ui=this.zttcService.diyZttc(prototype,event.srcElement);
        displayText='专题图层';
      }else if(id=='qwjs'){
        ui=this.qwjsService.diyQwjs(prototype,event.srcElement);
        displayText='全文检索';
      }else if(id=='qyfx'){
        ui=this.qyfxService.diyQyfx(prototype,event.srcElement);
        displayText='区域分析';
      }else if(id=='zbybp'){
        ui=this.zbybpService.diyZbybp(prototype,event.srcElement);
        displayText='指标仪表盘';
      }else if(id=='gzjq'){
        ui=this.gzjqService.diyGzjq(prototype,event.srcElement);
        displayText='关注警情';
      }else if(id=='jqgk'){
        ui=this.jqgkService.diyJqgk(prototype,event.srcElement);
        displayText='警情概况';
      }else if(id=='tsfx'){
        ui=this.tsfxService.diyTsfx(prototype,event.srcElement);
        displayText='态势分析';
      }else if(id=='sxfx'){
        ui=this.sxfxService.diySxfx(prototype,event.srcElement);
        displayText='时序分析';
      }else if(id=='mdfx'){
        ui=this.mdfxService.diyMdfx(prototype,event.srcElement);
        displayText='密度分析';
      }else if(id=='jjfx'){
        ui=this.jjfxService.diyJjfx(prototype,event.srcElement);
        displayText='聚集分析';
      }else if(id=='dbfx'){
        ui=this.dbfxService.diyDbfx(prototype,event.srcElement);
        displayText='对比分析';
      }
      control=ui[0];
      chart=ui[1];

      control.children[0].children[0].addEventListener('click',()=>{
        this.departureService.depart(control,elementClicked);
          for(let i=0;i<this.minUIs.length;i++){
          if(this.minUIs[i].divExistingControl==control){
            this.minUIs.splice(i,1);//控制区离场时 
            break;
          }
        }
        chart.remove();
        this.id=null;
     });
      
      control.children[0].children[1].addEventListener('click',()=>{
        // 如果还没有创建容器，那就创建
        // 最小化的动画的top（不变） left（变化）
        // 动画最小化control 隐藏chart
        // 点击最小化显示框时 动画还原control和块显示chart
        
        let container=document.querySelector('#minContainer');
        if(!container){
          container=document.createElement('div');
          container.id='minContainer';
          container.setAttribute('style','position:absolute;bottom:10px;left:40px;width:800px;height:40px;background-color:#336699;box-shadow: 2px 5px 5px rgba(0,0,0,.3);');
          document.querySelector('#myapp').appendChild(container);
        }
        let minElem=document.createElement('div');
        let bounding;
    
        bounding=container.getBoundingClientRect();
        minElem.setAttribute('style','z-index:99;display:inline-block;margin-top:10px;margin-left:5px;color:white;cursor:pointer');
        minElem.appendChild(document.createTextNode(displayText));
        document.querySelector('#minContainer').appendChild(minElem);
        this.animateIncrement+=minElem.clientWidth;
        $(control).animate({
            top: bounding.top+'px',
            left: this.animateIncrement+'px',
            width: '0px',
            height: '0px'
          },()=>{
            control.style.display='none';
          });
          chart.style.display='none';

        minElem.addEventListener('click',(ev)=>{
          $(ui[0]).animate({
              top: '20px',
              left: '20px',
              width: '310px',
              height: '600px'
            });
          control.style.display='block';
          chart.style.display='block';
          let minElemWidth=minElem.clientWidth;
          minElem.remove();
          
          for(let i=0;i<this.displayDivs.length;i++){
          if(this.displayDivs[i]==minElem){
            this.displayDivs.splice(i,1);//控制区离场时 
            break;
          }
        }
        this.animateIncrement=this.animateIncrement-minElemWidth-5;
        if(this.displayDivs.length==0){container.remove();}
      });

      this.displayDivs.push(minElem);
    });

    let minUI=new MinUI(id,control,chart);
    this.minUIs.push(minUI); 
      document.querySelector('#myapp').appendChild(control);
      $(control).animate({
        top: '20px',
        left: '20px',
        width: '310px',
        height: '600px'
      });
      document.querySelector('#myapp').appendChild(chart);
     this.flag=true;
    }else{
      //如果第i项的display为block 强调显示
      // 否则（表示该项在最小化在容器内）
        //如果this.control,不为null 则需要把它最小化 然后还原第i项
        //否则 只需还原第i项
    }

  }
}
