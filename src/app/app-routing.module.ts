import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

import { BrowserModule } from '@angular/platform-browser';
const appRoutes: Routes = [
    {path: '', component: HomeComponent, data: {title: '首页'}},
    {path: 'source', loadChildren: 'app/source/source.module#SourceModule'},
    {path: 'statistic', loadChildren: 'app/statistic/statistic.module#StatisticModule'},
    {path: 'prediction', loadChildren: 'app/prediction/prediction.module#PredictionModule'},
    {path: 'hotspot', loadChildren: 'app/hotspot/hotspot.module#HotspotModule'},
    {path: 'control', loadChildren: 'app/control/control.module#ControlModule'},
    {path: '**', component: PagenotfoundComponent, data: {title: '访问的页面不存在！'}},
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    declarations: [
        HomeComponent,
        PagenotfoundComponent,
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
