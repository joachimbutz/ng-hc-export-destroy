import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import * as exporting from 'highcharts/modules/exporting.src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [exporting]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
