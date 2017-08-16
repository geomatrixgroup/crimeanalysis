import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HotspotModule } from './hotspot/hotspot.module';
import { ControlModule } from './control/control.module';
import { SourceModule } from './source/source.module';
import { PredictionModule } from './prediction/prediction.module';
import { StatisticModule } from './statistic/statistic.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ControlModule,
    HotspotModule,
    SourceModule,
    PredictionModule,
    StatisticModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
