import { Component } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  <div>
    <select (change)="onChange($event.target.value)">
      <option value="weak"> Weakest first </option>
      <option value=""> Strongest first </option>
    </select>
    <keg-list [childKegList]="masterKegList | alcoholContent:sortByAlcoholContent" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  sortByAlcoholContent: string ="weak";

  masterKegList: Keg[] = [
    new Keg("Keg 1", "Budweiser", 100, 5.6),
    new Keg("Keg 2", "Heineken", 120, 6.1),
    new Keg("Keg 3", "PBR", 95, 4.8),
    new Keg("Keg 4", "Rainier", 90, 4.6),
    new Keg("Keg 5", "Mannys Pale", 120, 5.4)
  ];

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg) {
    console.log(clickedKeg.brand);
    this.selectedKeg = clickedKeg;
  }

  onChange(strength){
    this.sortByAlcoholContent = strength;
  }

}
