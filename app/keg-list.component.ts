import { Component, Input } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <li *ngFor="let beer of childKegList">
      {{beer.name}} | {{beer.brand}} | {{beer.price}}$ | {{beer.alcoholContent}} .abv
      </li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
