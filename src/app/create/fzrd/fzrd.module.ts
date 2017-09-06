import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JjfxService} from './jjfx.service';
import {MdfxService} from './mdfx.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    JjfxService,
    MdfxService
  ],
  declarations: []
})
export class FzrdModule { }
