import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeseriesanalysisComponent } from './timeseriesanalysis/timeseriesanalysis.component';
import { SituationanalysisComponent } from './situationanalysis/situationanalysis.component';
import {PredictionRoutingModule} from './prediction-routing.module';
@NgModule({
  imports: [
    CommonModule,
    PredictionRoutingModule
  ],
  declarations: [TimeseriesanalysisComponent, SituationanalysisComponent]
})
export class PredictionModule { }
