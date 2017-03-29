import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Price:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter Abv:</label>
      <input #newAbv>
    </div>
    <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAbv.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAbv.value='';"> Add </button>
  `
})

export class newKeg {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKeg);
  }
}
