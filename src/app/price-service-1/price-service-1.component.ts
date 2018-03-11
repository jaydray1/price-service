import { Component } from '@angular/core';

@Component({
  selector: 'app-price-service-1',
  templateUrl: './price-service-1.component.html',
  styleUrls: ['./price-service-1.component.css']
})
export class PriceService1Component {

  constructor() { }
  calculateTotalPrice(basePrice: number, state: string) {
    const tax = Math.random();
    return basePrice + tax;
  }

}
  
