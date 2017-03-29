import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
      <div *ngIf="childSelectedKeg">
        <h3>{{childSelectedKeg.name}}</h3>
        <hr>
        <h3>Edit Keg</h3>
        <label>Enter New Name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
        <label>Enter New Brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand">
        <label>Enter New Price:</label>
        <input [(ngModel)]="childSelectedKeg.price">
        <label>Enter New Alcohol Content:</label>
        <input [(ngModel)]="childSelectedKeg.alcoholContent">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
