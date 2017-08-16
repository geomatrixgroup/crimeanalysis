import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TimeseriesanalysisComponent} from './timeseriesanalysis/timeseriesanalysis.component';
import {SituationanalysisComponent} from './situationanalysis/situationanalysis.component';
import {RouterModule, Routes} from '@angular/router';

const predictionRoutes: Routes = [
  {path: 'timeseriesanalysis', component: TimeseriesanalysisComponent, data: {title: '时序分析'}},
  {path: 'situationanalysis', component: SituationanalysisComponent, data: {title: '态势分析'}},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(predictionRoutes)
  ],
  declarations: []
})
export class PredictionRoutingModule { }
