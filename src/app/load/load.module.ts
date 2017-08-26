import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Load2DService} from './load2d.service';
import {Load3DService} from './load3d.service';
@NgModule({
  imports: [
    CommonModule
  ],
  providers:[Load2DService,Load3DService],
  declarations: []
})
export class LoadModule { }
