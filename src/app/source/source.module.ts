import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasemapComponent } from './basemap/basemap.component';
import { PolicecaseComponent } from './policecase/policecase.component';
import { TrafficComponent } from './traffic/traffic.component';
import { ThematicmapComponent } from './thematicmap/thematicmap.component';
import { FulltextretrievalComponent } from './fulltextretrieval/fulltextretrieval.component';
import {SourceRoutingModule} from './source-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SourceRoutingModule
  ],
  declarations: [BasemapComponent, PolicecaseComponent, TrafficComponent, ThematicmapComponent, FulltextretrievalComponent]
})
export class SourceModule { }
