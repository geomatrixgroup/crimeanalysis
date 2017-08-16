import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AttentionpolicecaseComponent} from './attentionpolicecase/attentionpolicecase.component';
import {NormdashboardComponent} from './normdashboard/normdashboard.component';
import {RegionanalysisComponent} from './regionanalysis/regionanalysis.component';
import {SurveypolicecaseComponent} from './surveypolicecase/surveypolicecase.component';

const statisticRoutes: Routes = [
  {path: 'attentionpolicecase', component: AttentionpolicecaseComponent, data: {title: '关注警情'}},
  {path: 'normdashboard', component: NormdashboardComponent, data: {title: '指标仪表盘'}},
  {path: 'regionanalysis', component: RegionanalysisComponent, data: {title: '区域分析'}},
  {path: 'SurveypolicecaseComponent', component: SurveypolicecaseComponent, data: {title: '警情情况'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(statisticRoutes)
  ],
  declarations: []
})
export class StatisticRoutingModule { }
