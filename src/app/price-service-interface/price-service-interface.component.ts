export interface PriceServiceInterfaceComponent {
  calculateTotalPrice(basePrice: number, state: string): number;
}
