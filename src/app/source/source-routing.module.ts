import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BasemapComponent} from './basemap/basemap.component';
import {FulltextretrievalComponent} from './fulltextretrieval/fulltextretrieval.component';
import {PolicecaseComponent} from './policecase/policecase.component';
import {ThematicmapComponent} from './thematicmap/thematicmap.component';
import {TrafficComponent} from './traffic/traffic.component';

const sourceRoutes: Routes = [
  {path: 'basemap', component: BasemapComponent, data: {title: '地理底图'}},
  {path: 'fulltextretrieval', component: FulltextretrievalComponent, data: {title: '全文检索'}},
  {path: 'policecase', component: PolicecaseComponent, data: {title: '案事件查询'}},
  {path: 'thematicmap', component: ThematicmapComponent, data: {title: '专题地图'}},
  {path: 'traffic', component: TrafficComponent, data: {title: '地理底图'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sourceRoutes)
  ],
  declarations: []
})
export class SourceRoutingModule { }
