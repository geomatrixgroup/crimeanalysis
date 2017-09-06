import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SxfxService} from './sxfx.service';
import {TsfxService} from './tsfx.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    SxfxService,
    TsfxService
  ],
  declarations: []
})
export class FzycModule { }
