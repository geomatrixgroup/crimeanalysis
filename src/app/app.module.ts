import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LoadModule} from './load/load.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
