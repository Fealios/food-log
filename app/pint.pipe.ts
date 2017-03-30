import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './Keg.model';

@Pipe({
  name: "pint",
  pure: false
})

export class PintPipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].pintsLeft > 0) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
