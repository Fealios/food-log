import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("Keg 1", "Budweiser", 100, 5.6),
    new Keg("Keg 2", "Heineken", 120, 6.1),
    new Keg("Keg 3", "PBR", 95, 4.8)
  ];
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) { }
}
