import { PriceServiceInterfaceComponent } from './price-service-interface/price-service-interface.component';

export class Product {
    service: PriceServiceInterfaceComponent;
    basePrice: number;

    constructor(service: PriceServiceInterfaceComponent, basePrice: number){
        this.service = service;
        this.basePrice = basePrice;
    }
    totalPrice(state: string) {
        return this.service.calculateTotalPrice(this.basePrice, state);
    }
}

