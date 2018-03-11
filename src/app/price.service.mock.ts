import { PriceServiceInterfaceComponent } from './price-service-interface/price-service-interface.component';

export class PriceServiceMock implements PriceServiceInterfaceComponent {
    calculateTotalPrice(basePrice: number, state: string) {
        if(state === 'FL') {
            return basePrice + 0.66;
        }
        return basePrice;
    }
}