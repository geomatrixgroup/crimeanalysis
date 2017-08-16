import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { DensityanalysisComponent } from './densityanalysis/densityanalysis.component';
import { AggregationanalysisComponent } from './aggregationanalysis/aggregationanalysis.component';
const hotspotRoutes: Routes = [
  {path: 'densityanalysis', component: DensityanalysisComponent, data: {title: '密度分析'}},
  {path: 'aggregationanalysis', component: AggregationanalysisComponent, data: {title: '聚集分析'}}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(hotspotRoutes)
  ],
  declarations: []
})
export class HotspotRoutingModule { }
