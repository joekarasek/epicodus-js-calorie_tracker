import { Component, EventEmitter } from 'angular2/core';
import { MealItem } from './MealItem.model';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  // outputs: ['onmMealSelect'],
  // pipes: [],
  // directives: [],
  template:
    `
    <ul>
      <li *ngFor="#meal of meals">{{ meal.name }}</li>
    </ul>

    `
})
export class MealListComponent {
  public meals: MealItem[];
  // public onKegSelect: EventEmitter<Keg>;
  // public selectedKeg: Keg;
  // public filterLow: string = "none";
  // public filterType: string = "none";
  constructor() {
    // this.onKegSelect = new EventEmitter();
  }
  // refreshKeg(newKeg: Keg) {
  //   // console.log("event received and refreshKeg run");
  //   // console.log("New Keg is", newKeg);
  //   for(var keg of this.kegList) {
  //     if (keg.name === newKeg.name) {
  //       keg.type = newKeg.type;
  //       keg.ABV = newKeg.ABV;
  //       keg.price = newKeg.price;
  //       keg.pints = newKeg.pints;
  //       // console.log("The edited keg is ", keg);
  //     }
  //   }
  // }
  // kegClicked(clickedKeg: Keg): void {
  //   this.selectedKeg = clickedKeg;
  //   // this.onKegSelect.emit(clickedKeg);
  // }
  // createKeg(newKeg: Keg): void {
  //   console.log(newKeg);
  //   this.kegList.push(
  //     new Keg(newKeg.name, newKeg.type, newKeg.ABV, newKeg.price)
  //   );
  // }
  // onChangeLow(filterOption) {
  //   this.filterLow = filterOption;
  // }
  // onChangeType(filterOption) {
  //   this.filterType = filterOption;
  // }
}
