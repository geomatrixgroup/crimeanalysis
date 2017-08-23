import { Injectable } from '@angular/core';
import $ from 'jquery';
@Injectable()
export class DepartureService {

  constructor() { }
 depart(parent:HTMLElement,elementClicked:HTMLElement){
    let bounding=elementClicked.getBoundingClientRect();
    let top=bounding.top+'px';
    let left=bounding.left+'px';
    $(parent).animate({
      top: top,
      left:left,
      width: '0px',
      height: '0px'
    },()=> {
      document.getElementById('myapp').removeChild(parent);
    });
  }
 }

