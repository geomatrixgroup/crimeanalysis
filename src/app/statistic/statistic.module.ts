import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionanalysisComponent } from './regionanalysis/regionanalysis.component';
import { NormdashboardComponent } from './normdashboard/normdashboard.component';
import { AttentionpolicecaseComponent } from './attentionpolicecase/attentionpolicecase.component';
import { SurveypolicecaseComponent } from './surveypolicecase/surveypolicecase.component';
import {StatisticRoutingModule} from './statistic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StatisticRoutingModule
  ],
  declarations: [RegionanalysisComponent, NormdashboardComponent, AttentionpolicecaseComponent, SurveypolicecaseComponent]
})
export class StatisticModule { }
