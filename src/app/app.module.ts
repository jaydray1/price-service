import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';


import { AppComponent } from './app.component';
import { PriceService1Component } from './price-service-1/price-service-1.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceService1Component
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
