import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ComparativeanalysisComponent} from './comparativeanalysis/comparativeanalysis.component';
const controlRoutes: Routes = [
  {path: 'comparativeanalysis', component: ComparativeanalysisComponent, data: { title: '对比分析' }}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(controlRoutes)
  ],
  declarations: []
})
export class ControlRoutingModule { }
