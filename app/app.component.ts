import { Component } from '@angular/core';
import { Food } from './Food.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Food log</h1>
  <food-list [childFoodList]="masterFoodList"></food-list>
  <add-food (newFoodSender)="addFood($event)"></add-food>
  `
})

export class AppComponent {
  masterFoodList: Food[] = [
    new Food("Burger", "Quarter lb patty, with lettuce, tomatoe, pickle, onion on sesame seed bun with some mayo suace", 1000),
    new Food("Pizza", "Pepperoni, Olive, Artichoke Hearts, other stuff that goes in pizza", 500),
    new Food("Ceasar Salad", "Kale leaves with some parmesan cheese and roasted garlic crutons topped with Ceasar dressing", 500)
  ]

  addFood(newFood: Food) {
    this.masterFoodList.push(newFood);
  }


}
