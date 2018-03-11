import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';


import { AppComponent } from './app.component';
import { PriceService1Component } from './price-service-1/price-service-1.component';
import { PriceServiceInterfaceComponent } from './price-service-interface/price-service-interface.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceService1Component,
    PriceServiceInterfaceComponent
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
