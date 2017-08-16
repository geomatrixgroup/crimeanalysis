import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparativeanalysisComponent } from './comparativeanalysis/comparativeanalysis.component';
import {ControlRoutingModule} from './control-routing.module';
@NgModule({
  imports: [
    CommonModule,
    ControlRoutingModule
  ],
  declarations: [ComparativeanalysisComponent]
})
export class ControlModule { }
