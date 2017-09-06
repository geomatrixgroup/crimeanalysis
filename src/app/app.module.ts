import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LoadModule} from './load/load.module';
import {SjzyModule} from './create/sjzy/sjzy.module';
import {ZbtjModule} from './create/zbtj/zbtj.module';
import {FzycModule} from './create/fzyc/fzyc.module';
import {FzrdModule} from './create/fzrd/fzrd.module';
import {FkzzModule} from './create/fkzz/fkzz.module';
import {DepartureService} from './departure/departure.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadModule,
    SjzyModule,
    ZbtjModule,
    FzycModule,
    FzrdModule,
    FkzzModule
  ],
  providers:[DepartureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
