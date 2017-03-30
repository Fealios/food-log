import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="keg-holder" [class]="checkLow(currentKeg)" *ngFor="let currentKeg of childKegList | pint">
      <img src="./../resources/keg.png">
      {{currentKeg.name}} | {{currentKeg.brand}} |  {{currentKeg.price}}$ | {{currentKeg.alcoholContent}} .abv |  {{currentKeg.pintsLeft}} Pints Left | <span [class]="checkPrice(currentKeg)">{{currentKeg.pricePerPint}}$ for Pint </span> | <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button> <button (click)="subtractPint(currentKeg)"> Serve a Pint! </button>
      <button (click)="subtractGrowler(currentKeg)"> Serve a Growler!
      </button>
      <button (click)="subtractGargantuan(currentKeg)"> You're an Alcoholic
      </button>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  subtractPint(kegToEdit: Keg) {
    kegToEdit.pintsLeft--;
  }

  subtractGrowler(kegToEdit: Keg) {
    kegToEdit.pintsLeft -= 2;
  }

  subtractGargantuan(kegToEdit: Keg) {
    kegToEdit.pintsLeft -= 4;
  }

  checkLow(selectedKeg: Keg) {
    if(selectedKeg.pintsLeft <= 10){
      return "low"
    }
    else {
      return "full"
    }
  }

  checkPrice(selectedKeg: Keg) {
    if(selectedKeg.pricePerPint >= 5) {
      return "pricey";
    }
    else {
      return "budget";
    }
  }
}
