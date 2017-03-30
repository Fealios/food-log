import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './Keg.model';

@Pipe({
  name: "alcoholContent",
  pure: false
})

export class AlcoholContentPipe implements PipeTransform {
  transform(input: Keg[], weakOrStrong) {
    if (weakOrStrong === "weak") {
      input.sort(function(a,b) {
        return a.alcoholContent - b.alcoholContent;
      });
    } else {
      input.sort(function(a,b) {
        return b.alcoholContent - a.alcoholContent;
      });
    }
    return input
  }
}
