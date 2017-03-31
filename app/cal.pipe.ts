import {Pipe, PipeTransform} from '@angular/core';
import { Food } from './Food.model';

@Pipe({
  name: "calPipe",
  pure: false
})

export class CalPipe implements PipeTransform {
  transform(input: Food[], calories) {
    var output: Food[] = [];
    if(calories !== "all"){
      var emptyFood;
      for(var i = 0; i<input.length; i++){
        if(calories === "low" && input[i].calories < 500){
          emptyFood = new Food(input[i].name, input[i].description, input[i].calories)
          output.push(emptyFood);
        }
        else if(calories === "high" && input[i].calories > 500){
          output.push(input[i]);
        }
      }
    } //END IF
    else{
      return input;
    }
  }
}
