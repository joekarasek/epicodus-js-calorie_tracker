import { Component, EventEmitter } from 'angular2/core';
import { MealItem } from './MealItem.model';
import { MealItemComponent } from './meal-item.component';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  // outputs: ['onmMealSelect'],
  // pipes: [],
  directives: [MealItemComponent],
  template:
    `
    <ul>
      <meal-item
        *ngFor="#meal of meals"
        [meal]="meal"
        [class.meal__selected]="meal === selectedMeal"
        (click)="selectMeal(meal)">
      </meal-item>
    </ul>

    `
})
export class MealListComponent {
  public meals: MealItem[];
  public selectedMeal: MealItem;
  // public onKegSelect: EventEmitter<Keg>;
  // public selectedKeg: Keg;
  // public filterLow: string = "none";
  // public filterType: string = "none";
  constructor() {
  }
  selectMeal(clickedMeal: MealItem): void {
    this.selectedMeal = clickedMeal;
    // this.onKegSelect.emit(clickedKeg);
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
