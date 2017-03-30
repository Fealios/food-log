import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <li *ngFor="let currentKeg of childKegList | pint">
      {{currentKeg.name}} | {{currentKeg.brand}} | {{currentKeg.price}}$ | {{currentKeg.alcoholContent}} .abv |  {{currentKeg.pintsLeft}} Pints Left | <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button> <button (click)="subtractPint(currentKeg)"> Serve a Pint! </button>
      </li>
    </ul>
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
}
