import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './Food.model';

@Component ({
  selector: 'food-list',
  template: `
    <h3> Your log: </h3>
    <div *ngFor="let currentFood of childFoodList">
        <h5 class="food-name">{{currentFood.name}}</h5>
        cal: <span class="food-calories">{{currentFood.calories}} </span>
        <p class="food-description">
        {{currentFood.description}}
        </p>
        <button class="btn btn-default" (click)="editButtonHasBeenClicked(currentFood)"> Edit </button>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(foodToEdit: Food){
    this.clickSender.emit(foodToEdit);
  }
}
