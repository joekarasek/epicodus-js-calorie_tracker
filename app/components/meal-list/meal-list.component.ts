import { Component, EventEmitter } from 'angular2/core';
import { MealItem } from '../../models/MealItem.model';
import { MealItemComponent } from '../meal-item/meal-item.component';
import { CaloriesPipe } from '../../pipes/calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  pipes: [CaloriesPipe],
  directives: [MealItemComponent],
  template:
    `
    <ul>
      <div class="mealList__filters">
        <select (change)="filterCaloriesChange($event.target.value)" class="filter">
          <option value="none" selected="selected">Show All</option>
          <option value="low">Low Calories (<300)</option>
          <option value="high">High Calories (>300)</option>
        </select>
      </div>
      <meal-item
        *ngFor="#meal of meals | calories:filterCalories"
        [meal]="meal"
        [selectedMeal]="selectedMeal"
        [class.meal__selected]="meal === selectedMeal"
        (click)="selectMeal(meal)">
      </meal-item>
    </ul>

    `
})
export class MealListComponent {
  public meals: MealItem[];
  public selectedMeal: MealItem;
  public filterCalories: string = "none";
  constructor() {
  }
  selectMeal(clickedMeal: MealItem): void {
    this.selectedMeal = clickedMeal;
  }
  filterCaloriesChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
