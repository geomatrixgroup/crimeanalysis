import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DldtService} from './dldt.service';
import {DljtService} from './dljt.service';
import {JqsjService} from './jqsj.service';
import {ZttcService} from './zttc.service';
import {QwjsService} from './qwjs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    DldtService,
    DljtService,
    JqsjService,
    ZttcService,
    QwjsService
  ],
  declarations: []
})
export class SjzyModule { }
