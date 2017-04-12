import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './Food.model';

@Component ({
  selector: 'add-food',
  template: `
    <div id="add-food-here">
      <h4> Add food here: </h4>
        <div class="form-group">
          <label>Food name:</label>
          <input #newName>
        </div>
        <div class="form-group">
          <label>Food description:</label>
          <input #newDesc>
        </div>
        <div class="form-group">
          <label>Calorie value:</label>
          <input #newCalorie>
        </div>
      <button class="btn btn-primary" (click)="submitForm(newName.value, newDesc.value, newCalorie.value); newName.value=''; newDesc.value=''; newCalorie.value='';"> Log </button>

    </div>
  `
})

export class AddFood {
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, description: string, calorie: number) {
    var newFood: Food = new Food(name, description, calorie);
    this.newFoodSender.emit(newFood);
  }
}
