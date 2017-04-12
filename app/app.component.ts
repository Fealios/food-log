import { Component } from '@angular/core';
import { Food } from './Food.model';

@Component({
  selector: 'app-root',
  template: `

  <h1 id="title">Food log</h1>

  <div id="master">
    <div id="sort">
      <select id="pipe-control" class="form-control" (change)="onChange($event.target.value)">
        <option value="all"> All foods </option>
        <option value="low"> Lowest calorie </option>
        <option value="high"> Highest calorie </option>
      </select>
    </div>

    <food-list [childFoodList]="masterFoodList | calPipe:sortByCal" (clickSender)="editFood($event)"></food-list>
    
    <add-food (newFoodSender)="addFood($event)"></add-food>
    <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>

  </div>
  `
})

export class AppComponent {
  selectedFood = null;
  sortByCal: string = "all";

  masterFoodList: Food[] = [
    new Food('Burger', 'Quarter lb patty, with lettuce, tomatoe, pickle, onion on sesame seed bun with some mayo suace', 1000),
    new Food('Pizza', 'Pepperoni, Olive, Artichoke Hearts, other stuff that goes in pizza', 500),
    new Food('Ceasar Salad', 'Kale leaves with some parmesan cheese and roasted garlic crutons topped with Ceasar dressing', 500)
  ]

  addFood(newFood: Food) {
    this.masterFoodList.push(newFood);
  }

  onChange(cal){
    this.sortByCal = cal;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  editFood(clickedFood){
    this.selectedFood = clickedFood;
  }

}
