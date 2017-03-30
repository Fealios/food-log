export class Keg {
  pintsLeft: number = 124;
  pricePerPint: number = Math.round(((this.price / 124) * 5.5))
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {}
}
