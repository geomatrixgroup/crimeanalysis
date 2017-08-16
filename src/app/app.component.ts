import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import '../assets/js/jQueryRotate.js';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
declare let $: any;

@Component({
  selector:  'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
degree: number;
// 绑定视图
 @ViewChild('statistic')
 statisticLi: ElementRef;

 @ViewChild('source')
 sourceLi: ElementRef;

 @ViewChild('prediction')
 predictionLi: ElementRef;

 @ViewChild('hotspot')
 hotspotLi: ElementRef;

 @ViewChild('control')
 controlLi: ElementRef;

constructor(private elementRef: ElementRef, private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) {}
ngOnInit() {
  this.router.events
    .filter(event => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .map(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    })
    .filter(route => route.outlet === 'primary')
    .mergeMap(route => route.data)
    .subscribe((event) => this.titleService.setTitle(event['title']));
  }
  toggle(id: number) {
        if (this.degree === 180) {
          this.degree = 0;
        }else {
          this.degree = 180;
        }
        if ( id === 0) {
          $(this.sourceLi.nativeElement.querySelector('span')).rotate(this.degree);
        } else if ( id === 1) {
          $(this.statisticLi.nativeElement.querySelector('span')).rotate(this.degree);
        }else if ( id === 2) {
          $(this.predictionLi.nativeElement.querySelector('span')).rotate(this.degree);
        } else if ( id === 3) {
          $(this.hotspotLi.nativeElement.querySelector('span')).rotate(this.degree);
        }else if ( id === 4) {
          $(this.controlLi.nativeElement.querySelector('span')).rotate(this.degree);
        }
    }
}
