import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './Food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div>
      <div *ngIf="childSelectedFood">
        <h3>{{childSelectedFood.name}}</h3>
        <hr>
        <h3>Edit Food</h3>
        <label>Enter New Name:</label>
        <input [(ngModel)]="childSelectedFood.name">
        <label>Enter New description:</label>
        <input [(ngModel)]="childSelectedFood.description">
        <label>Enter New Calory:</label>
        <input [(ngModel)]="childSelectedFood.calories">
        <button (click)="doneButtonClicked()">Done </button>
      </div>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
