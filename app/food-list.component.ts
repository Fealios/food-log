import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './Food.model';

@Component ({
  selector: 'food-list',
  template: `
    <h3> here is the food list </h3>
    <div *ngFor="let currentFood of childFoodList">
        {{currentFood.name}}
        {{currentFood.calories}}
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
}
