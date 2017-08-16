import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DensityanalysisComponent } from './densityanalysis/densityanalysis.component';
import { AggregationanalysisComponent } from './aggregationanalysis/aggregationanalysis.component';
import {HotspotRoutingModule} from './hotspot-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HotspotRoutingModule
  ],
  declarations: [DensityanalysisComponent, AggregationanalysisComponent]
})
export class HotspotModule { }
